import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Atendimento } from './Atendimento';
import { Tipoproduto } from './Tipoproduto';
import { Tipovenda } from './Tipovenda';

@Index('atendimentopesquisa_pkey', ['atendimentoId'], { unique: true })
@Index('ix_atendimentopesquisa_fk_atendimentopesquisa_tipoproduto_id', ['tipoprodutoId'], {})
@Index('ix_atendimentopesquisa_fk_atendimentopesquisa_tipovenda_id', ['tipovendaId'], {})
@Entity('atendimentopesquisa', { schema: 'public' })
export class Atendimentopesquisa {
  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'detalhes',
    nullable: true,
    length: 500,
  })
  detalhes: string | null;

  @Column('integer', { primary: true, name: 'atendimento_id' })
  atendimentoId: number;

  @Column('integer', { name: 'tipoproduto_id', nullable: true })
  tipoprodutoId: number | null;

  @Column('integer', { name: 'tipovenda_id', nullable: true })
  tipovendaId: number | null;

  @OneToOne(() => Atendimento, (atendimento) => atendimento.atendimentopesquisa)
  @JoinColumn([{ name: 'atendimento_id', referencedColumnName: 'id' }])
  atendimento: Atendimento;

  @ManyToOne(() => Tipoproduto, (tipoproduto) => tipoproduto.atendimentopesquisas)
  @JoinColumn([{ name: 'tipoproduto_id', referencedColumnName: 'id' }])
  tipoproduto: Tipoproduto;

  @ManyToOne(() => Tipovenda, (tipovenda) => tipovenda.atendimentopesquisas)
  @JoinColumn([{ name: 'tipovenda_id', referencedColumnName: 'id' }])
  tipovenda: Tipovenda;
}
