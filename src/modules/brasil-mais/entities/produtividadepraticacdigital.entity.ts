import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Indicadorespraticacdigital } from './indicadorespraticacdigital.entity';

@Index('produtividadepraticacdigital_pkey', ['id'], { unique: true })
@Index('prdtvddepraticacdigitalfkprdtvidadepraticacdigitalidindicadores', ['idindicadores'], {})
@Entity('produtividadepraticacdigital', { schema: 'public' })
export class Produtividadepraticacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('double precision', {
    name: 'horasparadas',
    nullable: true,
    precision: 53,
  })
  horasparadas: number | null;

  @Column('double precision', {
    name: 'horasturno',
    nullable: true,
    precision: 53,
  })
  horasturno: number | null;

  @Column('double precision', {
    name: 'medicao',
    nullable: true,
    precision: 53,
  })
  medicao: number | null;

  @Column('double precision', {
    name: 'operadoresturno',
    nullable: true,
    precision: 53,
  })
  operadoresturno: number | null;

  @Column('double precision', {
    name: 'prodboa',
    nullable: true,
    precision: 53,
  })
  prodboa: number | null;

  @Column('double precision', {
    name: 'prodnaoconforme',
    nullable: true,
    precision: 53,
  })
  prodnaoconforme: number | null;

  @Column('double precision', {
    name: 'prodpossivel',
    nullable: true,
    precision: 53,
  })
  prodpossivel: number | null;

  @Column('double precision', {
    name: 'prodrealizada',
    nullable: true,
    precision: 53,
  })
  prodrealizada: number | null;

  @Column('double precision', {
    name: 'taxaproducao',
    nullable: true,
    precision: 53,
  })
  taxaproducao: number | null;

  @Column('double precision', {
    name: 'tempooperacao',
    nullable: true,
    precision: 53,
  })
  tempooperacao: number | null;

  @Column('integer', { name: 'idindicadores', nullable: true })
  idindicadores: number | null;

  @ManyToOne(() => Indicadorespraticacdigital, (indicadorespraticacdigital) => indicadorespraticacdigital.produtividadepraticacdigitals)
  @JoinColumn([{ name: 'idindicadores', referencedColumnName: 'id' }])
  idindicadores2: Indicadorespraticacdigital;
}
