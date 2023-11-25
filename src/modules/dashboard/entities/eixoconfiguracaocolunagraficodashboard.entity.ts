import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Configuracaograficodashboard } from './configuracaograficodashboard.entity';

@Index('eixoconfiguracaocolunagraficodashboard_pkey', ['id'], { unique: true })
@Index('ieixoconfiguracaocolunagraficodashboardfkatributo', ['idatributo'], {})
@Index('ieixoconfiguracaocolunagraficodashboardfkconfiguracaograficodas', ['idconfiguracaograficodashboard'], {})
@Entity('eixoconfiguracaocolunagraficodashboard', { schema: 'public' })
export class Eixoconfiguracaocolunagraficodashboard {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'agregador',
    nullable: true,
    length: 255,
  })
  agregador: string | null;

  @Column('integer', { name: 'idconfiguracaograficodashboard', nullable: true })
  idconfiguracaograficodashboard: number | null;

  @Column('integer', { name: 'idatributo', nullable: true })
  idatributo: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Configuracaograficodashboard, (configuracaograficodashboard) => configuracaograficodashboard.eixoconfiguracaocolunagraficodashboards)
  @JoinColumn([{ name: 'idconfiguracaograficodashboard', referencedColumnName: 'id' }])
  idconfiguracaograficodashboard2: Configuracaograficodashboard;
}
