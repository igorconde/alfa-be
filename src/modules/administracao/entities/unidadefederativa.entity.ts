import { Regiao } from '@modules/administracao/entities/regiao.entity';
import { Fatofontepagadoraatendimentobp } from '@modules/atendimento/entities/fatofontepagadoraatendimentobp.entity';
import { Fatofontepagadoraatendimentoia } from '@modules/atendimento/entities/fatofontepagadoraatendimentoia.entity';
import { Fatofontepagadoraatendimentoie } from '@modules/atendimento/entities/fatofontepagadoraatendimentoie.entity';
import { Fatofontepagadoraatendimentoipea } from '@modules/atendimento/entities/fatofontepagadoraatendimentoipea.entity';
import { Fatosolicitacaoatendimentobp } from '@modules/atendimento/entities/fatosolicitacaoatendimentobp.entity';
import { Fatosolicitacaoatendimentoia } from '@modules/atendimento/entities/fatosolicitacaoatendimentoia.entity';
import { Fatosolicitacaoatendimentoie } from '@modules/atendimento/entities/fatosolicitacaoatendimentoie.entity';
import { Fatosolicitacaoatendimentoipea } from '@modules/atendimento/entities/fatosolicitacaoatendimentoipea.entity';
import { Fatostatusatendimentobp } from '@modules/atendimento/entities/fatostatusatendimentobp.entity';
import { Fatostatusatendimentohistoricobp } from '@modules/atendimento/entities/fatostatusatendimentohistoricobp.entity';
import { Fatostatusatendimentohistoricoia } from '@modules/atendimento/entities/fatostatusatendimentohistoricoia.entity';
import { Fatostatusatendimentohistoricoie } from '@modules/atendimento/entities/fatostatusatendimentohistoricoie.entity';
import { Fatostatusatendimentohistoricoipea } from '@modules/atendimento/entities/fatostatusatendimentohistoricoipea.entity';
import { Fatostatusatendimentoia } from '@modules/atendimento/entities/fatostatusatendimentoia.entity';
import { Fatostatusatendimentoie } from '@modules/atendimento/entities/fatostatusatendimentoie.entity';
import { Fatostatusatendimentoipea } from '@modules/atendimento/entities/fatostatusatendimentoipea.entity';
import { Apl } from '@modules/common/entities/apl.entity';
import { Fatoresultadocompetencia } from '@modules/metas/entities/fatoresultadocompetencia.entity';
import { Fatoproducaoapropriada } from '@modules/producao/entities/fatoproducaoapropriada.entity';
import { Fatoproducaoapropriadametrologia } from '@modules/producao/entities/fatoproducaoapropriadametrologia.entity';
import { Fatoreceitacompetencia } from '@modules/receita/entities/fatoreceitacompetencia.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Municipio } from './municipio.entity';

@Index('unidadefederativa_pkey', ['id'], { unique: true })
@Index('iunidadefederativafkregiao', ['idregiao'], {})
@Entity('unidadefederativa', { schema: 'public' })
export class Unidadefederativa {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', { name: 'sigla', nullable: true, length: 255 })
  sigla: string | null;

  @Column('integer', { name: 'idregiao', nullable: true })
  idregiao: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Apl, (apl) => apl.idunidadefederativa2)
  apls: Apl[];

  @OneToMany(() => Fatofontepagadoraatendimentobp, (fatofontepagadoraatendimentobp) => fatofontepagadoraatendimentobp.idunidadefederativa2)
  fatofontepagadoraatendimentobps: Fatofontepagadoraatendimentobp[];

  @OneToMany(() => Fatofontepagadoraatendimentoia, (fatofontepagadoraatendimentoia) => fatofontepagadoraatendimentoia.idunidadefederativa2)
  fatofontepagadoraatendimentoias: Fatofontepagadoraatendimentoia[];

  @OneToMany(() => Fatofontepagadoraatendimentoie, (fatofontepagadoraatendimentoie) => fatofontepagadoraatendimentoie.idunidadefederativa)
  fatofontepagadoraatendimentoies: Fatofontepagadoraatendimentoie[];

  @OneToMany(() => Fatofontepagadoraatendimentoipea, (fatofontepagadoraatendimentoipea) => fatofontepagadoraatendimentoipea.idunidadefederativa2)
  fatofontepagadoraatendimentoipeas: Fatofontepagadoraatendimentoipea[];

  @OneToMany(() => Fatoproducaoapropriada, (fatoproducaoapropriada) => fatoproducaoapropriada.idunidadefederativa2)
  fatoproducaoapropriadas: Fatoproducaoapropriada[];

  @OneToMany(() => Fatoproducaoapropriadametrologia, (fatoproducaoapropriadametrologia) => fatoproducaoapropriadametrologia.idunidadefederativa2)
  fatoproducaoapropriadametrologias: Fatoproducaoapropriadametrologia[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idunidadefederativa2)
  fatoreceitacompetencias: Fatoreceitacompetencia[];

  @OneToMany(() => Fatoresultadocompetencia, (fatoresultadocompetencia) => fatoresultadocompetencia.idunidadefederativa2)
  fatoresultadocompetencias: Fatoresultadocompetencia[];

  @OneToMany(() => Fatosolicitacaoatendimentobp, (fatosolicitacaoatendimentobp) => fatosolicitacaoatendimentobp.idunidadefederativa2)
  fatosolicitacaoatendimentobps: Fatosolicitacaoatendimentobp[];

  @OneToMany(() => Fatosolicitacaoatendimentoia, (fatosolicitacaoatendimentoia) => fatosolicitacaoatendimentoia.idunidadefederativa2)
  fatosolicitacaoatendimentoias: Fatosolicitacaoatendimentoia[];

  @OneToMany(() => Fatosolicitacaoatendimentoie, (fatosolicitacaoatendimentoie) => fatosolicitacaoatendimentoie.idunidadefederativa)
  fatosolicitacaoatendimentoies: Fatosolicitacaoatendimentoie[];

  @OneToMany(() => Fatosolicitacaoatendimentoipea, (fatosolicitacaoatendimentoipea) => fatosolicitacaoatendimentoipea.idunidadefederativa2)
  fatosolicitacaoatendimentoipeas: Fatosolicitacaoatendimentoipea[];

  @OneToMany(() => Fatostatusatendimentobp, (fatostatusatendimentobp) => fatostatusatendimentobp.idunidadefederativa2)
  fatostatusatendimentobps: Fatostatusatendimentobp[];

  @OneToMany(() => Fatostatusatendimentohistoricobp, (fatostatusatendimentohistoricobp) => fatostatusatendimentohistoricobp.idunidadefederativa2)
  fatostatusatendimentohistoricobps: Fatostatusatendimentohistoricobp[];

  @OneToMany(() => Fatostatusatendimentohistoricoia, (fatostatusatendimentohistoricoia) => fatostatusatendimentohistoricoia.idunidadefederativa2)
  fatostatusatendimentohistoricoias: Fatostatusatendimentohistoricoia[];

  @OneToMany(() => Fatostatusatendimentohistoricoie, (fatostatusatendimentohistoricoie) => fatostatusatendimentohistoricoie.idunidadefederativa)
  fatostatusatendimentohistoricoies: Fatostatusatendimentohistoricoie[];

  @OneToMany(() => Fatostatusatendimentohistoricoipea, (fatostatusatendimentohistoricoipea) => fatostatusatendimentohistoricoipea.idunidadefederativa2)
  fatostatusatendimentohistoricoipeas: Fatostatusatendimentohistoricoipea[];

  @OneToMany(() => Fatostatusatendimentoia, (fatostatusatendimentoia) => fatostatusatendimentoia.idunidadefederativa2)
  fatostatusatendimentoias: Fatostatusatendimentoia[];

  @OneToMany(() => Fatostatusatendimentoie, (fatostatusatendimentoie) => fatostatusatendimentoie.idunidadefederativa)
  fatostatusatendimentoies: Fatostatusatendimentoie[];

  @OneToMany(() => Fatostatusatendimentoipea, (fatostatusatendimentoipea) => fatostatusatendimentoipea.idunidadefederativa2)
  fatostatusatendimentoipeas: Fatostatusatendimentoipea[];

  @OneToMany(() => Municipio, (municipio) => municipio.idunidadefederativa2)
  municipios: Municipio[];

  @ManyToOne(() => Regiao, (regiao) => regiao.unidadefederativas)
  @JoinColumn([{ name: 'idregiao', referencedColumnName: 'id' }])
  idregiao2: Regiao;
}
