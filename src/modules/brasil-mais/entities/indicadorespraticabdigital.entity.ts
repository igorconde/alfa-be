import { Atendimentopraticabdigital } from '@modules/brasil-mais/entities/atendimentopraticabdigital.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoindicadorespraticabdigital } from './Anexoindicadorespraticabdigital';
import { Maturidadepraticabdigital } from './Maturidadepraticabdigital';
import { Produtividadepraticabdigital } from './Produtividadepraticabdigital';

@Index('indicadorespraticabdigital_pkey', ['id'], { unique: true })
@Index('ndcdrsprticabdigitalfkndcdrspraticabdigitalidatendimentopratica', ['idatendimentopratica'], {})
@Entity('indicadorespraticabdigital', { schema: 'public' })
export class Indicadorespraticabdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @OneToMany(() => Anexoindicadorespraticabdigital, (anexoindicadorespraticabdigital) => anexoindicadorespraticabdigital.idindicadores2)
  anexoindicadorespraticabdigitals: Anexoindicadorespraticabdigital[];

  @ManyToOne(() => Atendimentopraticabdigital, (atendimentopraticabdigital) => atendimentopraticabdigital.indicadorespraticabdigitals)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticabdigital;

  @OneToMany(() => Maturidadepraticabdigital, (maturidadepraticabdigital) => maturidadepraticabdigital.idindicadores2)
  maturidadepraticabdigitals: Maturidadepraticabdigital[];

  @OneToMany(() => Produtividadepraticabdigital, (produtividadepraticabdigital) => produtividadepraticabdigital.idindicadores2)
  produtividadepraticabdigitals: Produtividadepraticabdigital[];
}
