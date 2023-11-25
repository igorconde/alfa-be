import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Fatoatendimento } from '@modules/atendimento/entities/fatoatendimento.entity';
import { Fatostatusatendimento } from '@modules/atendimento/entities/fatostatusatendimento.entity';
import { Relatoriodn } from '@modules/common/entities/relatoriodn.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AtendimentoSubetapa } from './atendimento-subetapa.entity';
import { Fatostatusatendimentobp } from './fatostatusatendimentobp.entity';
import { Fatostatusatendimentohistoricobp } from './fatostatusatendimentohistoricobp.entity';
import { Fatostatusatendimentohistoricoia } from './fatostatusatendimentohistoricoia.entity';
import { Fatostatusatendimentohistoricoie } from './fatostatusatendimentohistoricoie.entity';
import { Fatostatusatendimentohistoricoipea } from './fatostatusatendimentohistoricoipea.entity';
import { Fatostatusatendimentoia } from './fatostatusatendimentoia.entity';
import { Fatostatusatendimentoie } from './fatostatusatendimentoie.entity';
import { Fatostatusatendimentoipea } from './fatostatusatendimentoipea.entity';

@Index('atendimentostatus_pkey', ['id'], { unique: true })
@Entity('atendimentostatus', { schema: 'public' })
export class Atendimentostatus {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'chave', nullable: true, length: 255 })
  chave: string | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Atendimento, (atendimento) => atendimento.idatendimentostatus2)
  atendimentos: Atendimento[];

  @OneToMany(() => AtendimentoSubetapa, (atendimentoSubetapa) => atendimentoSubetapa.idAtendimentoStatus2)
  atendimentoSubetapas: AtendimentoSubetapa[];

  @OneToMany(() => Fatoatendimento, (fatoatendimento) => fatoatendimento.idatendimentostatus2)
  fatoatendimentos: Fatoatendimento[];

  @OneToMany(() => Fatostatusatendimento, (fatostatusatendimento) => fatostatusatendimento.idatendimentostatus2)
  fatostatusatendimentos: Fatostatusatendimento[];

  @OneToMany(() => Fatostatusatendimentobp, (fatostatusatendimentobp) => fatostatusatendimentobp.idatendimentostatus2)
  fatostatusatendimentobps: Fatostatusatendimentobp[];

  @OneToMany(() => Fatostatusatendimentohistoricobp, (fatostatusatendimentohistoricobp) => fatostatusatendimentohistoricobp.idatendimentostatus2)
  fatostatusatendimentohistoricobps: Fatostatusatendimentohistoricobp[];

  @OneToMany(() => Fatostatusatendimentohistoricoia, (fatostatusatendimentohistoricoia) => fatostatusatendimentohistoricoia.idatendimentostatus2)
  fatostatusatendimentohistoricoias: Fatostatusatendimentohistoricoia[];

  @OneToMany(() => Fatostatusatendimentohistoricoie, (fatostatusatendimentohistoricoie) => fatostatusatendimentohistoricoie.idatendimentostatus)
  fatostatusatendimentohistoricoies: Fatostatusatendimentohistoricoie[];

  @OneToMany(() => Fatostatusatendimentohistoricoipea, (fatostatusatendimentohistoricoipea) => fatostatusatendimentohistoricoipea.idatendimentostatus2)
  fatostatusatendimentohistoricoipeas: Fatostatusatendimentohistoricoipea[];

  @OneToMany(() => Fatostatusatendimentoia, (fatostatusatendimentoia) => fatostatusatendimentoia.idatendimentostatus2)
  fatostatusatendimentoias: Fatostatusatendimentoia[];

  @OneToMany(() => Fatostatusatendimentoie, (fatostatusatendimentoie) => fatostatusatendimentoie.idatendimentostatus)
  fatostatusatendimentoies: Fatostatusatendimentoie[];

  @OneToMany(() => Fatostatusatendimentoipea, (fatostatusatendimentoipea) => fatostatusatendimentoipea.idatendimentostatus2)
  fatostatusatendimentoipeas: Fatostatusatendimentoipea[];

  @OneToMany(() => Relatoriodn, (relatoriodn) => relatoriodn.idatendimentostatus2)
  relatoriodns: Relatoriodn[];
}
