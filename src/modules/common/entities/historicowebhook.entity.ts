import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('historicowebhook_pkey', ['id'], { unique: true })
@Index('ix_historicowebhook_fk_historicowebhook_idacao', ['idacao'], {})
@Index('ix_historicowebhook_fk_historicowebhook_idclasse', ['idclasse'], {})
@Entity('historicowebhook', { schema: 'public' })
export class Historicowebhook {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'chave', nullable: true, length: 40 })
  chave: string | null;

  @Column('timestamp without time zone', { name: 'data', nullable: true })
  data: Date | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 100,
  })
  descricao: string | null;

  @Column('integer', { name: 'idobjeto', nullable: true })
  idobjeto: number | null;

  @Column('integer', { name: 'idregional', nullable: true })
  idregional: number | null;

  @Column('character varying', { name: 'path', nullable: true, length: 100 })
  path: string | null;

  @Column('character varying', { name: 'url', nullable: true, length: 1000 })
  url: string | null;

  @Column('integer', { name: 'idacao', nullable: true })
  idacao: number | null;

  @Column('integer', { name: 'idclasse', nullable: true })
  idclasse: number | null;
}
