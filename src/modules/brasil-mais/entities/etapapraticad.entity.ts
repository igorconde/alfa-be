import { Colaborador } from '@modules/usuario/entities/colaborador.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentopraticad } from './Atendimentopraticad';
import { Turma } from './turma.entity';

@Index('etapapraticad_pkey', ['id'], { unique: true })
@Index('ix_etapapraticad_fk_etapapraticad_idmentor', ['idmentor'], {})
@Index('ix_etapapraticad_fk_etapapraticad_idturma', ['idturma'], {})
@Entity('etapapraticad', { schema: 'public' })
export class Etapapraticad {
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

  @OneToMany(() => Atendimentopraticad, (atendimentopraticad) => atendimentopraticad.idetapapratica2)
  atendimentopraticads: Atendimentopraticad[];

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.etapapraticads)
  @JoinColumn([{ name: 'idmentor', referencedColumnName: 'id' }])
  idmentor2: Colaborador;

  @ManyToOne(() => Turma, (turma) => turma.etapapraticads)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turma;
}
