import { Bairro } from '@modules/administracao/entities/bairro.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cluster } from './Cluster';

@Index('clusterbairro_pkey', ['id'], { unique: true })
@Index('ix_clusterbairro_fk_clusterbairro_idbairro', ['idbairro'], {})
@Index('ix_clusterbairro_fk_clusterbairro_idcluster', ['idcluster'], {})
@Entity('clusterbairro', { schema: 'public' })
export class Clusterbairro {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idcluster', nullable: true })
  idcluster: number | null;

  @Column('integer', { name: 'idbairro', nullable: true })
  idbairro: number | null;

  @ManyToOne(() => Bairro, (bairro) => bairro.clusterbairros)
  @JoinColumn([{ name: 'idbairro', referencedColumnName: 'id' }])
  idbairro2: Bairro;

  @ManyToOne(() => Cluster, (cluster) => cluster.clusterbairros)
  @JoinColumn([{ name: 'idcluster', referencedColumnName: 'id' }])
  idcluster2: Cluster;
}
