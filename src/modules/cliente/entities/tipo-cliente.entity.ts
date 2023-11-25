import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('tipocliente_pkey', ['id'], { unique: true })
@Entity('tipocliente', { schema: 'public' })
export class Tipocliente {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('date', { name: 'ultimaatualizacao', nullable: true })
  ultimaatualizacao: string | null;
}
