import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atividadeconsultoriac } from './Atividadeconsultoriac';

@Index('anexoatividadeconsultoriac_pkey', ['id'], { unique: true })
@Index('nxtvddeconsultoriacfknxtvdadeconsultoriacidatividadeconsultoria', ['idatividadeconsultoria'], {})
@Entity('anexoatividadeconsultoriac', { schema: 'public' })
export class Anexoatividadeconsultoriac {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 300,
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

  @ManyToOne(() => Atividadeconsultoriac, (atividadeconsultoriac) => atividadeconsultoriac.anexoatividadeconsultoriacs)
  @JoinColumn([{ name: 'idatividadeconsultoria', referencedColumnName: 'id' }])
  idatividadeconsultoria2: Atividadeconsultoriac;
}
