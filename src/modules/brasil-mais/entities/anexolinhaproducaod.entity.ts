import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Linhadeproducaod } from './Linhadeproducaod';

@Index('anexolinhaproducaod_pkey', ['id'], { unique: true })
@Index('ix_anexolinhaproducaod_fk_anexolinhaproducaod_idlinhadeproducao', ['idlinhadeproducao'], {})
@Entity('anexolinhaproducaod', { schema: 'public' })
export class Anexolinhaproducaod {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', {
    name: 'nomearquivo',
    nullable: true,
    length: 255,
  })
  nomearquivo: string | null;

  @Column('bigint', { name: 'tamanho', nullable: true })
  tamanho: string | null;

  @Column('character varying', { name: 'tipo', nullable: true, length: 255 })
  tipo: string | null;

  @Column('character varying', { name: 'url', nullable: true, length: 255 })
  url: string | null;

  @Column('integer', { name: 'idlinhadeproducao', nullable: true })
  idlinhadeproducao: number | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @ManyToOne(() => Linhadeproducaod, (linhadeproducaod) => linhadeproducaod.anexolinhaproducaods)
  @JoinColumn([{ name: 'idlinhadeproducao', referencedColumnName: 'id' }])
  idlinhadeproducao2: Linhadeproducaod;
}
