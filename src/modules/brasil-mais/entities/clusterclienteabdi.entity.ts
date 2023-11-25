import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Clienteabdi } from './Clienteabdi';
import { Cluster } from './Cluster';

@Index('clusterclienteabdi_pkey', ['id'], { unique: true })
@Index('ix_clusterclienteabdi_fk_clusterclienteabdi_idclienteabdi', ['idclienteabdi'], {})
@Index('ix_clusterclienteabdi_fk_clusterclienteabdi_idcluster', ['idcluster'], {})
@Entity('clusterclienteabdi', { schema: 'public' })
export class Clusterclienteabdi {
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

  @Column('integer', { name: 'idclienteabdi', nullable: true })
  idclienteabdi: number | null;

  @ManyToOne(() => Clienteabdi, (clienteabdi) => clienteabdi.clusterclienteabdis)
  @JoinColumn([{ name: 'idclienteabdi', referencedColumnName: 'id' }])
  idclienteabdi2: Clienteabdi;

  @ManyToOne(() => Cluster, (cluster) => cluster.clusterclienteabdis)
  @JoinColumn([{ name: 'idcluster', referencedColumnName: 'id' }])
  idcluster2: Cluster;
}
