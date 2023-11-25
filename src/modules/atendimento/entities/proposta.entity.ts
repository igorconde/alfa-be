import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoproposta } from './Anexoproposta';
import { Enviofaturamentoatendimento } from './Enviofaturamentoatendimento';
import { Unidade } from './Unidade';
import { Propostaatendimento } from './Propostaatendimento';

@Index('proposta_pkey', ['id'], { unique: true })
@Entity('proposta', { schema: 'public' })
export class Proposta {
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

  @Column('character varying', {
    name: 'codigointegracaoproposta',
    nullable: true,
    length: 45,
  })
  codigointegracaoproposta: string | null;

  @OneToMany(() => Anexoproposta, (anexoproposta) => anexoproposta.idproposta2)
  anexopropostas: Anexoproposta[];

  @OneToMany(() => Enviofaturamentoatendimento, (enviofaturamentoatendimento) => enviofaturamentoatendimento.idproposta2)
  enviofaturamentoatendimentos: Enviofaturamentoatendimento[];

  @ManyToOne(() => Unidade, (unidade) => unidade.propostas)
  @JoinColumn([{ name: 'idregional', referencedColumnName: 'id' }])
  idregional: Unidade;

  @OneToMany(() => Propostaatendimento, (propostaatendimento) => propostaatendimento.idproposta)
  propostaatendimentos: Propostaatendimento[];
}
