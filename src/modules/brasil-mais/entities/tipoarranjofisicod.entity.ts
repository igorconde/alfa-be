import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Linhadeproducaod } from './linhadeproducaod.entity';

@Index('tipoarranjofisicod_pkey', ['id'], { unique: true })
@Index('ix_tipoarranjofisicod_fk_tipoarranjofisicod_idlinhadeproducao', ['idlinhadeproducao'], {})
@Entity('tipoarranjofisicod', { schema: 'public' })
export class Tipoarranjofisicod {
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

  @ManyToOne(() => Linhadeproducaod, (linhadeproducaod) => linhadeproducaod.tipoarranjofisicods)
  @JoinColumn([{ name: 'idlinhadeproducao', referencedColumnName: 'id' }])
  idlinhadeproducao2: Linhadeproducaod;
}
