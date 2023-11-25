import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Entregafaturamento } from './Entregafaturamento';
import { Atendimento } from './Atendimento';
import { Enviofaturamento } from './Enviofaturamento';
import { Proposta } from './Proposta';
import { Receitafaturamento } from './Receitafaturamento';
import { Receitafaturamentobackup } from './Receitafaturamentobackup';

@Index('enviofaturamentoatendimento_pkey', ['id'], { unique: true })
@Index('ienviofaturamentoatendimentofkatendimento', ['idatendimento'], {})
@Index('ienviofaturamentoatendimentofkenviofaturamento', ['idenviofaturamento'], {})
@Index('ienviofaturamentoatendimentofkproposta', ['idproposta'], {})
@Entity('enviofaturamentoatendimento', { schema: 'public' })
export class Enviofaturamentoatendimento {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'agruparporproposta',
    nullable: true,
    length: 255,
  })
  agruparporproposta: string | null;

  @Column('character varying', {
    name: 'condicaopagamento',
    nullable: true,
    length: 1000,
  })
  condicaopagamento: string | null;

  @Column('integer', { name: 'idenviofaturamento', nullable: true })
  idenviofaturamento: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idproposta', nullable: true })
  idproposta: number | null;

  @Column('double precision', { name: 'valor', nullable: true, precision: 53 })
  valor: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'codigointegracaoreceita',
    nullable: true,
    length: 45,
  })
  codigointegracaoreceita: string | null;

  @Column('integer', { name: 'idcondicaopag', nullable: true })
  idcondicaopag: number | null;

  @OneToMany(() => Entregafaturamento, (entregafaturamento) => entregafaturamento.idenviofaturamentoatendimento2)
  entregafaturamentos: Entregafaturamento[];

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.enviofaturamentoatendimentos)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Enviofaturamento, (enviofaturamento) => enviofaturamento.enviofaturamentoatendimentos)
  @JoinColumn([{ name: 'idenviofaturamento', referencedColumnName: 'id' }])
  idenviofaturamento2: Enviofaturamento;

  @ManyToOne(() => Proposta, (proposta) => proposta.enviofaturamentoatendimentos)
  @JoinColumn([{ name: 'idproposta', referencedColumnName: 'id' }])
  idproposta2: Proposta;

  @OneToMany(() => Receitafaturamento, (receitafaturamento) => receitafaturamento.idenviofaturamentoatendimento)
  receitafaturamentos: Receitafaturamento[];

  @OneToMany(() => Receitafaturamentobackup, (receitafaturamentobackup) => receitafaturamentobackup.idenviofaturamentoatendimento)
  receitafaturamentobackups: Receitafaturamentobackup[];
}
