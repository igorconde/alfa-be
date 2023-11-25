import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('agenciasabde_pkey', ['id'], { unique: true })
@Entity('agenciasabde', { schema: 'public' })
export class Agenciasabde {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'sigla', nullable: true, length: 255 })
  sigla: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('character varying', { name: 'estado', nullable: true, length: 255 })
  estado: string | null;
}
