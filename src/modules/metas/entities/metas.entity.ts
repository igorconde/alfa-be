import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('metas_pkey', ['id'], { unique: true })
@Entity('metas', { schema: 'public' })
export class Metas {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('double precision', { name: 'abr', nullable: true, precision: 53 })
  abr: number | null;

  @Column('double precision', { name: 'ago', nullable: true, precision: 53 })
  ago: number | null;

  @Column('integer', { name: 'ano', nullable: true })
  ano: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('double precision', { name: 'dez', nullable: true, precision: 53 })
  dez: number | null;

  @Column('double precision', { name: 'fev', nullable: true, precision: 53 })
  fev: number | null;

  @Column('double precision', { name: 'jan', nullable: true, precision: 53 })
  jan: number | null;

  @Column('double precision', { name: 'jul', nullable: true, precision: 53 })
  jul: number | null;

  @Column('double precision', { name: 'jun', nullable: true, precision: 53 })
  jun: number | null;

  @Column('double precision', { name: 'mai', nullable: true, precision: 53 })
  mai: number | null;

  @Column('double precision', { name: 'mar', nullable: true, precision: 53 })
  mar: number | null;

  @Column('double precision', { name: 'nov', nullable: true, precision: 53 })
  nov: number | null;

  @Column('double precision', { name: 'out', nullable: true, precision: 53 })
  out: number | null;

  @Column('integer', { name: 'produtolinha', nullable: true })
  produtolinha: number | null;

  @Column('double precision', { name: 'set', nullable: true, precision: 53 })
  set: number | null;

  @Column('character varying', { name: 'tipometa', nullable: true, length: 45 })
  tipometa: string | null;

  @Column('double precision', { name: 'total', nullable: true, precision: 53 })
  total: number | null;

  @Column('integer', { name: 'unidade', nullable: true })
  unidade: number | null;
}
