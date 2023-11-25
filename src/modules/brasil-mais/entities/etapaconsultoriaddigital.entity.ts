import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentoconsultoriaddigital } from './atendimentoconsultoriaddigital.entity';
import { Turmamentoriadigital } from './turmamentoriadigital.entity';

@Index('etapaconsultoriaddigital_pkey', ['id'], { unique: true })
@Index('ix_etapaconsultoriaddigital_fk_etapaconsultoriaddigital_idturma', ['idturma'], {})
@Entity('etapaconsultoriaddigital', { schema: 'public' })
export class Etapaconsultoriaddigital {
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

  @OneToMany(() => Atendimentoconsultoriaddigital, (atendimentoconsultoriaddigital) => atendimentoconsultoriaddigital.idetapaconsultoria2)
  atendimentoconsultoriaddigitals: Atendimentoconsultoriaddigital[];

  @ManyToOne(() => Turmamentoriadigital, (turmamentoriadigital) => turmamentoriadigital.etapaconsultoriaddigitals)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turmamentoriadigital;
}
