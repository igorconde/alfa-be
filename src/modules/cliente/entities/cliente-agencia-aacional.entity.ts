import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('cliente_agencia_nacional_pkey', ['id'], { unique: true })
@Entity('cliente_agencia_nacional', { schema: 'public' })
export class ClienteAgenciaNacional {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'sigla', nullable: true, length: 255 })
  sigla: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;
}
