import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('fontefomento_pkey', ['id'], { unique: true })
@Entity('fontefomento', { schema: 'public' })
export class Fontefomento {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;
}
