import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('tipoanexo_pkey', ['id'], { unique: true })
@Entity('tipoanexo', { schema: 'public' })
export class Tipoanexo {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 100 })
  nome: string | null;

  @Column('character varying', {
    name: 'proprietario',
    nullable: true,
    length: 100,
  })
  proprietario: string | null;

  @Column('character varying', { name: 'valor', nullable: true, length: 100 })
  valor: string | null;
}
