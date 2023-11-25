import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Graficodashboard } from './graficodashboard.entity';

@Index('parametrograficodashboard_pkey', ['id'], { unique: true })
@Index('iparametrograficodashboardfkatributo', ['idatributo'], {})
@Index('iparametrograficodashboardfkgraficodashboard', ['idgraficodashboard'], {})
@Entity('parametrograficodashboard', { schema: 'public' })
export class Parametrograficodashboard {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idreferencia', nullable: true })
  idreferencia: number | null;

  @Column('integer', { name: 'idreferenciafinal', nullable: true })
  idreferenciafinal: number | null;

  @Column('character varying', {
    name: 'operador',
    nullable: true,
    length: 255,
  })
  operador: string | null;

  @Column('character varying', { name: 'valor', nullable: true, length: 255 })
  valor: string | null;

  @Column('character varying', {
    name: 'valorfinal',
    nullable: true,
    length: 255,
  })
  valorfinal: string | null;

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

  @ManyToOne(() => Graficodashboard, (graficodashboard) => graficodashboard.parametrograficodashboards)
  @JoinColumn([{ name: 'idgraficodashboard', referencedColumnName: 'id' }])
  idgraficodashboard2: Graficodashboard;
}
