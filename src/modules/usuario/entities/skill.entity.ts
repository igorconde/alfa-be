import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Colaboradorskill } from './colaborador-skill.entity';

@Index('skill_pkey', ['id'], { unique: true })
@Entity('skill', { schema: 'public' })
export class Skill {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Colaboradorskill, (colaboradorskill) => colaboradorskill.idskill2)
  colaboradorskills: Colaboradorskill[];
}
