import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Entregafaturamento } from './Entregafaturamento';
import { Receitafaturamentoentrega } from './Receitafaturamentoentrega';

@Index('entrega_pkey', ['id'], { unique: true })
@Index('ix_entrega_fk_entrega_idatendimento', ['idatendimento'], {})
@Entity('entrega', { schema: 'public' })
export class Entrega {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('timestamp without time zone', { name: 'data', nullable: true })
  data: Date | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.entregas)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @OneToMany(() => Entregafaturamento, (entregafaturamento) => entregafaturamento.identrega2)
  entregafaturamentos: Entregafaturamento[];

  @OneToMany(() => Receitafaturamentoentrega, (receitafaturamentoentrega) => receitafaturamentoentrega.identrega2)
  receitafaturamentoentregas: Receitafaturamentoentrega[];
}
