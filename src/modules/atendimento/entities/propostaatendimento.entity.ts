import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Proposta } from './proposta.entity';

@Index('propostaatendimento_pkey', ['id'], { unique: true })
@Entity('propostaatendimento', { schema: 'public' })
export class Propostaatendimento {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.propostaatendimentos)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento: Atendimento;

  @ManyToOne(() => Proposta, (proposta) => proposta.propostaatendimentos)
  @JoinColumn([{ name: 'idproposta', referencedColumnName: 'id' }])
  idproposta: Proposta;
}
