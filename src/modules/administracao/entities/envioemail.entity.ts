import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('envioemail_pkey', ['id'], { unique: true })
@Entity('envioemail', { schema: 'public' })
export class Envioemail {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'chave', nullable: true, length: 255 })
  chave: string | null;

  @Column('text', { name: 'conteudo', nullable: true })
  conteudo: string | null;

  @Column('timestamp without time zone', { name: 'data', nullable: true })
  data: Date | null;

  @Column('character varying', {
    name: 'emaildestino',
    nullable: true,
    length: 255,
  })
  emaildestino: string | null;

  @Column('character varying', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @Column('character varying', { name: 'titulo', nullable: true })
  titulo: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;
}
