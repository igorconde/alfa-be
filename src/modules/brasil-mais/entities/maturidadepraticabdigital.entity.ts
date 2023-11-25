import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexomaturidadepraticabdigital } from './anexomaturidadepraticabdigital.entity';
import { Indicadorespraticabdigital } from './indicadorespraticabdigital.entity';

@Index('maturidadepraticabdigital_pkey', ['id'], { unique: true })
@Index('mtridadepraticabdigitalfkmaturidadepraticabdigitalidindicadores', ['idindicadores'], {})
@Entity('maturidadepraticabdigital', { schema: 'public' })
export class Maturidadepraticabdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'dataavaliacao',
    nullable: true,
  })
  dataavaliacao: Date | null;

  @Column('character varying', { name: 'nivel', nullable: true, length: 255 })
  nivel: string | null;

  @Column('double precision', {
    name: 'pontuacaocultura',
    nullable: true,
    precision: 53,
  })
  pontuacaocultura: number | null;

  @Column('double precision', {
    name: 'pontuacaoestrategia',
    nullable: true,
    precision: 53,
  })
  pontuacaoestrategia: number | null;

  @Column('double precision', {
    name: 'pontuacaomanufatura',
    nullable: true,
    precision: 53,
  })
  pontuacaomanufatura: number | null;

  @Column('double precision', {
    name: 'pontuacaonegocio',
    nullable: true,
    precision: 53,
  })
  pontuacaonegocio: number | null;

  @Column('double precision', {
    name: 'pontuacaototal',
    nullable: true,
    precision: 53,
  })
  pontuacaototal: number | null;

  @Column('integer', { name: 'idindicadores', nullable: true })
  idindicadores: number | null;

  @OneToMany(() => Anexomaturidadepraticabdigital, (anexomaturidadepraticabdigital) => anexomaturidadepraticabdigital.idmaturidade2)
  anexomaturidadepraticabdigitals: Anexomaturidadepraticabdigital[];

  @ManyToOne(() => Indicadorespraticabdigital, (indicadorespraticabdigital) => indicadorespraticabdigital.maturidadepraticabdigitals)
  @JoinColumn([{ name: 'idindicadores', referencedColumnName: 'id' }])
  idindicadores2: Indicadorespraticabdigital;
}
