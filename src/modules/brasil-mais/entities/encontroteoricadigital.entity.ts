import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoencontroteoricadigital } from './Anexoencontroteoricadigital';
import { Etapateoricadigital } from './etapateoricadigital.entity';

@Index('encontroteoricadigital_pkey', ['id'], { unique: true })
@Index('encontroteoricadigital_fk_encontroteoricadigital_idetapateorica', ['idetapateorica'], {})
@Entity('encontroteoricadigital', { schema: 'public' })
export class Encontroteoricadigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', { name: 'data', nullable: true })
  data: Date | null;

  @Column('boolean', { name: 'finalizada', nullable: true })
  finalizada: boolean | null;

  @Column('integer', { name: 'horasapropriadas', nullable: true })
  horasapropriadas: number | null;

  @Column('integer', { name: 'idmentor', nullable: true })
  idmentor: number | null;

  @Column('boolean', { name: 'isvirtual', nullable: true })
  isvirtual: boolean | null;

  @Column('integer', { name: 'ordem', nullable: true })
  ordem: number | null;

  @Column('integer', { name: 'turno', nullable: true })
  turno: number | null;

  @Column('integer', { name: 'idetapateorica', nullable: true })
  idetapateorica: number | null;

  @OneToMany(() => Anexoencontroteoricadigital, (anexoencontroteoricadigital) => anexoencontroteoricadigital.idencontroteorica2)
  anexoencontroteoricadigitals: Anexoencontroteoricadigital[];

  @ManyToOne(() => Etapateoricadigital, (etapateoricadigital) => etapateoricadigital.encontroteoricadigitals)
  @JoinColumn([{ name: 'idetapateorica', referencedColumnName: 'id' }])
  idetapateorica2: Etapateoricadigital;
}
