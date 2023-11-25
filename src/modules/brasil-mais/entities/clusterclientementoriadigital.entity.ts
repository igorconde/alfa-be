import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Clustermentoriadigital } from './Clustermentoriadigital';
import { Tecnologiasdigitaisd } from './Tecnologiasdigitaisd';

@Index('clusterclientementoriadigital_pkey', ['id'], { unique: true })
@Index('clstrclntementoriadigitalfkclstrclientementoriadigitalidcliente', ['idcliente'], {})
@Index('clstrclntementoriadigitalfkclstrclientementoriadigitalidcluster', ['idcluster'], {})
@Index('clstrclntmntrdgitalfkclstrclntmntradigitalidtecnologiasdigitais', ['idtecnologiasdigitais'], {})
@Entity('clusterclientementoriadigital', { schema: 'public' })
export class Clusterclientementoriadigital {
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

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @Column('integer', { name: 'idtecnologiasdigitais', nullable: true })
  idtecnologiasdigitais: number | null;

  @ManyToOne(() => Cliente, (cliente) => cliente.clusterclientementoriadigitals)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Clustermentoriadigital, (clustermentoriadigital) => clustermentoriadigital.clusterclientementoriadigitals)
  @JoinColumn([{ name: 'idcluster', referencedColumnName: 'id' }])
  idcluster2: Clustermentoriadigital;

  @ManyToOne(() => Tecnologiasdigitaisd, (tecnologiasdigitaisd) => tecnologiasdigitaisd.clusterclientementoriadigitals)
  @JoinColumn([{ name: 'idtecnologiasdigitais', referencedColumnName: 'id' }])
  idtecnologiasdigitais2: Tecnologiasdigitaisd;
}
