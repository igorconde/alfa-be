import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('temporalidade_pkey', ['id'], { unique: true })
@Entity('temporalidade', { schema: 'public' })
export class Temporalidade {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', { name: 'item', nullable: true, length: 255 })
  item: string | null;
}
