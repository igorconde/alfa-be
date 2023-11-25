import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoacompanhamentoa3consultoriacdigital } from './anexoacompanhamentoa3consultoriacdigital.entity';
import { Medidasacompanhamentoa3consultoriacdigital } from './medidasacompanhamentoa3consultoriacdigital.entity';
import { Temaa3consultoriacdigital } from './temaa3consultoriacdigital.entity';

@Index('acompanhamentoa3consultoriacdigital_pkey', ['id'], { unique: true })
@Index('cmpnhmnt3cnsltoriacdigitalfkcmpnhmnt3cnsultoriacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('acompanhamentoa3consultoriacdigital', { schema: 'public' })
export class Acompanhamentoa3consultoriacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idtemaa3', nullable: true })
  idtemaa3: number | null;

  @ManyToOne(() => Temaa3consultoriacdigital, (temaa3consultoriacdigital) => temaa3consultoriacdigital.acompanhamentoa3consultoriacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3consultoriacdigital;

  @OneToMany(() => Anexoacompanhamentoa3consultoriacdigital, (anexoacompanhamentoa3consultoriacdigital) => anexoacompanhamentoa3consultoriacdigital.idacompanhamentoa)
  anexoacompanhamentoa3consultoriacdigitals: Anexoacompanhamentoa3consultoriacdigital[];

  @OneToMany(() => Medidasacompanhamentoa3consultoriacdigital, (medidasacompanhamentoa3consultoriacdigital) => medidasacompanhamentoa3consultoriacdigital.idacompanhamentoa)
  medidasacompanhamentoa3consultoriacdigitals: Medidasacompanhamentoa3consultoriacdigital[];
}
