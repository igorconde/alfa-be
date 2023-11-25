import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atividadepraticad } from './atividadepraticad.entity';

@Index('anexoatividadepraticad_pkey', ['id'], { unique: true })
@Index('nexoatividadepraticadfkanexoatividadepraticadidatividadepratica', ['idatividadepratica'], {})
@Entity('anexoatividadepraticad', { schema: 'public' })
export class Anexoatividadepraticad {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', {
    name: 'nomearquivo',
    nullable: true,
    length: 255,
  })
  nomearquivo: string | null;

  @Column('bigint', { name: 'tamanho', nullable: true })
  tamanho: string | null;

  @Column('character varying', { name: 'tipo', nullable: true, length: 255 })
  tipo: string | null;

  @Column('character varying', { name: 'url', nullable: true, length: 255 })
  url: string | null;

  @Column('integer', { name: 'idatividadepratica', nullable: true })
  idatividadepratica: number | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @ManyToOne(() => Atividadepraticad, (atividadepraticad) => atividadepraticad.anexoatividadepraticads)
  @JoinColumn([{ name: 'idatividadepratica', referencedColumnName: 'id' }])
  idatividadepratica2: Atividadepraticad;
}
