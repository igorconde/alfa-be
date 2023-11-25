import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentopraticaddigital } from './Atendimentopraticaddigital';
import { Turmamentoriadigital } from './Turmamentoriadigital';

@Index('etapapraticaddigital_pkey', ['id'], { unique: true })
@Index('ix_etapapraticaddigital_fk_etapapraticaddigital_idturma', ['idturma'], {})
@Entity('etapapraticaddigital', { schema: 'public' })
export class Etapapraticaddigital {
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

  @OneToMany(() => Atendimentopraticaddigital, (atendimentopraticaddigital) => atendimentopraticaddigital.idetapapratica2)
  atendimentopraticaddigitals: Atendimentopraticaddigital[];

  @ManyToOne(() => Turmamentoriadigital, (turmamentoriadigital) => turmamentoriadigital.etapapraticaddigitals)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turmamentoriadigital;
}
