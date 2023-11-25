import { Atendimentopraticabdigital } from '@modules/brasil-mais/entities/atendimentopraticabdigital.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Turmamentoriadigital } from './turmamentoriadigital.entity';

@Index('etapapraticabdigital_pkey', ['id'], { unique: true })
@Index('ix_etapapraticabdigital_fk_etapapraticabdigital_idturma', ['idturma'], {})
@Entity('etapapraticabdigital', { schema: 'public' })
export class Etapapraticabdigital {
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

  @OneToMany(() => Atendimentopraticabdigital, (atendimentopraticabdigital) => atendimentopraticabdigital.idetapapratica2)
  atendimentopraticabdigitals: Atendimentopraticabdigital[];

  @ManyToOne(() => Turmamentoriadigital, (turmamentoriadigital) => turmamentoriadigital.etapapraticabdigitals)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turmamentoriadigital;
}
