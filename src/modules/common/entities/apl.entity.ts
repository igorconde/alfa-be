import { Unidadefederativa } from '@modules/administracao/entities/unidadefederativa.entity';
import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Fatofontepagadoraatendimentobp } from '@modules/atendimento/entities/fatofontepagadoraatendimentobp.entity';
import { Fatofontepagadoraatendimentoie } from '@modules/atendimento/entities/fatofontepagadoraatendimentoie.entity';
import { Fatofontepagadoraatendimentoipea } from '@modules/atendimento/entities/fatofontepagadoraatendimentoipea.entity';
import { Fatosolicitacaoatendimentobp } from '@modules/atendimento/entities/fatosolicitacaoatendimentobp.entity';
import { Fatosolicitacaoatendimentoie } from '@modules/atendimento/entities/fatosolicitacaoatendimentoie.entity';
import { Fatosolicitacaoatendimentoipea } from '@modules/atendimento/entities/fatosolicitacaoatendimentoipea.entity';
import { Fatostatusatendimentobp } from '@modules/atendimento/entities/fatostatusatendimentobp.entity';
import { Fatostatusatendimentohistoricobp } from '@modules/atendimento/entities/fatostatusatendimentohistoricobp.entity';
import { Fatostatusatendimentohistoricoie } from '@modules/atendimento/entities/fatostatusatendimentohistoricoie.entity';
import { Fatostatusatendimentohistoricoipea } from '@modules/atendimento/entities/fatostatusatendimentohistoricoipea.entity';
import { Fatostatusatendimentoie } from '@modules/atendimento/entities/fatostatusatendimentoie.entity';
import { Fatostatusatendimentoipea } from '@modules/atendimento/entities/fatostatusatendimentoipea.entity';
import { Setor } from '@modules/atendimento/entities/setor.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('apl_pkey', ['id'], { unique: true })
@Index('ix_apl_fk_apl_idsetor', ['idsetor'], {})
@Index('ix_apl_fk_apl_idunidadefederativa', ['idunidadefederativa'], {})
@Entity('apl', { schema: 'public' })
export class Apl {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 80,
  })
  descricao: string | null;

  @Column('integer', { name: 'idsetor', nullable: true })
  idsetor: number | null;

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @ManyToOne(() => Setor, (setor) => setor.apls)
  @JoinColumn([{ name: 'idsetor', referencedColumnName: 'id' }])
  idsetor2: Setor;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.apls)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @OneToMany(() => Atendimento, (atendimento) => atendimento.idapl)
  atendimentos: Atendimento[];

  @OneToMany(() => Fatofontepagadoraatendimentobp, (fatofontepagadoraatendimentobp) => fatofontepagadoraatendimentobp.idapl2)
  fatofontepagadoraatendimentobps: Fatofontepagadoraatendimentobp[];

  @OneToMany(() => Fatofontepagadoraatendimentoie, (fatofontepagadoraatendimentoie) => fatofontepagadoraatendimentoie.idapl)
  fatofontepagadoraatendimentoies: Fatofontepagadoraatendimentoie[];

  @OneToMany(() => Fatofontepagadoraatendimentoipea, (fatofontepagadoraatendimentoipea) => fatofontepagadoraatendimentoipea.idapl2)
  fatofontepagadoraatendimentoipeas: Fatofontepagadoraatendimentoipea[];

  @OneToMany(() => Fatosolicitacaoatendimentobp, (fatosolicitacaoatendimentobp) => fatosolicitacaoatendimentobp.idapl2)
  fatosolicitacaoatendimentobps: Fatosolicitacaoatendimentobp[];

  @OneToMany(() => Fatosolicitacaoatendimentoie, (fatosolicitacaoatendimentoie) => fatosolicitacaoatendimentoie.idapl)
  fatosolicitacaoatendimentoies: Fatosolicitacaoatendimentoie[];

  @OneToMany(() => Fatosolicitacaoatendimentoipea, (fatosolicitacaoatendimentoipea) => fatosolicitacaoatendimentoipea.idapl2)
  fatosolicitacaoatendimentoipeas: Fatosolicitacaoatendimentoipea[];

  @OneToMany(() => Fatostatusatendimentobp, (fatostatusatendimentobp) => fatostatusatendimentobp.idapl2)
  fatostatusatendimentobps: Fatostatusatendimentobp[];

  @OneToMany(() => Fatostatusatendimentohistoricobp, (fatostatusatendimentohistoricobp) => fatostatusatendimentohistoricobp.idapl2)
  fatostatusatendimentohistoricobps: Fatostatusatendimentohistoricobp[];

  @OneToMany(() => Fatostatusatendimentohistoricoie, (fatostatusatendimentohistoricoie) => fatostatusatendimentohistoricoie.idapl)
  fatostatusatendimentohistoricoies: Fatostatusatendimentohistoricoie[];

  @OneToMany(() => Fatostatusatendimentohistoricoipea, (fatostatusatendimentohistoricoipea) => fatostatusatendimentohistoricoipea.idapl2)
  fatostatusatendimentohistoricoipeas: Fatostatusatendimentohistoricoipea[];

  @OneToMany(() => Fatostatusatendimentoie, (fatostatusatendimentoie) => fatostatusatendimentoie.idapl)
  fatostatusatendimentoies: Fatostatusatendimentoie[];

  @OneToMany(() => Fatostatusatendimentoipea, (fatostatusatendimentoipea) => fatostatusatendimentoipea.idapl2)
  fatostatusatendimentoipeas: Fatostatusatendimentoipea[];
}
