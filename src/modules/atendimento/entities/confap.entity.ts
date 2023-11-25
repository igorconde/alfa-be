import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('confap_pkey', ['id'], { unique: true })
@Entity('confap', { schema: 'public' })
export class Confap {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'sigla', nullable: true, length: 255 })
  sigla: string | null;

  @Column('character varying', {
    name: 'nomecompleto',
    nullable: true,
    length: 255,
  })
  nomecompleto: string | null;

  @Column('character varying', { name: 'estado', nullable: true, length: 255 })
  estado: string | null;
}
