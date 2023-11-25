import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentoturma } from './Atendimentoturma';

@Index('aluno_pkey', ['id'], { unique: true })
@Index('ix_aluno_fk_aluno_idatendimentoturma', ['idatendimentoturma'], {})
@Entity('aluno', { schema: 'public' })
export class Aluno {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('boolean', { name: 'concluiuead', nullable: true })
  concluiuead: boolean | null;

  @Column('character varying', { name: 'cpfcnpj', nullable: true, length: 45 })
  cpfcnpj: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 80 })
  nome: string | null;

  @Column('integer', { name: 'idatendimentoturma', nullable: true })
  idatendimentoturma: number | null;

  @ManyToOne(() => Atendimentoturma, (atendimentoturma) => atendimentoturma.alunos)
  @JoinColumn([{ name: 'idatendimentoturma', referencedColumnName: 'id' }])
  idatendimentoturma2: Atendimentoturma;
}
