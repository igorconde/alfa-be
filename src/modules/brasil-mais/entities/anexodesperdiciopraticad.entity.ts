import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Desperdiciomasterd } from './Desperdiciomasterd';

@Index('anexodesperdiciopraticad_pkey', ['id'], { unique: true })
@Index('anexodesperdiciopraticadfkanexodesperdiciopraticadiddesperdicio', ['iddesperdicio'], {})
@Entity('anexodesperdiciopraticad', { schema: 'public' })
export class Anexodesperdiciopraticad {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'coddesperdicio', nullable: true })
  coddesperdicio: number | null;

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

  @Column('integer', { name: 'iddesperdicio', nullable: true })
  iddesperdicio: number | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @ManyToOne(() => Desperdiciomasterd, (desperdiciomasterd) => desperdiciomasterd.anexodesperdiciopraticads)
  @JoinColumn([{ name: 'iddesperdicio', referencedColumnName: 'id' }])
  iddesperdicio2: Desperdiciomasterd;
}