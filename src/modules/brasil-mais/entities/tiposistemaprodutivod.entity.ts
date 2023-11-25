import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Linhadeproducaod } from './linhadeproducaod.entity';

@Index('tiposistemaprodutivod_pkey', ['id'], { unique: true })
@Index('tiposistemaprodutivodfk_tiposistemaprodutivod_idlinhadeproducao', ['idlinhadeproducao'], {})
@Entity('tiposistemaprodutivod', { schema: 'public' })
export class Tiposistemaprodutivod {
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

  @ManyToOne(() => Linhadeproducaod, (linhadeproducaod) => linhadeproducaod.tiposistemaprodutivods)
  @JoinColumn([{ name: 'idlinhadeproducao', referencedColumnName: 'id' }])
  idlinhadeproducao2: Linhadeproducaod;
}
