import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoatendimentoreferencial } from './anexoatendimentoreferencial.entity';
import { Fatofontepagadoraatendimentobp } from './fatofontepagadoraatendimentobp.entity';
import { Fatofontepagadoraatendimentoia } from './fatofontepagadoraatendimentoia.entity';
import { Fatofontepagadoraatendimentoie } from './fatofontepagadoraatendimentoie.entity';
import { Fatofontepagadoraatendimentoipea } from './fatofontepagadoraatendimentoipea.entity';
import { Fatosolicitacaoatendimentobp } from './fatosolicitacaoatendimentobp.entity';
import { Fatosolicitacaoatendimentoia } from './fatosolicitacaoatendimentoia.entity';
import { Fatosolicitacaoatendimentoie } from './fatosolicitacaoatendimentoie.entity';
import { Fatosolicitacaoatendimentoipea } from './fatosolicitacaoatendimentoipea.entity';
import { Historicotrocastatusdndr } from './historicotrocastatusdndr.entity';
import { Indicadoratendimentoreferencial } from './indicadoratendimentoreferencial.entity';

@Index('solicitacaostatus_pkey', ['id'], { unique: true })
@Entity('solicitacaostatus', { schema: 'public' })
export class Solicitacaostatus {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'chave', nullable: true, length: 45 })
  chave: string | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 45,
  })
  descricao: string | null;

  @OneToMany(() => Anexoatendimentoreferencial, (anexoatendimentoreferencial) => anexoatendimentoreferencial.idsolicitacaostatus2)
  anexoatendimentoreferencials: Anexoatendimentoreferencial[];

  @OneToMany(() => Atendimento, (atendimento) => atendimento.idsolicitacaostatus)
  atendimentos: Atendimento[];

  @OneToMany(() => Fatofontepagadoraatendimentobp, (fatofontepagadoraatendimentobp) => fatofontepagadoraatendimentobp.idsolicitacaostatus2)
  fatofontepagadoraatendimentobps: Fatofontepagadoraatendimentobp[];

  @OneToMany(() => Fatofontepagadoraatendimentoia, (fatofontepagadoraatendimentoia) => fatofontepagadoraatendimentoia.idsolicitacaostatus2)
  fatofontepagadoraatendimentoias: Fatofontepagadoraatendimentoia[];

  @OneToMany(() => Fatofontepagadoraatendimentoie, (fatofontepagadoraatendimentoie) => fatofontepagadoraatendimentoie.idsolicitacaostatus)
  fatofontepagadoraatendimentoies: Fatofontepagadoraatendimentoie[];

  @OneToMany(() => Fatofontepagadoraatendimentoipea, (fatofontepagadoraatendimentoipea) => fatofontepagadoraatendimentoipea.idsolicitacaostatus2)
  fatofontepagadoraatendimentoipeas: Fatofontepagadoraatendimentoipea[];

  @OneToMany(() => Fatosolicitacaoatendimentobp, (fatosolicitacaoatendimentobp) => fatosolicitacaoatendimentobp.idsolicitacaostatus2)
  fatosolicitacaoatendimentobps: Fatosolicitacaoatendimentobp[];

  @OneToMany(() => Fatosolicitacaoatendimentoia, (fatosolicitacaoatendimentoia) => fatosolicitacaoatendimentoia.idsolicitacaostatus2)
  fatosolicitacaoatendimentoias: Fatosolicitacaoatendimentoia[];

  @OneToMany(() => Fatosolicitacaoatendimentoie, (fatosolicitacaoatendimentoie) => fatosolicitacaoatendimentoie.idsolicitacaostatus)
  fatosolicitacaoatendimentoies: Fatosolicitacaoatendimentoie[];

  @OneToMany(() => Fatosolicitacaoatendimentoipea, (fatosolicitacaoatendimentoipea) => fatosolicitacaoatendimentoipea.idsolicitacaostatus2)
  fatosolicitacaoatendimentoipeas: Fatosolicitacaoatendimentoipea[];

  @OneToMany(() => Historicotrocastatusdndr, (historicotrocastatusdndr) => historicotrocastatusdndr.idsolicitacaostatus2)
  historicotrocastatusdndrs: Historicotrocastatusdndr[];

  @OneToMany(() => Indicadoratendimentoreferencial, (indicadoratendimentoreferencial) => indicadoratendimentoreferencial.idsolicitacaostatus2)
  indicadoratendimentoreferencials: Indicadoratendimentoreferencial[];
}
