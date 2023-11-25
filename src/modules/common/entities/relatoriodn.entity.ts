import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentostatus } from './Atendimentostatus';
import { Atendimentostatussi } from './Atendimentostatussi';
import { Produtolinha } from './Produtolinha';
import { Unidade } from './Unidade';

@Index('relatoriodn_pkey', ['id'], { unique: true })
@Index('ix_relatoriodn_fk_relatoriodn_idatendimentostatus', ['idatendimentostatus'], {})
@Index('ix_relatoriodn_fk_relatoriodn_idatendimentostatussi', ['idatendimentostatussi'], {})
@Index('ix_relatoriodn_fk_relatoriodn_idprodutolinha', ['idprodutolinha'], {})
@Index('ix_relatoriodn_fk_relatoriodn_idregional', ['idregional'], {})
@Index('ix_relatoriodn_fk_relatoriodn_idunidade', ['idunidade'], {})
@Entity('relatoriodn', { schema: 'public' })
export class Relatoriodn {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'atualizadopara',
    nullable: true,
    length: 255,
  })
  atualizadopara: string | null;

  @Column('character varying', { name: 'datafim', nullable: true, length: 255 })
  datafim: string | null;

  @Column('character varying', {
    name: 'datainicio',
    nullable: true,
    length: 255,
  })
  datainicio: string | null;

  @Column('character varying', {
    name: 'modalidade',
    nullable: true,
    length: 255,
  })
  modalidade: string | null;

  @Column('boolean', {
    name: 'processado',
    nullable: true,
    default: () => 'false',
  })
  processado: boolean | null;

  @Column('character varying', { name: 'url', nullable: true, length: 255 })
  url: string | null;

  @Column('integer', { name: 'idatendimentostatus', nullable: true })
  idatendimentostatus: number | null;

  @Column('integer', { name: 'idatendimentostatussi', nullable: true })
  idatendimentostatussi: number | null;

  @Column('integer', { name: 'idprodutolinha', nullable: true })
  idprodutolinha: number | null;

  @Column('integer', { name: 'idregional', nullable: true })
  idregional: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @ManyToOne(() => Atendimentostatus, (atendimentostatus) => atendimentostatus.relatoriodns)
  @JoinColumn([{ name: 'idatendimentostatus', referencedColumnName: 'id' }])
  idatendimentostatus2: Atendimentostatus;

  @ManyToOne(() => Atendimentostatussi, (atendimentostatussi) => atendimentostatussi.relatoriodns)
  @JoinColumn([{ name: 'idatendimentostatussi', referencedColumnName: 'id' }])
  idatendimentostatussi2: Atendimentostatussi;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.relatoriodns)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Unidade, (unidade) => unidade.relatoriodns)
  @JoinColumn([{ name: 'idregional', referencedColumnName: 'id' }])
  idregional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.relatoriodns2)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
