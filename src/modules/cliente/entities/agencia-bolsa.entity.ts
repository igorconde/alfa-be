import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('agenciabolsa_pkey', ['id'], { unique: true })
@Entity('agenciabolsa', { schema: 'public' })
export class Agenciabolsa {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;
}
