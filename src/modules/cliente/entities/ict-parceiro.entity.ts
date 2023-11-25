import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('ictparceiro_pkey', ['id'], { unique: true })
@Entity('ictparceiro', { schema: 'public' })
export class Ictparceiro {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;
}
