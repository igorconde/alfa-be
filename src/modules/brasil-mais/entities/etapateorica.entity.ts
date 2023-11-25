import { Colaborador } from '@modules/usuario/entities/colaborador.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atividadementoriateorica } from './Atividadementoriateorica';
import { Turma } from './Turma';
import { Visitateorica } from './Visitateorica';

@Index('etapateorica_pkey', ['id'], { unique: true })
@Index('ix_etapateorica_fk_etapateorica_idmentor', ['idmentor'], {})
@Index('ix_etapateorica_fk_etapateorica_idturma', ['idturma'], {})
@Entity('etapateorica', { schema: 'public' })
export class Etapateorica {
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

  @Column('integer', { name: 'idturma', nullable: true })
  idturma: number | null;

  @Column('integer', { name: 'idmentor', nullable: true })
  idmentor: number | null;

  @OneToMany(() => Atividadementoriateorica, (atividadementoriateorica) => atividadementoriateorica.idetapateorica2)
  atividadementoriateoricas: Atividadementoriateorica[];

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.etapateoricas)
  @JoinColumn([{ name: 'idmentor', referencedColumnName: 'id' }])
  idmentor2: Colaborador;

  @ManyToOne(() => Turma, (turma) => turma.etapateoricas)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turma;

  @OneToMany(() => Visitateorica, (visitateorica) => visitateorica.idetapateorica2)
  visitateoricas: Visitateorica[];
}
