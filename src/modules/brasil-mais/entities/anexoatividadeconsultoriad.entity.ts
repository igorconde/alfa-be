import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atividadeconsultoriad } from './atividadeconsultoriad.entity';

@Index('anexoatividadeconsultoriad_pkey', ['id'], { unique: true })
@Index('nxtvddeconsultoriadfknxtvdadeconsultoriadidatividadeconsultoria', ['idatividadeconsultoria'], {})
@Entity('anexoatividadeconsultoriad', { schema: 'public' })
export class Anexoatividadeconsultoriad {
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

  @Column('integer', { name: 'idatividadeconsultoria', nullable: true })
  idatividadeconsultoria: number | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @ManyToOne(() => Atividadeconsultoriad, (atividadeconsultoriad) => atividadeconsultoriad.anexoatividadeconsultoriads)
  @JoinColumn([{ name: 'idatividadeconsultoria', referencedColumnName: 'id' }])
  idatividadeconsultoria2: Atividadeconsultoriad;
}
