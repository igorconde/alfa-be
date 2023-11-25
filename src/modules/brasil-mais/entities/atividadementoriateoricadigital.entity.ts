import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoatividadeteoricadigital } from './anexoatividadeteoricadigital.entity';
import { Etapateoricadigital } from './etapateoricadigital.entity';

@Index('atividadementoriateoricadigital_pkey', ['id'], { unique: true })
@Index('tvddmntrateoricadigitalfktvddmntriateoricadigitalidetapateorica', ['idetapateorica'], {})
@Entity('atividadementoriateoricadigital', { schema: 'public' })
export class Atividadementoriateoricadigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'codatividade', nullable: true })
  codatividade: number | null;

  @Column('character varying', {
    name: 'nomeatividade',
    nullable: true,
    length: 255,
  })
  nomeatividade: string | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idetapateorica', nullable: true })
  idetapateorica: number | null;

  @OneToMany(() => Anexoatividadeteoricadigital, (anexoatividadeteoricadigital) => anexoatividadeteoricadigital.idatividadeteorica2)
  anexoatividadeteoricadigitals: Anexoatividadeteoricadigital[];

  @ManyToOne(() => Etapateoricadigital, (etapateoricadigital) => etapateoricadigital.atividadementoriateoricadigitals)
  @JoinColumn([{ name: 'idetapateorica', referencedColumnName: 'id' }])
  idetapateorica2: Etapateoricadigital;
}
