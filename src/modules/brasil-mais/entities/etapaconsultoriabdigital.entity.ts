import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentoconsultoriabdigital } from './Atendimentoconsultoriabdigital';
import { Turmamentoriadigital } from './turmamentoriadigital.entity';

@Index('etapaconsultoriabdigital_pkey', ['id'], { unique: true })
@Index('ix_etapaconsultoriabdigital_fk_etapaconsultoriabdigital_idturma', ['idturma'], {})
@Entity('etapaconsultoriabdigital', { schema: 'public' })
export class Etapaconsultoriabdigital {
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

  @OneToMany(() => Atendimentoconsultoriabdigital, (atendimentoconsultoriabdigital) => atendimentoconsultoriabdigital.idetapaconsultoria2)
  atendimentoconsultoriabdigitals: Atendimentoconsultoriabdigital[];

  @ManyToOne(() => Turmamentoriadigital, (turmamentoriadigital) => turmamentoriadigital.etapaconsultoriabdigitals)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turmamentoriadigital;
}
