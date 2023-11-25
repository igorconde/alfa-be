import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Kpi } from './Kpi';
import { Kpifator } from './Kpifator';
import { Formatokpivalor } from './Formatokpivalor';
import { Kpitipo } from './Kpitipo';

@Index('UQ_3d24b1440376a50e13e42120f93', ['kpiordemidentificador'], {
  unique: true,
})
@Entity('kpidicionario', { schema: 'public' })
export class Kpidicionario {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'kpiordemidentificador', unique: true })
  kpiordemidentificador: number;

  @Column('character varying', { name: 'nome', length: 255 })
  nome: string;

  @Column('character varying', { name: 'nomeingles', length: 255 })
  nomeingles: string;

  @Column('character varying', { name: 'definicao', length: 3000 })
  definicao: string;

  @Column('character varying', { name: 'bmf', length: 255 })
  bmf: string;

  @Column('integer', { name: 'ordem' })
  ordem: number;

  @Column('character varying', {
    name: 'formula',
    nullable: true,
    length: 3000,
  })
  formula: string | null;

  @OneToMany(() => Kpi, (kpi) => kpi.ordem)
  kpis: Kpi[];

  @ManyToOne(() => Kpifator, (kpifator) => kpifator.kpidicionarios)
  @JoinColumn([{ name: 'idfator', referencedColumnName: 'id' }])
  idfator: Kpifator;

  @ManyToOne(() => Formatokpivalor, (formatokpivalor) => formatokpivalor.kpidicionarios)
  @JoinColumn([{ name: 'idformatokpivalor', referencedColumnName: 'id' }])
  idformatokpivalor: Formatokpivalor;

  @ManyToOne(() => Kpitipo, (kpitipo) => kpitipo.kpidicionarios)
  @JoinColumn([{ name: 'idkpitipo', referencedColumnName: 'id' }])
  idkpitipo: Kpitipo;
}
