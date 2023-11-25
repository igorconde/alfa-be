import { Bairro } from '@modules/administracao/entities/bairro.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Clustermentoriadigital } from './clustermentoriadigital.entity';

@Index('clusterbairromentoriadigital_pkey', ['id'], { unique: true })
@Index('clstrbairromentoriadigitalfkclsterbairromentoriadigitalidbairro', ['idbairro'], {})
@Index('clstrbairromentoriadigitalfkclstrbairromentoriadigitalidcluster', ['idcluster'], {})
@Entity('clusterbairromentoriadigital_', { schema: 'public' })
export class Clusterbairromentoriadigital {
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

  @ManyToOne(() => Bairro, (bairro) => bairro.clusterbairromentoriadigitalS)
  @JoinColumn([{ name: 'idbairro', referencedColumnName: 'id' }])
  idbairro2: Bairro;

  @ManyToOne(() => Clustermentoriadigital, (clustermentoriadigital) => clustermentoriadigital.clusterbairromentoriadigitalS)
  @JoinColumn([{ name: 'idcluster', referencedColumnName: 'id' }])
  idcluster2: Clustermentoriadigital;
}
