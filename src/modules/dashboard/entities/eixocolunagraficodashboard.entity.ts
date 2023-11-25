import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Graficodashboard } from './graficodashboard.entity';

@Index('eixocolunagraficodashboard_pkey', ['id'], { unique: true })
@Index('ieixocolunagraficodashboardfkatributo', ['idatributo'], {})
@Index('ieixocolunagraficodashboardfkgraficodashboard', ['idgraficodashboard'], {})
@Entity('eixocolunagraficodashboard', { schema: 'public' })
export class Eixocolunagraficodashboard {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'agregador',
    nullable: true,
    length: 255,
  })
  agregador: string | null;

  @Column('integer', { name: 'idgraficodashboard', nullable: true })
  idgraficodashboard: number | null;

  @Column('integer', { name: 'idatributo', nullable: true })
  idatributo: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Graficodashboard, (graficodashboard) => graficodashboard.eixocolunagraficodashboards)
  @JoinColumn([{ name: 'idgraficodashboard', referencedColumnName: 'id' }])
  idgraficodashboard2: Graficodashboard;
}
