import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('poder_inducao_pkey', ['id'], { unique: true })
@Entity('poder_inducao', { schema: 'public' })
export class PoderInducao {
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
