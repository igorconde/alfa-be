import { Visitaconsultoriac } from '@modules/brasil-mais/entities/visitaconsultoriac.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atividadeconsultoriac } from './atividadeconsultoriac.entity';
import { Etapaconsultoriac } from './etapaconsultoriac.entity';

@Index('atendimentoconsultoriac_pkey', ['id'], { unique: true })
@Index('tndimentoconsultoriacfktendimentoconsultoriacidetapaconsultoria', ['idetapaconsultoria'], {})
@Entity('atendimentoconsultoriac', { schema: 'public' })
export class Atendimentoconsultoriac {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'etapa', nullable: true })
  etapa: number | null;

  @Column('boolean', { name: 'finalizado', nullable: true })
  finalizado: boolean | null;

  @Column('integer', { name: 'horasapropriadas', nullable: true })
  horasapropriadas: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idetapaconsultoria', nullable: true })
  idetapaconsultoria: number | null;

  @Column('boolean', { name: 'cancelado', nullable: true })
  cancelado: boolean | null;

  @ManyToOne(() => Etapaconsultoriac, (etapaconsultoriac) => etapaconsultoriac.atendimentoconsultoriacs)
  @JoinColumn([{ name: 'idetapaconsultoria', referencedColumnName: 'id' }])
  idetapaconsultoria2: Etapaconsultoriac;

  @OneToMany(() => Atividadeconsultoriac, (atividadeconsultoriac) => atividadeconsultoriac.idatendimentoconsultoria2)
  atividadeconsultoriacs: Atividadeconsultoriac[];

  @OneToMany(() => Visitaconsultoriac, (visitaconsultoriac) => visitaconsultoriac.idatendimentoconsultoria2)
  visitaconsultoriacs: Visitaconsultoriac[];
}
