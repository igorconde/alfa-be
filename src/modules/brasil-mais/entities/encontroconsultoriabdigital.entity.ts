import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoencontroconsultoriabdigital } from './Anexoencontroconsultoriabdigital';
import { Atendimentoconsultoriabdigital } from './Atendimentoconsultoriabdigital';
import { Producaoapropriada } from './Producaoapropriada';

@Index('encontroconsultoriabdigital_pkey', ['id'], { unique: true })
@Index('ncntrcnsltrbdgitalfkncntrcnsltrbdigitalidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Index('ncntrcnsltrabdigitalfkncntrcnsltriabdigitalidproducaoapropriada', ['idproducaoapropriada'], {})
@Entity('encontroconsultoriabdigital', { schema: 'public' })
export class Encontroconsultoriabdigital {
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

  @OneToMany(() => Anexoencontroconsultoriabdigital, (anexoencontroconsultoriabdigital) => anexoencontroconsultoriabdigital.idencontroconsultoria2)
  anexoencontroconsultoriabdigitals: Anexoencontroconsultoriabdigital[];

  @ManyToOne(() => Atendimentoconsultoriabdigital, (atendimentoconsultoriabdigital) => atendimentoconsultoriabdigital.encontroconsultoriabdigitals)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriabdigital;

  @ManyToOne(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.encontroconsultoriabdigitals)
  @JoinColumn([{ name: 'idproducaoapropriada', referencedColumnName: 'id' }])
  idproducaoapropriada2: Producaoapropriada;
}
