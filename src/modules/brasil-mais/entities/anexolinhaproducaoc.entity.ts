import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Linhadeproducaoc } from './linhadeproducaoc.entity';

@Index('anexolinhaproducaoc_pkey', ['id'], { unique: true })
@Index('ix_anexolinhaproducaoc_fk_anexolinhaproducaoc_idlinhadeproducao', ['idlinhadeproducao'], {})
@Entity('anexolinhaproducaoc', { schema: 'public' })
export class Anexolinhaproducaoc {
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

  @ManyToOne(() => Linhadeproducaoc, (linhadeproducaoc) => linhadeproducaoc.anexolinhaproducaocs)
  @JoinColumn([{ name: 'idlinhadeproducao', referencedColumnName: 'id' }])
  idlinhadeproducao2: Linhadeproducaoc;
}
