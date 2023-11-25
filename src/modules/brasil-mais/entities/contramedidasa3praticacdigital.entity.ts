import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexocontramedidasa3praticacdigital } from './Anexocontramedidasa3praticacdigital';
import { Temaa3praticacdigital } from './Temaa3praticacdigital';
import { Planodeacaopraticacdigital } from './Planodeacaopraticacdigital';

@Index('contramedidasa3praticacdigital_pkey', ['id'], { unique: true })
@Index('cntrmddasa3praticacdigitalfkcntrmdidasa3praticacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('contramedidasa3praticacdigital', { schema: 'public' })
export class Contramedidasa3praticacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idtemaa3', nullable: true })
  idtemaa3: number | null;

  @OneToMany(() => Anexocontramedidasa3praticacdigital, (anexocontramedidasa3praticacdigital) => anexocontramedidasa3praticacdigital.idcontramedidasa)
  anexocontramedidasa3praticacdigitals: Anexocontramedidasa3praticacdigital[];

  @ManyToOne(() => Temaa3praticacdigital, (temaa3praticacdigital) => temaa3praticacdigital.contramedidasa3praticacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3praticacdigital;

  @OneToMany(() => Planodeacaopraticacdigital, (planodeacaopraticacdigital) => planodeacaopraticacdigital.idcontramedidasa)
  planodeacaopraticacdigitals: Planodeacaopraticacdigital[];
}
