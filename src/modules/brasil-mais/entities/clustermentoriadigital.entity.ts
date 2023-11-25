import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Clusterbairromentoriadigital } from './clusterbairromentoriadigital.entity';
import { Clusterclientementoriadigital } from './clusterclientementoriadigital.entity';
import { Configuracaomentoriadigital } from './configuracaomentoriadigital.entity';

@Index('clustermentoriadigital_pkey', ['id'], { unique: true })
@Index('clstrmntrdgitalfkclstrmntradigitalidconfiguracaomentoriadigital', ['idconfiguracaomentoriadigital'], {})
@Index('ix_clustermentoriadigital_fk_clustermentoriadigital_idunidade', ['idunidade'], {})
@Entity('clustermentoriadigital', { schema: 'public' })
export class Clustermentoriadigital {
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

  @Column('integer', { name: 'idconfiguracaomentoriadigital', nullable: true })
  idconfiguracaomentoriadigital: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @OneToMany(() => Clusterbairromentoriadigital, (clusterbairromentoriadigital) => clusterbairromentoriadigital.idcluster2)
  clusterbairromentoriadigitalS: Clusterbairromentoriadigital[];

  @OneToMany(() => Clusterclientementoriadigital, (clusterclientementoriadigital) => clusterclientementoriadigital.idcluster2)
  clusterclientementoriadigitals: Clusterclientementoriadigital[];

  @ManyToOne(() => Configuracaomentoriadigital, (configuracaomentoriadigital) => configuracaomentoriadigital.clustermentoriadigitals)
  @JoinColumn([{ name: 'idconfiguracaomentoriadigital', referencedColumnName: 'id' }])
  idconfiguracaomentoriadigital2: Configuracaomentoriadigital;

  @ManyToOne(() => Unidade, (unidade) => unidade.clustermentoriadigitals)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
