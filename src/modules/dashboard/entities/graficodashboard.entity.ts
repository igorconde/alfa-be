import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Eixocolunagraficodashboard } from './Eixocolunagraficodashboard';
import { Eixolinhagraficodashboard } from './Eixolinhagraficodashboard';
import { Dashboard } from './Dashboard';
import { Classe } from './Classe';
import { Parametrograficodashboard } from './Parametrograficodashboard';

@Index('graficodashboard_pkey', ['id'], { unique: true })
@Index('igraficodashboardfkdashboard', ['iddashboard'], {})
@Index('igraficodashboardfkfato', ['idfato'], {})
@Entity('graficodashboard', { schema: 'public' })
export class Graficodashboard {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'coluna', nullable: true })
  coluna: number | null;

  @Column('integer', { name: 'linha', nullable: true })
  linha: number | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('character varying', { name: 'tipo', nullable: true, length: 255 })
  tipo: string | null;

  @Column('integer', { name: 'iddashboard', nullable: true })
  iddashboard: number | null;

  @Column('integer', { name: 'idfato', nullable: true })
  idfato: number | null;

  @Column('character varying', { name: 'formato', nullable: true, length: 255 })
  formato: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'prefixo', nullable: true, length: 255 })
  prefixo: string | null;

  @Column('character varying', {
    name: 'acumulativo',
    nullable: true,
    length: 255,
  })
  acumulativo: string | null;

  @OneToMany(() => Eixocolunagraficodashboard, (eixocolunagraficodashboard) => eixocolunagraficodashboard.idgraficodashboard2)
  eixocolunagraficodashboards: Eixocolunagraficodashboard[];

  @OneToMany(() => Eixolinhagraficodashboard, (eixolinhagraficodashboard) => eixolinhagraficodashboard.idgraficodashboard2)
  eixolinhagraficodashboards: Eixolinhagraficodashboard[];

  @ManyToOne(() => Dashboard, (dashboard) => dashboard.graficodashboards)
  @JoinColumn([{ name: 'iddashboard', referencedColumnName: 'id' }])
  iddashboard2: Dashboard;

  @ManyToOne(() => Classe, (classe) => classe.graficodashboards)
  @JoinColumn([{ name: 'idfato', referencedColumnName: 'id' }])
  idfato2: Classe;

  @OneToMany(() => Parametrograficodashboard, (parametrograficodashboard) => parametrograficodashboard.idgraficodashboard2)
  parametrograficodashboards: Parametrograficodashboard[];
}
