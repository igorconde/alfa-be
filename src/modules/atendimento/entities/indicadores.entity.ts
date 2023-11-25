import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('indicadoresie_pkey', ['id'], { unique: true })
@Index('iindicadoresfkatendimento', ['idatendimento'], {})
@Entity('indicadores', { schema: 'public' })
export class Indicadores {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('real', { name: 'reducaoconsumo', nullable: true, precision: 24 })
  reducaoconsumo: number | null;

  @Column('real', { name: 'reducaocusto', nullable: true, precision: 24 })
  reducaocusto: number | null;

  @Column('real', { name: 'reducaoconsumoano', nullable: true, precision: 24 })
  reducaoconsumoano: number | null;

  @Column('numeric', {
    name: 'reducaocustoano',
    nullable: true,
    precision: 12,
    scale: 4,
  })
  reducaocustoano: string | null;

  @Column('real', { name: 'emissaoco', nullable: true, precision: 24 })
  emissaoco: number | null;

  @Column('real', { name: 'usinaequivalente', nullable: true, precision: 24 })
  usinaequivalente: number | null;

  @Column('real', { name: 'casaequivalente', nullable: true, precision: 24 })
  casaequivalente: number | null;

  @Column('real', { name: 'payback', nullable: true, precision: 24 })
  payback: number | null;

  @Column('real', { name: 'disponibilidade', nullable: true, precision: 24 })
  disponibilidade: number | null;

  @Column('real', { name: 'movimentacao', nullable: true, precision: 24 })
  movimentacao: number | null;

  @Column('real', { name: 'produtividade', nullable: true, precision: 24 })
  produtividade: number | null;

  @Column('real', { name: 'qualidade', nullable: true, precision: 24 })
  qualidade: number | null;

  @Column('real', { name: 'retornoprograma', nullable: true, precision: 24 })
  retornoprograma: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('double precision', {
    name: 'oeefinal',
    nullable: true,
    precision: 53,
  })
  oeefinal: number | null;

  @Column('double precision', {
    name: 'oeeinicial',
    nullable: true,
    precision: 53,
  })
  oeeinicial: number | null;

  @Column('double precision', {
    name: 'performance',
    nullable: true,
    precision: 53,
  })
  performance: number | null;

  @Column('double precision', {
    name: 'produtividadefinal',
    nullable: true,
    precision: 53,
  })
  produtividadefinal: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.indicadores)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.indicadores2)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento3: Atendimento;
}
