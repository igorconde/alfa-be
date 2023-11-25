import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Produtoregional } from '@modules/portfolio/entities/produtoregional.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentostatus } from './Atendimentostatus';
import { Produtocategoria } from './Produtocategoria';
import { Produtolinha } from './Produtolinha';
import { Produtonacional } from './Produtonacional';

@Index('fatoatendimento_pkey', ['id'], { unique: true })
@Index('ifatoatendimentofkatendimentostatus', ['idatendimentostatus'], {})
@Index('ifatoatendimentofkcalendarioaceitacao', ['idcalendarioaceitacao'], {})
@Index('ifatoatendimentofkcalendarioconclusao', ['idcalendarioconclusao'], {})
@Index('ifatoatendimentofkcalendarioemissao', ['idcalendarioemissao'], {})
@Index('ifatoatendimentofkcalendarionegociacao', ['idcalendarionegociacao'], {})
@Index('ifatoatendimentofkcliente', ['idcliente'], {})
@Index('ifatoatendimentofkprodutocategoria', ['idprodutocategoria'], {})
@Index('ifatoatendimentofkprodutolinha', ['idprodutolinha'], {})
@Index('ifatoatendimentofkprodutonacional', ['idprodutonacional'], {})
@Index('ifatoatendimentofkprodutoregional', ['idprodutoregional'], {})
@Index('ifatoatendimentofkunidadefederativa', ['idunidadefederativa'], {})
@Index('ifatoatendimentofkunidadenacional', ['idunidadenacional'], {})
@Index('ifatoatendimentofkunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ifatoatendimentofkunidaderegional', ['idunidaderegional'], {})
@Entity('fatoatendimento', { schema: 'public' })
export class Fatoatendimento {
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

  @Column('integer', { name: 'idcalendarioaceitacao', nullable: true })
  idcalendarioaceitacao: number | null;

  @Column('integer', { name: 'idcalendarioconclusao', nullable: true })
  idcalendarioconclusao: number | null;

  @Column('integer', { name: 'idcalendarioemissao', nullable: true })
  idcalendarioemissao: number | null;

  @Column('integer', { name: 'idcalendarionegociacao', nullable: true })
  idcalendarionegociacao: number | null;

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

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @ManyToOne(() => Atendimentostatus, (atendimentostatus) => atendimentostatus.fatoatendimentos)
  @JoinColumn([{ name: 'idatendimentostatus', referencedColumnName: 'id' }])
  idatendimentostatus2: Atendimentostatus;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatoatendimentos)
  @JoinColumn([{ name: 'idcalendarioaceitacao', referencedColumnName: 'id' }])
  idcalendarioaceitacao2: Calendario;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatoatendimentos2)
  @JoinColumn([{ name: 'idcalendarioconclusao', referencedColumnName: 'id' }])
  idcalendarioconclusao2: Calendario;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatoatendimentos3)
  @JoinColumn([{ name: 'idcalendarioemissao', referencedColumnName: 'id' }])
  idcalendarioemissao2: Calendario;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatoatendimentos4)
  @JoinColumn([{ name: 'idcalendarionegociacao', referencedColumnName: 'id' }])
  idcalendarionegociacao2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatoatendimentos)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.fatoatendimentos)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria2: Produtocategoria;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.fatoatendimentos)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Produtonacional, (produtonacional) => produtonacional.fatoatendimentos)
  @JoinColumn([{ name: 'idprodutonacional', referencedColumnName: 'id' }])
  idprodutonacional2: Produtonacional;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.fatoatendimentos)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoatendimentos)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoatendimentos2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoatendimentos3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
