import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Mfvpraticab } from './mfvpraticab.entity';

@Index('anexomfvpratica_pkey', ['id'], { unique: true })
@Index('ix_anexomfvpratica_fk_anexomfvpratica_idmfv', ['idmfv'], {})
@Entity('anexomfvpratica', { schema: 'public' })
export class Anexomfvpratica {
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

  @ManyToOne(() => Mfvpraticab, (mfvpraticab) => mfvpraticab.anexomfvpraticas)
  @JoinColumn([{ name: 'idmfv', referencedColumnName: 'id' }])
  idmfv2: Mfvpraticab;
}
