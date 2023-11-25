import { Colaborador } from '@modules/usuario/entities/colaborador.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentopraticac } from './Atendimentopraticac';
import { Turma } from './turma.entity';

@Index('etapapraticac_pkey', ['id'], { unique: true })
@Index('ix_etapapraticac_fk_etapapraticac_idmentor', ['idmentor'], {})
@Index('ix_etapapraticac_fk_etapapraticac_idturma', ['idturma'], {})
@Entity('etapapraticac', { schema: 'public' })
export class Etapapraticac {
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

  @OneToMany(() => Atendimentopraticac, (atendimentopraticac) => atendimentopraticac.idetapapratica2)
  atendimentopraticacs: Atendimentopraticac[];

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.etapapraticacs)
  @JoinColumn([{ name: 'idmentor', referencedColumnName: 'id' }])
  idmentor2: Colaborador;

  @ManyToOne(() => Turma, (turma) => turma.etapapraticacs)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turma;
}
