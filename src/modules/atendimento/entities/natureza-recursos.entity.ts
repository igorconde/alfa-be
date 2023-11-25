import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('natureza_recursos_pkey', ['id'], { unique: true })
@Entity('natureza_recursos', { schema: 'public' })
export class NaturezaRecursos {
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
