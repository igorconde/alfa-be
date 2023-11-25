import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexomaturidadepraticaddigital } from './Anexomaturidadepraticaddigital';
import { Indicadorespraticaddigital } from './indicadorespraticaddigital.entity';

@Index('maturidadepraticaddigital_pkey', ['id'], { unique: true })
@Index('mtridadepraticaddigitalfkmaturidadepraticaddigitalidindicadores', ['idindicadores'], {})
@Entity('maturidadepraticaddigital', { schema: 'public' })
export class Maturidadepraticaddigital {
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

  @OneToMany(() => Anexomaturidadepraticaddigital, (anexomaturidadepraticaddigital) => anexomaturidadepraticaddigital.idmaturidade2)
  anexomaturidadepraticaddigitals: Anexomaturidadepraticaddigital[];

  @ManyToOne(() => Indicadorespraticaddigital, (indicadorespraticaddigital) => indicadorespraticaddigital.maturidadepraticaddigitals)
  @JoinColumn([{ name: 'idindicadores', referencedColumnName: 'id' }])
  idindicadores2: Indicadorespraticaddigital;
}
