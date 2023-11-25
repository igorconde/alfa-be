import { Producaoapropriada } from '@modules/producao/entities/producaoapropriada.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoencontroconsultoriaddigital } from './Anexoencontroconsultoriaddigital';
import { Atendimentoconsultoriaddigital } from './Atendimentoconsultoriaddigital';

@Index('encontroconsultoriaddigital_pkey', ['id'], { unique: true })
@Index('ncntrcnsltrddgitalfkncntrcnsltrddigitalidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Index('ncntrcnsltraddigitalfkncntrcnsltriaddigitalidproducaoapropriada', ['idproducaoapropriada'], {})
@Entity('encontroconsultoriaddigital', { schema: 'public' })
export class Encontroconsultoriaddigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', { name: 'data', nullable: true })
  data: Date | null;

  @Column('boolean', { name: 'finalizada', nullable: true })
  finalizada: boolean | null;

  @Column('integer', { name: 'horasapropriadas', nullable: true })
  horasapropriadas: number | null;

  @Column('integer', { name: 'idmentor', nullable: true })
  idmentor: number | null;

  @Column('boolean', { name: 'isvirtual', nullable: true })
  isvirtual: boolean | null;

  @Column('integer', { name: 'ordem', nullable: true })
  ordem: number | null;

  @Column('integer', { name: 'turno', nullable: true })
  turno: number | null;

  @Column('integer', { name: 'idatendimentoconsultoria', nullable: true })
  idatendimentoconsultoria: number | null;

  @Column('integer', { name: 'idproducaoapropriada', nullable: true })
  idproducaoapropriada: number | null;

  @OneToMany(() => Anexoencontroconsultoriaddigital, (anexoencontroconsultoriaddigital) => anexoencontroconsultoriaddigital.idencontroconsultoria2)
  anexoencontroconsultoriaddigitals: Anexoencontroconsultoriaddigital[];

  @ManyToOne(() => Atendimentoconsultoriaddigital, (atendimentoconsultoriaddigital) => atendimentoconsultoriaddigital.encontroconsultoriaddigitals)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriaddigital;

  @ManyToOne(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.encontroconsultoriaddigitals)
  @JoinColumn([{ name: 'idproducaoapropriada', referencedColumnName: 'id' }])
  idproducaoapropriada2: Producaoapropriada;
}
