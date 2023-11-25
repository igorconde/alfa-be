import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dashboardusuario } from './dashboardusuario.entity';
import { Graficodashboard } from './graficodashboard.entity';

@Index('dashboard_pkey', ['id'], { unique: true })
@Entity('dashboard', { schema: 'public' })
export class Dashboard {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Dashboardusuario, (dashboardusuario) => dashboardusuario.iddashboard2)
  dashboardusuarios: Dashboardusuario[];

  @OneToMany(() => Graficodashboard, (graficodashboard) => graficodashboard.iddashboard2)
  graficodashboards: Graficodashboard[];
}
