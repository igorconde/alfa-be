import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Colaborador } from './colaborador.entity';
import { Skill } from './skill.entity';

@Index('colaboradorskill_pkey', ['id'], { unique: true })
@Index('icolaboradorskillfkcolaborador', ['idcolaborador'], {})
@Index('icolaboradorskillfkskill', ['idskill'], {})
@Entity('colaboradorskill', { schema: 'public' })
export class Colaboradorskill {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idcolaborador', nullable: true })
  idcolaborador: number | null;

  @Column('integer', { name: 'idskill', nullable: true })
  idskill: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.colaboradorskills)
  @JoinColumn([{ name: 'idcolaborador', referencedColumnName: 'id' }])
  idcolaborador2: Colaborador;

  @ManyToOne(() => Skill, (skill) => skill.colaboradorskills)
  @JoinColumn([{ name: 'idskill', referencedColumnName: 'id' }])
  idskill2: Skill;
}
