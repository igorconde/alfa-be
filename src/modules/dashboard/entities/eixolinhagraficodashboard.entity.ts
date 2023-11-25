import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atributoclasse } from './Atributoclasse';
import { Graficodashboard } from './Graficodashboard';

@Index('eixolinhagraficodashboard_pkey', ['id'], { unique: true })
@Index('ieixolinhagraficodashboardfkatributo', ['idatributo'], {})
@Index('ieixolinhagraficodashboardfkgraficodashboard', ['idgraficodashboard'], {})
@Entity('eixolinhagraficodashboard', { schema: 'public' })
export class Eixolinhagraficodashboard {
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

  @ManyToOne(() => Atributoclasse, (atributoclasse) => atributoclasse.eixolinhagraficodashboards)
  @JoinColumn([{ name: 'idatributo', referencedColumnName: 'id' }])
  idatributo2: Atributoclasse;

  @ManyToOne(() => Graficodashboard, (graficodashboard) => graficodashboard.eixolinhagraficodashboards)
  @JoinColumn([{ name: 'idgraficodashboard', referencedColumnName: 'id' }])
  idgraficodashboard2: Graficodashboard;
}
