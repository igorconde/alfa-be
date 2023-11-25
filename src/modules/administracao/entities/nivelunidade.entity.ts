import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('nivelunidade_pkey', ['id'], { unique: true })
@Entity('nivelunidade', { schema: 'public' })
export class Nivelunidade {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', { name: 'sigla', nullable: true, length: 255 })
  sigla: string | null;
}
