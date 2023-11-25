import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Municipio } from './Municipio';
import { Clienteabdi } from './Clienteabdi';
import { Clienteabdidigital } from './Clienteabdidigital';
import { Clusterbairro } from './Clusterbairro';
import { Clusterbairromentoriadigital } from './Clusterbairromentoriadigital';

@Index('bairro_pkey', ['id'], { unique: true })
@Index('ix_bairro_fk_bairro_idmunicipio', ['idmunicipio'], {})
@Entity('bairro', { schema: 'public' })
export class Bairro {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 45,
  })
  descricao: string | null;

  @Column('integer', { name: 'idmunicipio', nullable: true })
  idmunicipio: number | null;

  @ManyToOne(() => Municipio, (municipio) => municipio.bairros)
  @JoinColumn([{ name: 'idmunicipio', referencedColumnName: 'id' }])
  idmunicipio2: Municipio;

  @OneToMany(() => Clienteabdi, (clienteabdi) => clienteabdi.idbairro2)
  clienteabdis: Clienteabdi[];

  @OneToMany(() => Clienteabdidigital, (clienteabdidigital) => clienteabdidigital.idbairro2)
  clienteabdidigitals: Clienteabdidigital[];

  @OneToMany(() => Clusterbairro, (clusterbairro) => clusterbairro.idbairro2)
  clusterbairros: Clusterbairro[];

  @OneToMany(() => Clusterbairromentoriadigital, (clusterbairromentoriadigital) => clusterbairromentoriadigital.idbairro2)
  clusterbairromentoriadigitalS: Clusterbairromentoriadigital[];
}
