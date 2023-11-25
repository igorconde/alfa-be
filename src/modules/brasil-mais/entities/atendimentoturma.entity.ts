import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Aluno } from './aluno.entity';
import { Turma } from './turma.entity';

@Index('atendimentoturma_pkey', ['id'], { unique: true })
@Index('ix_atendimentoturma_fk_atendimentoturma_idatendimento', ['idatendimento'], {})
@Index('unique_idatendimento', ['idatendimento'], { unique: true })
@Index('ix_atendimentoturma_fk_atendimentoturma_idturma', ['idturma'], {})
@Entity('atendimentoturma', { schema: 'public' })
export class Atendimentoturma {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idturma', nullable: true })
  idturma: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true, unique: true })
  idatendimento: number | null;

  @OneToMany(() => Aluno, (aluno) => aluno.idatendimentoturma2)
  alunos: Aluno[];

  @OneToOne(() => Atendimento, (atendimento) => atendimento.atendimentoturma)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Turma, (turma) => turma.atendimentoturmas)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turma;
}
