import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Linhadeproducaoc } from './linhadeproducaoc.entity';

@Index('tipoarranjofisicoc_pkey', ['id'], { unique: true })
@Index('ix_tipoarranjofisicoc_fk_tipoarranjofisicoc_idlinhadeproducao', ['idlinhadeproducao'], {})
@Entity('tipoarranjofisicoc', { schema: 'public' })
export class Tipoarranjofisicoc {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('integer', { name: 'idlinhadeproducao', nullable: true })
  idlinhadeproducao: number | null;

  @Column('integer', { name: 'tipo', nullable: true })
  tipo: number | null;

  @ManyToOne(() => Linhadeproducaoc, (linhadeproducaoc) => linhadeproducaoc.tipoarranjofisicocs)
  @JoinColumn([{ name: 'idlinhadeproducao', referencedColumnName: 'id' }])
  idlinhadeproducao2: Linhadeproducaoc;
}
