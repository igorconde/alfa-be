import { Producaoapropriada } from '@modules/producao/entities/producaoapropriada.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoencontroconsultoriacdigital } from './anexoencontroconsultoriacdigital.entity';
import { Atendimentoconsultoriacdigital } from './atendimentoconsultoriacdigital.entity';

@Index('encontroconsultoriacdigital_pkey', ['id'], { unique: true })
@Index('ncntrcnsltrcdgitalfkncntrcnsltrcdigitalidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Index('ncntrcnsltracdigitalfkncntrcnsltriacdigitalidproducaoapropriada', ['idproducaoapropriada'], {})
@Entity('encontroconsultoriacdigital', { schema: 'public' })
export class Encontroconsultoriacdigital {
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

  @OneToMany(() => Anexoencontroconsultoriacdigital, (anexoencontroconsultoriacdigital) => anexoencontroconsultoriacdigital.idencontroconsultoria2)
  anexoencontroconsultoriacdigitals: Anexoencontroconsultoriacdigital[];

  @ManyToOne(() => Atendimentoconsultoriacdigital, (atendimentoconsultoriacdigital) => atendimentoconsultoriacdigital.encontroconsultoriacdigitals)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriacdigital;

  @ManyToOne(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.encontroconsultoriacdigitals)
  @JoinColumn([{ name: 'idproducaoapropriada', referencedColumnName: 'id' }])
  idproducaoapropriada2: Producaoapropriada;
}
