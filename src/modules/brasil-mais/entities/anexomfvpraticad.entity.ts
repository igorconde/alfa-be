import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Mfvpraticad } from './Mfvpraticad';

@Index('anexomfvpraticad_pkey', ['id'], { unique: true })
@Index('ix_anexomfvpraticad_fk_anexomfvpraticad_idmfv', ['idmfv'], {})
@Entity('anexomfvpraticad', { schema: 'public' })
export class Anexomfvpraticad {
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

  @Column('integer', { name: 'idmfv', nullable: true })
  idmfv: number | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @ManyToOne(() => Mfvpraticad, (mfvpraticad) => mfvpraticad.anexomfvpraticads)
  @JoinColumn([{ name: 'idmfv', referencedColumnName: 'id' }])
  idmfv2: Mfvpraticad;
}