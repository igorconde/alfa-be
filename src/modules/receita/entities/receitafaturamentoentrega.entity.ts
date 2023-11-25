import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Entrega } from './Entrega';
import { Receitafaturamento } from './Receitafaturamento';

@Index('receitafaturamentoentrega_pkey', ['id'], { unique: true })
@Index('receitafaturamentoentregafk_receitafaturamentoentrega_identrega', ['identrega'], {})
@Index('rctfturamentoentregafkrctfaturamentoentregaidreceitafaturamento', ['idreceitafaturamento'], {})
@Entity('receitafaturamentoentrega', { schema: 'public' })
export class Receitafaturamentoentrega {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idreceitafaturamento', nullable: true })
  idreceitafaturamento: number | null;

  @Column('integer', { name: 'identrega', nullable: true })
  identrega: number | null;

  @ManyToOne(() => Entrega, (entrega) => entrega.receitafaturamentoentregas)
  @JoinColumn([{ name: 'identrega', referencedColumnName: 'id' }])
  identrega2: Entrega;

  @ManyToOne(() => Receitafaturamento, (receitafaturamento) => receitafaturamento.receitafaturamentoentregas)
  @JoinColumn([{ name: 'idreceitafaturamento', referencedColumnName: 'id' }])
  idreceitafaturamento2: Receitafaturamento;
}
