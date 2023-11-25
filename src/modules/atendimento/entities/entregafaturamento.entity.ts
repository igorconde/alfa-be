import { Entrega } from '@modules/atendimento/entities/entrega.entity';
import { Enviofaturamentoatendimento } from '@modules/atendimento/entities/enviofaturamentoatendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('entregafaturamento_pkey', ['id'], { unique: true })
@Index('ix_entregafaturamento_fk_entregafaturamento_identrega', ['identrega'], {})
@Index('ntrgfaturamentofkntregafaturamentoidenviofaturamentoatendimento', ['idenviofaturamentoatendimento'], {})
@Entity('entregafaturamento', { schema: 'public' })
export class Entregafaturamento {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idenviofaturamentoatendimento', nullable: true })
  idenviofaturamentoatendimento: number | null;

  @Column('integer', { name: 'identrega', nullable: true })
  identrega: number | null;

  @ManyToOne(() => Entrega, (entrega) => entrega.entregafaturamentos)
  @JoinColumn([{ name: 'identrega', referencedColumnName: 'id' }])
  identrega2: Entrega;

  @ManyToOne(() => Enviofaturamentoatendimento, (enviofaturamentoatendimento) => enviofaturamentoatendimento.entregafaturamentos)
  @JoinColumn([{ name: 'idenviofaturamentoatendimento', referencedColumnName: 'id' }])
  idenviofaturamentoatendimento2: Enviofaturamentoatendimento;
}
