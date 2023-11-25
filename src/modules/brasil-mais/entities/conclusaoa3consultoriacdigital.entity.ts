import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexomelhoriaa3consultoriacdigital } from './Anexomelhoriaa3consultoriacdigital';
import { Temaa3consultoriacdigital } from './temaa3consultoriacdigital.entity';

@Index('conclusaoa3consultoriacdigital_pkey', ['id'], { unique: true })
@Index('cncls3consultoriacdigitalfkcnclsaoa3consultoriacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('conclusaoa3consultoriacdigital', { schema: 'public' })
export class Conclusaoa3consultoriacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idtemaa3', nullable: true })
  idtemaa3: number | null;

  @OneToMany(() => Anexomelhoriaa3consultoriacdigital, (anexomelhoriaa3consultoriacdigital) => anexomelhoriaa3consultoriacdigital.idconclusaoa)
  anexomelhoriaa3consultoriacdigitals: Anexomelhoriaa3consultoriacdigital[];

  @ManyToOne(() => Temaa3consultoriacdigital, (temaa3consultoriacdigital) => temaa3consultoriacdigital.conclusaoa3consultoriacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3consultoriacdigital;
}
