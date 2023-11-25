import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Condicaopagamento } from './Condicaopagamento';
import { Formapagamento } from './Formapagamento';

@Index('ordemfaturamento_pkey', ['id'], { unique: true })
@Index('ix_ordemfaturamento_fk_ordemfaturamento_idatendimento', ['idatendimento'], {})
@Index('ix_ordemfaturamento_fk_ordemfaturamento_idcondicaopagamento', ['idcondicaopagamento'], {})
@Index('ix_ordemfaturamento_fk_ordemfaturamento_idfontepagadora', ['idfontepagadora'], {})
@Index('ix_ordemfaturamento_fk_ordemfaturamento_idformapagamento', ['idformapagamento'], {})
@Entity('ordemfaturamento', { schema: 'public' })
export class Ordemfaturamento {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('timestamp without time zone', {
    name: 'datacancelamentonf',
    nullable: true,
  })
  datacancelamentonf: Date | null;

  @Column('timestamp without time zone', {
    name: 'datacancelamentoordem',
    nullable: true,
  })
  datacancelamentoordem: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataemissaonf',
    nullable: true,
  })
  dataemissaonf: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataemissaoordem',
    nullable: true,
  })
  dataemissaoordem: Date | null;

  @Column('timestamp without time zone', { name: 'dataenviofaturamento' })
  dataenviofaturamento: Date;

  @Column('boolean', {
    name: 'emitirnf',
    nullable: true,
    default: () => 'false',
  })
  emitirnf: boolean | null;

  @Column('character varying', {
    name: 'idordemfaturamento',
    nullable: true,
    length: 255,
  })
  idordemfaturamento: string | null;

  @Column('numeric', {
    name: 'valorfaturadoerp',
    nullable: true,
    precision: 38,
    scale: 0,
  })
  valorfaturadoerp: string | null;

  @Column('numeric', { name: 'valorfaturamento', precision: 38, scale: 0 })
  valorfaturamento: string;

  @Column('integer', { name: 'idatendimento' })
  idatendimento: number;

  @Column('integer', { name: 'idcondicaopagamento' })
  idcondicaopagamento: number;

  @Column('integer', { name: 'idfontepagadora' })
  idfontepagadora: number;

  @Column('integer', { name: 'idformapagamento' })
  idformapagamento: number;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.ordemfaturamentos)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Condicaopagamento, (condicaopagamento) => condicaopagamento.ordemfaturamentos)
  @JoinColumn([{ name: 'idcondicaopagamento', referencedColumnName: 'id' }])
  idcondicaopagamento2: Condicaopagamento;

  @ManyToOne(() => Cliente, (cliente) => cliente.ordemfaturamentos)
  @JoinColumn([{ name: 'idfontepagadora', referencedColumnName: 'id' }])
  idfontepagadora2: Cliente;

  @ManyToOne(() => Formapagamento, (formapagamento) => formapagamento.ordemfaturamentos)
  @JoinColumn([{ name: 'idformapagamento', referencedColumnName: 'id' }])
  idformapagamento2: Formapagamento;
}
