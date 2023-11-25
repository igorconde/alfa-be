import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Dashboard } from './Dashboard';
import { Usuario } from './Usuario';

@Index('dashboardusuario_pkey', ['id'], { unique: true })
@Index('idashboardusuariofkdashboard', ['iddashboard'], {})
@Index('idashboardusuariofkusuario', ['idusuario'], {})
@Entity('dashboardusuario', { schema: 'public' })
export class Dashboardusuario {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'iddashboard', nullable: true })
  iddashboard: number | null;

  @Column('integer', { name: 'idusuario', nullable: true })
  idusuario: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Dashboard, (dashboard) => dashboard.dashboardusuarios)
  @JoinColumn([{ name: 'iddashboard', referencedColumnName: 'id' }])
  iddashboard2: Dashboard;

  @ManyToOne(() => Usuario, (usuario) => usuario.dashboardusuarios)
  @JoinColumn([{ name: 'idusuario', referencedColumnName: 'id' }])
  idusuario2: Usuario;
}
