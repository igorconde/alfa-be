import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grupobrasilmais } from './Grupobrasilmais';
import { Cluster } from './cluster.entity';

@Index('configuracaobrasilmais_pkey', ['id'], { unique: true })
@Entity('configuracaobrasilmais', { schema: 'public' })
export class Configuracaobrasilmais {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'regional', nullable: true })
  regional: number | null;

  @OneToMany(() => Cluster, (cluster) => cluster.idconfiguracaobrasilmais2)
  clusters: Cluster[];

  @OneToMany(() => Grupobrasilmais, (grupobrasilmais) => grupobrasilmais.idconfiguracaobrasilmais2)
  grupobrasilmais: Grupobrasilmais[];
}
