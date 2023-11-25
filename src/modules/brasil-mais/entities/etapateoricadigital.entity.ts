import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atividadementoriateoricadigital } from './Atividadementoriateoricadigital';
import { Encontroteoricadigital } from './Encontroteoricadigital';
import { Turmamentoriadigital } from './Turmamentoriadigital';

@Index('etapateoricadigital_pkey', ['id'], { unique: true })
@Index('ix_etapateoricadigital_fk_etapateoricadigital_idturma', ['idturma'], {})
@Entity('etapateoricadigital', { schema: 'public' })
export class Etapateoricadigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', { name: 'datainicio', nullable: true })
  datainicio: Date | null;

  @Column('timestamp without time zone', {
    name: 'datatermino',
    nullable: true,
  })
  datatermino: Date | null;

  @Column('integer', { name: 'etapa', nullable: true })
  etapa: number | null;

  @Column('boolean', { name: 'finalizada', nullable: true })
  finalizada: boolean | null;

  @Column('integer', { name: 'horasapropriadas', nullable: true })
  horasapropriadas: number | null;

  @Column('character varying', {
    name: 'mentores',
    nullable: true,
    length: 255,
  })
  mentores: string | null;

  @Column('integer', { name: 'idturma', nullable: true })
  idturma: number | null;

  @OneToMany(() => Atividadementoriateoricadigital, (atividadementoriateoricadigital) => atividadementoriateoricadigital.idetapateorica2)
  atividadementoriateoricadigitals: Atividadementoriateoricadigital[];

  @OneToMany(() => Encontroteoricadigital, (encontroteoricadigital) => encontroteoricadigital.idetapateorica2)
  encontroteoricadigitals: Encontroteoricadigital[];

  @ManyToOne(() => Turmamentoriadigital, (turmamentoriadigital) => turmamentoriadigital.etapateoricadigitals)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turmamentoriadigital;
}
