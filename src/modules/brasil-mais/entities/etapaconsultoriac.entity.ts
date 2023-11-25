import { Colaborador } from '@modules/usuario/entities/colaborador.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentoconsultoriac } from './Atendimentoconsultoriac';
import { Turma } from './turma.entity';

@Index('etapaconsultoriac_pkey', ['id'], { unique: true })
@Index('ix_etapaconsultoriac_fk_etapaconsultoriac_idmentor', ['idmentor'], {})
@Index('ix_etapaconsultoriac_fk_etapaconsultoriac_idturma', ['idturma'], {})
@Entity('etapaconsultoriac', { schema: 'public' })
export class Etapaconsultoriac {
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

  @Column('integer', { name: 'idmentor', nullable: true })
  idmentor: number | null;

  @Column('integer', { name: 'idturma', nullable: true })
  idturma: number | null;

  @OneToMany(() => Atendimentoconsultoriac, (atendimentoconsultoriac) => atendimentoconsultoriac.idetapaconsultoria2)
  atendimentoconsultoriacs: Atendimentoconsultoriac[];

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.etapaconsultoriacs)
  @JoinColumn([{ name: 'idmentor', referencedColumnName: 'id' }])
  idmentor2: Colaborador;

  @ManyToOne(() => Turma, (turma) => turma.etapaconsultoriacs)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turma;
}
