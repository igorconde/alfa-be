import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Classe } from './Classe';
import { Tipounidade } from './Tipounidade';
import { Eixoconfiguracaocolunagraficodashboard } from './Eixoconfiguracaocolunagraficodashboard';
import { Eixoconfiguracaolinhagraficodashboard } from './Eixoconfiguracaolinhagraficodashboard';

@Index('configuracaograficodashboard_pkey', ['id'], { unique: true })
@Index('iconfiguracaograficodashboardfkfato', ['idfato'], {})
@Entity('configuracaograficodashboard', { schema: 'public' })
export class Configuracaograficodashboard {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('character varying', { name: 'tipo', nullable: true, length: 255 })
  tipo: string | null;

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

  @Column('character varying', { name: 'grupo', nullable: true, length: 255 })
  grupo: string | null;

  @Column('character varying', {
    name: 'acumulativo',
    nullable: true,
    length: 255,
  })
  acumulativo: string | null;

  @Column('character varying', {
    name: 'perfilusosistema',
    nullable: true,
    length: 10,
  })
  perfilusosistema: string | null;

  @ManyToOne(() => Classe, (classe) => classe.configuracaograficodashboards)
  @JoinColumn([{ name: 'idfato', referencedColumnName: 'id' }])
  idfato2: Classe;

  @ManyToOne(() => Tipounidade, (tipounidade) => tipounidade.configuracaograficodashboards)
  @JoinColumn([{ name: 'idtipounidade', referencedColumnName: 'id' }])
  idtipounidade: Tipounidade;

  @OneToMany(() => Eixoconfiguracaocolunagraficodashboard, (eixoconfiguracaocolunagraficodashboard) => eixoconfiguracaocolunagraficodashboard.idconfiguracaograficodashboard2)
  eixoconfiguracaocolunagraficodashboards: Eixoconfiguracaocolunagraficodashboard[];

  @OneToMany(() => Eixoconfiguracaolinhagraficodashboard, (eixoconfiguracaolinhagraficodashboard) => eixoconfiguracaolinhagraficodashboard.idconfiguracaograficodashboard2)
  eixoconfiguracaolinhagraficodashboards: Eixoconfiguracaolinhagraficodashboard[];
}
