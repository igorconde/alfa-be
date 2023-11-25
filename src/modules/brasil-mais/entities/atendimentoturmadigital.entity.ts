import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Alunodigital } from './Alunodigital';
import { Atendimento } from './Atendimento';
import { Turmamentoriadigital } from './Turmamentoriadigital';

@Index('atendimentoturmadigital_pkey', ['id'], { unique: true })
@Index('atendimentoturmadigitalfk_atendimentoturmadigital_idatendimento', ['idatendimento'], {})
@Index('ix_atendimentoturmadigital_fk_atendimentoturmadigital_idturma', ['idturma'], {})
@Entity('atendimentoturmadigital', { schema: 'public' })
export class Atendimentoturmadigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idturma', nullable: true })
  idturma: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @OneToMany(() => Alunodigital, (alunodigital) => alunodigital.idatendimentoturma2)
  alunodigitals: Alunodigital[];

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.atendimentoturmadigitals)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Turmamentoriadigital, (turmamentoriadigital) => turmamentoriadigital.atendimentoturmadigitals)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turmamentoriadigital;
}
