import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentoturmadigital } from './Atendimentoturmadigital';

@Index('alunodigital_pkey', ['id'], { unique: true })
@Index('ix_alunodigital_fk_alunodigital_idatendimentoturma', ['idatendimentoturma'], {})
@Entity('alunodigital', { schema: 'public' })
export class Alunodigital {
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

  @ManyToOne(() => Atendimentoturmadigital, (atendimentoturmadigital) => atendimentoturmadigital.alunodigitals)
  @JoinColumn([{ name: 'idatendimentoturma', referencedColumnName: 'id' }])
  idatendimentoturma2: Atendimentoturmadigital;
}
