import { Colaborador } from '@modules/usuario/entities/colaborador.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentoconsultoriad } from './atendimentoconsultoriad.entity';
import { Turma } from './turma.entity';

@Index('etapaconsultoriad_pkey', ['id'], { unique: true })
@Index('ix_etapaconsultoriad_fk_etapaconsultoriad_idmentor', ['idmentor'], {})
@Index('ix_etapaconsultoriad_fk_etapaconsultoriad_idturma', ['idturma'], {})
@Entity('etapaconsultoriad', { schema: 'public' })
export class Etapaconsultoriad {
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

  @OneToMany(() => Atendimentoconsultoriad, (atendimentoconsultoriad) => atendimentoconsultoriad.idetapaconsultoria2)
  atendimentoconsultoriads: Atendimentoconsultoriad[];

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.etapaconsultoriads)
  @JoinColumn([{ name: 'idmentor', referencedColumnName: 'id' }])
  idmentor2: Colaborador;

  @ManyToOne(() => Turma, (turma) => turma.etapaconsultoriads)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turma;
}
