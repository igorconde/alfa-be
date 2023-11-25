import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentoconsultoriacdigital } from './Atendimentoconsultoriacdigital';
import { Turmamentoriadigital } from './Turmamentoriadigital';

@Index('etapaconsultoriacdigital_pkey', ['id'], { unique: true })
@Index('ix_etapaconsultoriacdigital_fk_etapaconsultoriacdigital_idturma', ['idturma'], {})
@Entity('etapaconsultoriacdigital', { schema: 'public' })
export class Etapaconsultoriacdigital {
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

  @OneToMany(() => Atendimentoconsultoriacdigital, (atendimentoconsultoriacdigital) => atendimentoconsultoriacdigital.idetapaconsultoria2)
  atendimentoconsultoriacdigitals: Atendimentoconsultoriacdigital[];

  @ManyToOne(() => Turmamentoriadigital, (turmamentoriadigital) => turmamentoriadigital.etapaconsultoriacdigitals)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turmamentoriadigital;
}