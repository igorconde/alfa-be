import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Linhadeproducaoc } from './linhadeproducaoc.entity';

@Index('tiposistemaprodutivoc_pkey', ['id'], { unique: true })
@Index('tiposistemaprodutivocfk_tiposistemaprodutivoc_idlinhadeproducao', ['idlinhadeproducao'], {})
@Entity('tiposistemaprodutivoc', { schema: 'public' })
export class Tiposistemaprodutivoc {
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

  @ManyToOne(() => Linhadeproducaoc, (linhadeproducaoc) => linhadeproducaoc.tiposistemaprodutivocs)
  @JoinColumn([{ name: 'idlinhadeproducao', referencedColumnName: 'id' }])
  idlinhadeproducao2: Linhadeproducaoc;
}
