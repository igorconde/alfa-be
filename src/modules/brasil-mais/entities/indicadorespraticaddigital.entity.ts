import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoindicadorespraticaddigital } from './Anexoindicadorespraticaddigital';
import { Maturidadepraticaddigital } from './Maturidadepraticaddigital';
import { Oeepraticaddigital } from './Oeepraticaddigital';
import { Produtividadepraticaddigital } from './Produtividadepraticaddigital';
import { Atendimentopraticaddigital } from './atendimentopraticaddigital.entity';

@Index('indicadorespraticaddigital_pkey', ['id'], { unique: true })
@Index('ndcdrsprticaddigitalfkndcdrspraticaddigitalidatendimentopratica', ['idatendimentopratica'], {})
@Entity('indicadorespraticaddigital', { schema: 'public' })
export class Indicadorespraticaddigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @OneToMany(() => Anexoindicadorespraticaddigital, (anexoindicadorespraticaddigital) => anexoindicadorespraticaddigital.idindicadores2)
  anexoindicadorespraticaddigitals: Anexoindicadorespraticaddigital[];

  @ManyToOne(() => Atendimentopraticaddigital, (atendimentopraticaddigital) => atendimentopraticaddigital.indicadorespraticaddigitals)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticaddigital;

  @OneToMany(() => Maturidadepraticaddigital, (maturidadepraticaddigital) => maturidadepraticaddigital.idindicadores2)
  maturidadepraticaddigitals: Maturidadepraticaddigital[];

  @OneToMany(() => Oeepraticaddigital, (oeepraticaddigital) => oeepraticaddigital.idindicadores2)
  oeepraticaddigitals: Oeepraticaddigital[];

  @OneToMany(() => Produtividadepraticaddigital, (produtividadepraticaddigital) => produtividadepraticaddigital.idindicadores2)
  produtividadepraticaddigitals: Produtividadepraticaddigital[];
}
