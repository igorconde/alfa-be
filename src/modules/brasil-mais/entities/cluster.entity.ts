import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Clusterbairro } from './Clusterbairro';
import { Clusterclienteabdi } from './Clusterclienteabdi';
import { Configuracaobrasilmais } from './Configuracaobrasilmais';

@Index('cluster_pkey', ['id'], { unique: true })
@Index('ix_cluster_fk_cluster_idconfiguracaobrasilmais', ['idconfiguracaobrasilmais'], {})
@Index('ix_cluster_fk_cluster_idunidade', ['idunidade'], {})
@Entity('cluster', { schema: 'public' })
export class Cluster {
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

  @Column('boolean', { name: 'todosmunicipios', nullable: true })
  todosmunicipios: boolean | null;

  @Column('integer', { name: 'idconfiguracaobrasilmais', nullable: true })
  idconfiguracaobrasilmais: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @ManyToOne(() => Configuracaobrasilmais, (configuracaobrasilmais) => configuracaobrasilmais.clusters)
  @JoinColumn([{ name: 'idconfiguracaobrasilmais', referencedColumnName: 'id' }])
  idconfiguracaobrasilmais2: Configuracaobrasilmais;

  @ManyToOne(() => Unidade, (unidade) => unidade.clusters)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;

  @OneToMany(() => Clusterbairro, (clusterbairro) => clusterbairro.idcluster2)
  clusterbairros: Clusterbairro[];

  @OneToMany(() => Clusterclienteabdi, (clusterclienteabdi) => clusterclienteabdi.idcluster2)
  clusterclienteabdis: Clusterclienteabdi[];
}
