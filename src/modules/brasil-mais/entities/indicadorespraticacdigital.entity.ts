import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoindicadorespraticacdigital } from './Anexoindicadorespraticacdigital';
import { Atendimentopraticacdigital } from './Atendimentopraticacdigital';
import { Maturidadepraticacdigital } from './Maturidadepraticacdigital';
import { Oeepraticacdigital } from './Oeepraticacdigital';
import { Produtividadepraticacdigital } from './Produtividadepraticacdigital';

@Index('indicadorespraticacdigital_pkey', ['id'], { unique: true })
@Index('ndcdrsprticacdigitalfkndcdrspraticacdigitalidatendimentopratica', ['idatendimentopratica'], {})
@Entity('indicadorespraticacdigital', { schema: 'public' })
export class Indicadorespraticacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @OneToMany(() => Anexoindicadorespraticacdigital, (anexoindicadorespraticacdigital) => anexoindicadorespraticacdigital.idindicadores2)
  anexoindicadorespraticacdigitals: Anexoindicadorespraticacdigital[];

  @ManyToOne(() => Atendimentopraticacdigital, (atendimentopraticacdigital) => atendimentopraticacdigital.indicadorespraticacdigitals)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticacdigital;

  @OneToMany(() => Maturidadepraticacdigital, (maturidadepraticacdigital) => maturidadepraticacdigital.idindicadores2)
  maturidadepraticacdigitals: Maturidadepraticacdigital[];

  @OneToMany(() => Oeepraticacdigital, (oeepraticacdigital) => oeepraticacdigital.idindicadores2)
  oeepraticacdigitals: Oeepraticacdigital[];

  @OneToMany(() => Produtividadepraticacdigital, (produtividadepraticacdigital) => produtividadepraticacdigital.idindicadores2)
  produtividadepraticacdigitals: Produtividadepraticacdigital[];
}
