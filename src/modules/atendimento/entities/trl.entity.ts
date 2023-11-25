import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('trl_pkey', ['id'], { unique: true })
@Entity('trl', { schema: 'public' })
export class Trl {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nivel', nullable: true, length: 255 })
  nivel: string | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;
}
