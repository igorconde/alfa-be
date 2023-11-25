import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentoalinhamentobdigital } from './Atendimentoalinhamentobdigital';
import { Turmamentoriadigital } from './turmamentoriadigital.entity';

@Index('etapaalinhamentob_pkey', ['id'], { unique: true })
@Index('ix_etapaalinhamentob_fk_etapaalinhamentob_idturma', ['idturma'], {})
@Entity('etapaalinhamentob', { schema: 'public' })
export class Etapaalinhamentob {
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

  @OneToMany(() => Atendimentoalinhamentobdigital, (atendimentoalinhamentobdigital) => atendimentoalinhamentobdigital.idetapaalinhamento2)
  atendimentoalinhamentobdigitals: Atendimentoalinhamentobdigital[];

  @ManyToOne(() => Turmamentoriadigital, (turmamentoriadigital) => turmamentoriadigital.etapaalinhamentobs)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turmamentoriadigital;
}
