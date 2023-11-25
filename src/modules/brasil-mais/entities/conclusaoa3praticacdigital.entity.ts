import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexomelhoriaa3praticacdigital } from './Anexomelhoriaa3praticacdigital';
import { Temaa3praticacdigital } from './Temaa3praticacdigital';

@Index('conclusaoa3praticacdigital_pkey', ['id'], { unique: true })
@Index('conclusaoa3praticacdigitalfkconclusaoa3praticacdigital_idtemaa3', ['idtemaa3'], {})
@Entity('conclusaoa3praticacdigital', { schema: 'public' })
export class Conclusaoa3praticacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idtemaa3', nullable: true })
  idtemaa3: number | null;

  @OneToMany(() => Anexomelhoriaa3praticacdigital, (anexomelhoriaa3praticacdigital) => anexomelhoriaa3praticacdigital.idconclusaoa)
  anexomelhoriaa3praticacdigitals: Anexomelhoriaa3praticacdigital[];

  @ManyToOne(() => Temaa3praticacdigital, (temaa3praticacdigital) => temaa3praticacdigital.conclusaoa3praticacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3praticacdigital;
}
