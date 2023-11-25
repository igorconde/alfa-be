import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoacompanhamentoa3praticacdigital } from './anexoacompanhamentoa3praticacdigital.entity';
import { Medidasacompanhamentoa3praticacdigital } from './medidasacompanhamentoa3praticacdigital.entity';
import { Temaa3praticacdigital } from './temaa3praticacdigital.entity';

@Index('acompanhamentoa3praticacdigital_pkey', ['id'], { unique: true })
@Index('cmpnhmntoa3praticacdigitalfkcmpnhmentoa3praticacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('acompanhamentoa3praticacdigital', { schema: 'public' })
export class Acompanhamentoa3praticacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idtemaa3', nullable: true })
  idtemaa3: number | null;

  @ManyToOne(() => Temaa3praticacdigital, (temaa3praticacdigital) => temaa3praticacdigital.acompanhamentoa3praticacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3praticacdigital;

  @OneToMany(() => Anexoacompanhamentoa3praticacdigital, (anexoacompanhamentoa3praticacdigital) => anexoacompanhamentoa3praticacdigital.idacompanhamentoa)
  anexoacompanhamentoa3praticacdigitals: Anexoacompanhamentoa3praticacdigital[];

  @OneToMany(() => Medidasacompanhamentoa3praticacdigital, (medidasacompanhamentoa3praticacdigital) => medidasacompanhamentoa3praticacdigital.idacompanhamentoa)
  medidasacompanhamentoa3praticacdigitals: Medidasacompanhamentoa3praticacdigital[];
}
