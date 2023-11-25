import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Produtocategoria } from '@modules/portfolio/entities/produtocategoria.entity';
import { Produtolinha } from '@modules/portfolio/entities/produtolinha.entity';
import { Produtonacional } from '@modules/portfolio/entities/produtonacional.entity';
import { Produtoregional } from '@modules/portfolio/entities/produtoregional.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentostatus } from './Atendimentostatus';

@Index('fatostatusatendimento_pkey', ['id'], { unique: true })
@Index('ifatostatusatendimentofkatendimentostatus', ['idatendimentostatus'], {})
@Index('ifatostatusatendimentofkcalendario', ['idcalendario'], {})
@Index('ifatostatusatendimentofkcliente', ['idcliente'], {})
@Index('ifatostatusatendimentofkprodutocategoria', ['idprodutocategoria'], {})
@Index('ifatostatusatendimentofkprodutolinha', ['idprodutolinha'], {})
@Index('ifatostatusatendimentofkprodutonacional', ['idprodutonacional'], {})
@Index('ifatostatusatendimentofkprodutoregional', ['idprodutoregional'], {})
@Index('ifatostatusatendimentofkunidadefederativa', ['idunidadefederativa'], {})
@Index('ifatostatusatendimentofkunidadenacional', ['idunidadenacional'], {})
@Index('ifatostatusatendimentofkunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ifatostatusatendimentofkunidaderegional', ['idunidaderegional'], {})
@Entity('fatostatusatendimento', { schema: 'public' })
export class Fatostatusatendimento {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'iscompartilhado', nullable: true })
  iscompartilhado: number | null;

  @Column('integer', { name: 'isemrede', nullable: true })
  isemrede: number | null;

  @Column('integer', { name: 'isescopoindefinido', nullable: true })
  isescopoindefinido: number | null;

  @Column('integer', { name: 'isvalorhora', nullable: true })
  isvalorhora: number | null;

  @Column('integer', { name: 'numerodeproducaoestimada', nullable: true })
  numerodeproducaoestimada: number | null;

  @Column('double precision', {
    name: 'numerodereceitaestimada',
    nullable: true,
    precision: 53,
  })
  numerodereceitaestimada: number | null;

  @Column('integer', { name: 'numeroderelatorioestimado', nullable: true })
  numeroderelatorioestimado: number | null;

  @Column('double precision', {
    name: 'vlreconomico',
    nullable: true,
    precision: 53,
  })
  vlreconomico: number | null;

  @Column('double precision', {
    name: 'vlrfinanceiro',
    nullable: true,
    precision: 53,
  })
  vlrfinanceiro: number | null;

  @Column('integer', { name: 'idatendimentostatus', nullable: true })
  idatendimentostatus: number | null;

  @Column('integer', { name: 'idcalendario', nullable: true })
  idcalendario: number | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @Column('integer', { name: 'idprodutocategoria', nullable: true })
  idprodutocategoria: number | null;

  @Column('integer', { name: 'idprodutolinha', nullable: true })
  idprodutolinha: number | null;

  @Column('integer', { name: 'idprodutonacional', nullable: true })
  idprodutonacional: number | null;

  @Column('integer', { name: 'idprodutoregional', nullable: true })
  idprodutoregional: number | null;

  @Column('integer', { name: 'idunidadenacional', nullable: true })
  idunidadenacional: number | null;

  @Column('integer', { name: 'idunidadeoperacional', nullable: true })
  idunidadeoperacional: number | null;

  @Column('integer', { name: 'idunidaderegional', nullable: true })
  idunidaderegional: number | null;

  @Column('integer', { name: 'qtdeaceito', nullable: true })
  qtdeaceito: number | null;

  @Column('integer', { name: 'qtdecancelado', nullable: true })
  qtdecancelado: number | null;

  @Column('integer', { name: 'qtdeconcluido', nullable: true })
  qtdeconcluido: number | null;

  @Column('integer', { name: 'qtdeemitido', nullable: true })
  qtdeemitido: number | null;

  @Column('integer', { name: 'qtdenegociacao', nullable: true })
  qtdenegociacao: number | null;

  @Column('integer', { name: 'qtdepronto', nullable: true })
  qtdepronto: number | null;

  @Column('integer', { name: 'qtderecusado', nullable: true })
  qtderecusado: number | null;

  @Column('double precision', {
    name: 'vlraceito',
    nullable: true,
    precision: 53,
  })
  vlraceito: number | null;

  @Column('double precision', {
    name: 'vlrcancelado',
    nullable: true,
    precision: 53,
  })
  vlrcancelado: number | null;

  @Column('double precision', {
    name: 'vlrconcluido',
    nullable: true,
    precision: 53,
  })
  vlrconcluido: number | null;

  @Column('double precision', {
    name: 'vlremitido',
    nullable: true,
    precision: 53,
  })
  vlremitido: number | null;

  @Column('double precision', {
    name: 'vlrnegociacao',
    nullable: true,
    precision: 53,
  })
  vlrnegociacao: number | null;

  @Column('double precision', {
    name: 'vlrpronto',
    nullable: true,
    precision: 53,
  })
  vlrpronto: number | null;

  @Column('double precision', {
    name: 'vlrrecusado',
    nullable: true,
    precision: 53,
  })
  vlrrecusado: number | null;

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @Column('integer', { name: 'idportecliente', nullable: true })
  idportecliente: number | null;

  @Column('integer', { name: 'qtdeexecucao', nullable: true })
  qtdeexecucao: number | null;

  @ManyToOne(() => Atendimentostatus, (atendimentostatus) => atendimentostatus.fatostatusatendimentos)
  @JoinColumn([{ name: 'idatendimentostatus', referencedColumnName: 'id' }])
  idatendimentostatus2: Atendimentostatus;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatostatusatendimentos)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatostatusatendimentos)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.fatostatusatendimentos)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria2: Produtocategoria;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.fatostatusatendimentos)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Produtonacional, (produtonacional) => produtonacional.fatostatusatendimentos)
  @JoinColumn([{ name: 'idprodutonacional', referencedColumnName: 'id' }])
  idprodutonacional2: Produtonacional;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.fatostatusatendimentos)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatostatusatendimentos)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatostatusatendimentos2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatostatusatendimentos3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
