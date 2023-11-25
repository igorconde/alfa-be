import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('valoratributoclasse_pkey', ['id'], { unique: true })
@Index('ivaloratributoclassefkatributoclasse', ['idatributoclasse'], {})
@Entity('valoratributoclasse', { schema: 'public' })
export class Valoratributoclasse {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'tipo', nullable: true, length: 255 })
  tipo: string | null;

  @Column('character varying', { name: 'titulo', nullable: true, length: 255 })
  titulo: string | null;

  @Column('character varying', { name: 'valor', nullable: true, length: 255 })
  valor: string | null;

  @Column('integer', { name: 'idatributoclasse', nullable: true })
  idatributoclasse: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;
}
