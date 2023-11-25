import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexocontramedidasa3consultoriacdigital } from './Anexocontramedidasa3consultoriacdigital';
import { Planodeacaoconsultoriacdigital } from './Planodeacaoconsultoriacdigital';
import { Temaa3consultoriacdigital } from './temaa3consultoriacdigital.entity';

@Index('contramedidasa3consultoriacdigital_pkey', ['id'], { unique: true })
@Index('cntrmdds3cnsltoriacdigitalfkcntrmdds3cnsultoriacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('contramedidasa3consultoriacdigital', { schema: 'public' })
export class Contramedidasa3consultoriacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idtemaa3', nullable: true })
  idtemaa3: number | null;

  @OneToMany(() => Anexocontramedidasa3consultoriacdigital, (anexocontramedidasa3consultoriacdigital) => anexocontramedidasa3consultoriacdigital.idcontramedidasa)
  anexocontramedidasa3consultoriacdigitals: Anexocontramedidasa3consultoriacdigital[];

  @ManyToOne(() => Temaa3consultoriacdigital, (temaa3consultoriacdigital) => temaa3consultoriacdigital.contramedidasa3consultoriacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3consultoriacdigital;

  @OneToMany(() => Planodeacaoconsultoriacdigital, (planodeacaoconsultoriacdigital) => planodeacaoconsultoriacdigital.idcontramedidasa)
  planodeacaoconsultoriacdigitals: Planodeacaoconsultoriacdigital[];
}
