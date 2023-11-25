import { Colaborador } from '@modules/usuario/entities/colaborador.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentopraticab } from './Atendimentopraticab';
import { Turma } from './turma.entity';

@Index('etapapraticab_pkey', ['id'], { unique: true })
@Index('ix_etapapraticab_fk_etapapraticab_idmentor', ['idmentor'], {})
@Index('ix_etapapraticab_fk_etapapraticab_idturma', ['idturma'], {})
@Entity('etapapraticab', { schema: 'public' })
export class Etapapraticab {
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

  @OneToMany(() => Atendimentopraticab, (atendimentopraticab) => atendimentopraticab.idetapapratica2)
  atendimentopraticabs: Atendimentopraticab[];

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.etapapraticabs)
  @JoinColumn([{ name: 'idmentor', referencedColumnName: 'id' }])
  idmentor2: Colaborador;

  @ManyToOne(() => Turma, (turma) => turma.etapapraticabs)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turma;
}
