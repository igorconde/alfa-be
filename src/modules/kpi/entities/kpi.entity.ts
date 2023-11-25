import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Kpidicionario } from './Kpidicionario';

@Index('kpi_pkey', ['id'], { unique: true })
@Entity('kpi', { schema: 'public' })
export class Kpi {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('double precision', {
    name: 'actualcurrent',
    nullable: true,
    precision: 53,
  })
  actualcurrent: number | null;

  @Column('double precision', {
    name: 'actualpast',
    nullable: true,
    precision: 53,
  })
  actualpast: number | null;

  @Column('integer', { name: 'ano', nullable: true })
  ano: number | null;

  @Column('integer', { name: 'assessment', nullable: true })
  assessment: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'comment',
    nullable: true,
    length: 2000,
  })
  comment: string | null;

  @Column('double precision', {
    name: 'targetcurrent',
    nullable: true,
    precision: 53,
  })
  targetcurrent: number | null;

  @Column('double precision', {
    name: 'targetfuture',
    nullable: true,
    precision: 53,
  })
  targetfuture: number | null;

  @Column('integer', { name: 'trend', nullable: true })
  trend: number | null;

  @Column('integer', { name: 'unidade', nullable: true })
  unidade: number | null;

  @Column('character varying', { name: 'origem', nullable: true, length: 255 })
  origem: string | null;

  @Column('timestamp without time zone', {
    name: 'dataatualizacao',
    nullable: true,
    default: () => 'now()',
  })
  dataatualizacao: Date | null;

  @Column('timestamp without time zone', {
    name: 'datacadastro',
    nullable: true,
    default: () => 'now()',
  })
  datacadastro: Date | null;

  @Column('double precision', {
    name: 'forecastcurrent',
    nullable: true,
    precision: 53,
  })
  forecastcurrent: number | null;

  @Column('double precision', {
    name: 'forecastfuture',
    nullable: true,
    precision: 53,
  })
  forecastfuture: number | null;

  @ManyToOne(() => Kpidicionario, (kpidicionario) => kpidicionario.kpis)
  @JoinColumn([{ name: 'ordem', referencedColumnName: 'kpiordemidentificador' }])
  ordem: Kpidicionario;
}
