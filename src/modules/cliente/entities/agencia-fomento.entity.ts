import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('agenciafomento_pkey', ['id'], { unique: true })
@Entity('agenciafomento', { schema: 'public' })
export class Agenciafomento {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', {
    name: 'linhafomento',
    nullable: true,
    length: 255,
  })
  linhafomento: string | null;
}
