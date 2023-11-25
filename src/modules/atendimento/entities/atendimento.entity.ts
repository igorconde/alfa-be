import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoatendimentoreferencial } from './Anexoatendimentoreferencial';
import { Anexoindicadorprodutividade } from './Anexoindicadorprodutividade';
import { Apl } from './Apl';
import { Areapesquisa } from './Areapesquisa';
import { AtendimentoPdi } from './AtendimentoPdi';
import { AtendimentoSubetapa } from './AtendimentoSubetapa';
import { Atendimentofase } from './Atendimentofase';
import { Atendimentojustificativa } from './Atendimentojustificativa';
import { Atendimentopesquisa } from './Atendimentopesquisa';
import { Atendimentoproducaoapropriada } from './Atendimentoproducaoapropriada';
import { Atendimentorede } from './Atendimentorede';
import { Atendimentoscriticas } from './Atendimentoscriticas';
import { Atendimentosi } from './Atendimentosi';
import { Atendimentostatus } from './Atendimentostatus';
import { Atendimentoturma } from './Atendimentoturma';
import { Atendimentoturmadigital } from './Atendimentoturmadigital';
import { Cliente } from './Cliente';
import { Contrato } from './Contrato';
import { Entrega } from './Entrega';
import { Enviofaturamentoatendimento } from './Enviofaturamentoatendimento';
import { Fatoproducaoapropriada } from './Fatoproducaoapropriada';
import { Fatoproducaoapropriadametrologia } from './Fatoproducaoapropriadametrologia';
import { Fatoreceitaapropriada } from './Fatoreceitaapropriada';
import { Fatoreceitacompetencia } from './Fatoreceitacompetencia';
import { Historicotrocastatusdndr } from './Historicotrocastatusdndr';
import { Indicadoratendimentoreferencial } from './Indicadoratendimentoreferencial';
import { Indicadores } from './Indicadores';
import { Ordemfaturamento } from './Ordemfaturamento';
import { Pesquisasatisfacao } from './Pesquisasatisfacao';
import { Previsaoapropriacaoproducao } from './Previsaoapropriacaoproducao';
import { Previsaoproducao } from './Previsaoproducao';
import { Previsaoproducaocompartilhada } from './Previsaoproducaocompartilhada';
import { Previsaoproducaoemrede } from './Previsaoproducaoemrede';
import { Previsaoreceita } from './Previsaoreceita';
import { Producaoapropriada } from './Producaoapropriada';
import { Produtolinha } from './Produtolinha';
import { Produtoregional } from './Produtoregional';
import { Propostaatendimento } from './Propostaatendimento';
import { Receitaapropriada } from './Receitaapropriada';
import { Receitafaturamento } from './Receitafaturamento';
import { Receitafaturamentobackup } from './Receitafaturamentobackup';
import { Relatoriofinal } from './Relatoriofinal';
import { Solicitacaostatus } from './Solicitacaostatus';
import { Termoaceite } from './Termoaceite';

@Index('atendimentobuscalivre', ['buscalivreatendimento'], {})
@Index('atendimento_pkey', ['id'], { unique: true })
@Index('iatendimentofkatendimentostatus', ['idatendimentostatus'], {})
@Index('iatendimentofkcliente', ['idcliente'], {})
@Index('iatendimentofkprodutolinha', ['idprodutolinha'], {})
@Index('iatendimentofkprodutoregional', ['idprodutoregional'], {})
@Index('iatendimentofkunidade', ['idunidade'], {})
@Entity('atendimento', { schema: 'public' })
export class Atendimento {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('date', { name: 'dataemissao', nullable: true })
  dataemissao: string | null;

  @Column('boolean', { name: 'iscompartilhado', nullable: true })
  iscompartilhado: boolean | null;

  @Column('boolean', { name: 'isemrede', nullable: true })
  isemrede: boolean | null;

  @Column('boolean', { name: 'isescopoindefinido', nullable: true })
  isescopoindefinido: boolean | null;

  @Column('integer', { name: 'numero', nullable: true })
  numero: number | null;

  @Column('integer', { name: 'numerodeproducaoestimada', nullable: true })
  numerodeproducaoestimada: number | null;

  @Column('double precision', {
    name: 'numerodereceitaestimada',
    nullable: true,
    precision: 53,
  })
  numerodereceitaestimada: number | null;

  @Column('character varying', { name: 'titulo', nullable: true, length: 500 })
  titulo: string | null;

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

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @Column('integer', { name: 'idprodutoregional', nullable: true })
  idprodutoregional: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('timestamp without time zone', {
    name: 'dataaceitacao',
    nullable: true,
  })
  dataaceitacao: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataatualizacao',
    nullable: true,
  })
  dataatualizacao: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataconclusao',
    nullable: true,
  })
  dataconclusao: Date | null;

  @Column('timestamp without time zone', {
    name: 'datanegociacao',
    nullable: true,
  })
  datanegociacao: Date | null;

  @Column('boolean', { name: 'isvalorhora', nullable: true })
  isvalorhora: boolean | null;

  @Column('integer', { name: 'numeroderelatorioestimado', nullable: true })
  numeroderelatorioestimado: number | null;

  @Column('integer', { name: 'idproposta', nullable: true })
  idproposta: number | null;

  @Column('tsvector', { name: 'buscalivreatendimento', nullable: true })
  buscalivreatendimento: string | null;

  @Column('integer', { name: 'idprodutolinha', nullable: true })
  idprodutolinha: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('timestamp without time zone', {
    name: 'datacancelamento',
    nullable: true,
  })
  datacancelamento: Date | null;

  @Column('timestamp without time zone', { name: 'datarecusa', nullable: true })
  datarecusa: Date | null;

  @Column('real', { name: 'movimentacao', nullable: true, precision: 24 })
  movimentacao: number | null;

  @Column('real', { name: 'produtividade', nullable: true, precision: 24 })
  produtividade: number | null;

  @Column('real', { name: 'qualidade', nullable: true, precision: 24 })
  qualidade: number | null;

  @Column('real', { name: 'retornoprograma', nullable: true, precision: 24 })
  retornoprograma: number | null;

  @Column('integer', { name: 'idcolaborador', nullable: true })
  idcolaborador: number | null;

  @Column('integer', { name: 'idsetor', nullable: true })
  idsetor: number | null;

  @Column('boolean', { name: 'ismetagoverno', nullable: true })
  ismetagoverno: boolean | null;

  @Column('character varying', {
    name: 'observacao',
    nullable: true,
    length: 1000,
  })
  observacao: string | null;

  @Column('character varying', {
    name: 'codigointegracaoatendimento',
    nullable: true,
    length: 45,
  })
  codigointegracaoatendimento: string | null;

  @Column('boolean', { name: 'isintegracao', nullable: true })
  isintegracao: boolean | null;

  @Column('real', { name: 'disponibilidade', nullable: true, precision: 24 })
  disponibilidade: number | null;

  @Column('character varying', {
    name: 'abrangenciaimpacto',
    nullable: true,
    length: 65,
  })
  abrangenciaimpacto: string | null;

  @Column('character varying', {
    name: 'areaservico',
    nullable: true,
    length: 255,
  })
  areaservico: string | null;

  @Column('character varying', {
    name: 'complexidade',
    nullable: true,
    length: 65,
  })
  complexidade: string | null;

  @Column('date', { name: 'dataconclusaoprevista', nullable: true })
  dataconclusaoprevista: string | null;

  @Column('timestamp without time zone', {
    name: 'dataexecucao',
    nullable: true,
  })
  dataexecucao: Date | null;

  @Column('date', { name: 'datainicioprevista', nullable: true })
  datainicioprevista: string | null;

  @Column('character varying', {
    name: 'grauinovacao',
    nullable: true,
    length: 65,
  })
  grauinovacao: string | null;

  @Column('character varying', {
    name: 'origemacaoprospectiva',
    nullable: true,
    length: 50,
  })
  origemacaoprospectiva: string | null;

  @Column('character varying', {
    name: 'responsavelacaoprospectiva',
    nullable: true,
    length: 50,
  })
  responsavelacaoprospectiva: string | null;

  @Column('character varying', {
    name: 'resumoexecutivo',
    nullable: true,
    length: 3000,
  })
  resumoexecutivo: string | null;

  @Column('character varying', {
    name: 'setorindustrial',
    nullable: true,
    length: 500,
  })
  setorindustrial: string | null;

  @Column('double precision', {
    name: 'vlreconomicodr',
    nullable: true,
    precision: 53,
  })
  vlreconomicodr: number | null;

  @Column('double precision', {
    name: 'vlrfinanceirodr',
    nullable: true,
    precision: 53,
  })
  vlrfinanceirodr: number | null;

  @Column('integer', { name: 'idatendimentostatussi', nullable: true })
  idatendimentostatussi: number | null;

  @Column('character varying', {
    name: 'tipobpipea',
    nullable: true,
    length: 15,
  })
  tipobpipea: string | null;

  @Column('timestamp without time zone', {
    name: 'dataarquivamento',
    nullable: true,
  })
  dataarquivamento: Date | null;

  @Column('character varying', {
    name: 'comentario',
    nullable: true,
    length: 500,
  })
  comentario: string | null;

  @Column('character varying', { name: 'escopo', nullable: true, length: 3000 })
  escopo: string | null;

  @Column('character varying', {
    name: 'numeroprojetosgf',
    nullable: true,
    length: 255,
  })
  numeroprojetosgf: string | null;

  @Column('integer', { name: 'trlfinal', nullable: true })
  trlfinal: number | null;

  @Column('integer', { name: 'trlinicial', nullable: true })
  trlinicial: number | null;

  @Column('character varying', { name: 'origem', nullable: true, length: 255 })
  origem: string | null;

  @Column('character varying', {
    name: 'codigoatendimentodr',
    nullable: true,
    length: 500,
  })
  codigoatendimentodr: string | null;

  @Column('bigint', { name: 'codigoatendimentosi', nullable: true })
  codigoatendimentosi: string | null;

  @OneToMany(() => Anexoatendimentoreferencial, (anexoatendimentoreferencial) => anexoatendimentoreferencial.idatendimento2)
  anexoatendimentoreferencials: Anexoatendimentoreferencial[];

  @OneToMany(() => Anexoindicadorprodutividade, (anexoindicadorprodutividade) => anexoindicadorprodutividade.idatendimento2)
  anexoindicadorprodutividades: Anexoindicadorprodutividade[];

  @OneToMany(() => Areapesquisa, (areapesquisa) => areapesquisa.idatendimento2)
  areapesquisas: Areapesquisa[];

  @ManyToOne(() => AtendimentoSubetapa, (atendimentoSubetapa) => atendimentoSubetapa.atendimentos)
  @JoinColumn([{ name: 'id_atendimento_subetapa', referencedColumnName: 'id' }])
  idAtendimentoSubetapa: AtendimentoSubetapa;

  @ManyToOne(() => Apl, (apl) => apl.atendimentos)
  @JoinColumn([{ name: 'idapl', referencedColumnName: 'id' }])
  idapl: Apl;

  @ManyToOne(() => Atendimentostatus, (atendimentostatus) => atendimentostatus.atendimentos)
  @JoinColumn([{ name: 'idatendimentostatus', referencedColumnName: 'id' }])
  idatendimentostatus2: Atendimentostatus;

  @ManyToOne(() => Cliente, (cliente) => cliente.atendimentos)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.atendimentos)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.atendimentos)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;

  @ManyToOne(() => Unidade, (unidade) => unidade.atendimentos)
  @JoinColumn([{ name: 'idregional', referencedColumnName: 'id' }])
  idregional: Unidade;

  @ManyToOne(() => Solicitacaostatus, (solicitacaostatus) => solicitacaostatus.atendimentos)
  @JoinColumn([{ name: 'idsolicitacaostatus', referencedColumnName: 'id' }])
  idsolicitacaostatus: Solicitacaostatus;

  @ManyToOne(() => Unidade, (unidade) => unidade.atendimentos2)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;

  @ManyToMany(() => Cliente, (cliente) => cliente.atendimentos2)
  @JoinTable({
    name: 'atendimento_clientes',
    joinColumns: [{ name: 'id_atendimento', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'id_cliente', referencedColumnName: 'id' }],
    schema: 'public',
  })
  clientes: Cliente[];

  @ManyToMany(() => Cliente, (cliente) => cliente.atendimentos3)
  @JoinTable({
    name: 'atendimento_empresaatendida',
    joinColumns: [{ name: 'id_atendimento', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'id_cliente', referencedColumnName: 'id' }],
    schema: 'public',
  })
  clientes2: Cliente[];

  @OneToMany(() => AtendimentoPdi, (atendimentoPdi) => atendimentoPdi.idAtendimento2)
  atendimentoPdis: AtendimentoPdi[];

  @OneToMany(() => Atendimentofase, (atendimentofase) => atendimentofase.idatendimento2)
  atendimentofases: Atendimentofase[];

  @OneToMany(() => Atendimentojustificativa, (atendimentojustificativa) => atendimentojustificativa.idatendimento2)
  atendimentojustificativas: Atendimentojustificativa[];

  @OneToOne(() => Atendimentopesquisa, (atendimentopesquisa) => atendimentopesquisa.atendimento)
  atendimentopesquisa: Atendimentopesquisa;

  @OneToMany(() => Atendimentoproducaoapropriada, (atendimentoproducaoapropriada) => atendimentoproducaoapropriada.idatendimento)
  atendimentoproducaoapropriadas: Atendimentoproducaoapropriada[];

  @OneToMany(() => Atendimentorede, (atendimentorede) => atendimentorede.idatendimentoexecutor2)
  atendimentoredes: Atendimentorede[];

  @OneToMany(() => Atendimentorede, (atendimentorede) => atendimentorede.idatendimentoparceiro2)
  atendimentoredes2: Atendimentorede[];

  @OneToMany(() => Atendimentoscriticas, (atendimentoscriticas) => atendimentoscriticas.idatendimento2)
  atendimentoscriticas: Atendimentoscriticas[];

  @OneToMany(() => Atendimentosi, (atendimentosi) => atendimentosi.idatendimento2)
  atendimentosis: Atendimentosi[];

  @OneToOne(() => Atendimentoturma, (atendimentoturma) => atendimentoturma.idatendimento2)
  atendimentoturma: Atendimentoturma;

  @OneToMany(() => Atendimentoturmadigital, (atendimentoturmadigital) => atendimentoturmadigital.idatendimento2)
  atendimentoturmadigitals: Atendimentoturmadigital[];

  @OneToMany(() => Contrato, (contrato) => contrato.idatendimento2)
  contratoes: Contrato[];

  @OneToMany(() => Entrega, (entrega) => entrega.idatendimento2)
  entregas: Entrega[];

  @OneToMany(() => Enviofaturamentoatendimento, (enviofaturamentoatendimento) => enviofaturamentoatendimento.idatendimento2)
  enviofaturamentoatendimentos: Enviofaturamentoatendimento[];

  @OneToMany(() => Fatoproducaoapropriada, (fatoproducaoapropriada) => fatoproducaoapropriada.idatendimento2)
  fatoproducaoapropriadas: Fatoproducaoapropriada[];

  @OneToMany(() => Fatoproducaoapropriadametrologia, (fatoproducaoapropriadametrologia) => fatoproducaoapropriadametrologia.idatendimento2)
  fatoproducaoapropriadametrologias: Fatoproducaoapropriadametrologia[];

  @OneToMany(() => Fatoreceitaapropriada, (fatoreceitaapropriada) => fatoreceitaapropriada.idatendimento2)
  fatoreceitaapropriadas: Fatoreceitaapropriada[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idatendimento2)
  fatoreceitacompetencias: Fatoreceitacompetencia[];

  @OneToMany(() => Historicotrocastatusdndr, (historicotrocastatusdndr) => historicotrocastatusdndr.idatendimento2)
  historicotrocastatusdndrs: Historicotrocastatusdndr[];

  @OneToMany(() => Indicadoratendimentoreferencial, (indicadoratendimentoreferencial) => indicadoratendimentoreferencial.idatendimento2)
  indicadoratendimentoreferencials: Indicadoratendimentoreferencial[];

  @OneToMany(() => Indicadores, (indicadores) => indicadores.idatendimento2)
  indicadores: Indicadores[];

  @OneToMany(() => Indicadores, (indicadores) => indicadores.idatendimento3)
  indicadores2: Indicadores[];

  @OneToMany(() => Ordemfaturamento, (ordemfaturamento) => ordemfaturamento.idatendimento2)
  ordemfaturamentos: Ordemfaturamento[];

  @OneToMany(() => Pesquisasatisfacao, (pesquisasatisfacao) => pesquisasatisfacao.idatendimento2)
  pesquisasatisfacaos: Pesquisasatisfacao[];

  @OneToMany(() => Previsaoapropriacaoproducao, (previsaoapropriacaoproducao) => previsaoapropriacaoproducao.idatendimento)
  previsaoapropriacaoproducaos: Previsaoapropriacaoproducao[];

  @OneToMany(() => Previsaoproducao, (previsaoproducao) => previsaoproducao.idatendimento)
  previsaoproducaos: Previsaoproducao[];

  @OneToMany(() => Previsaoproducaocompartilhada, (previsaoproducaocompartilhada) => previsaoproducaocompartilhada.idatendimento2)
  previsaoproducaocompartilhadas: Previsaoproducaocompartilhada[];

  @OneToMany(() => Previsaoproducaoemrede, (previsaoproducaoemrede) => previsaoproducaoemrede.idatendimento2)
  previsaoproducaoemredes: Previsaoproducaoemrede[];

  @OneToMany(() => Previsaoreceita, (previsaoreceita) => previsaoreceita.idatendimento2)
  previsaoreceitas: Previsaoreceita[];

  @OneToMany(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.idatendimento2)
  producaoapropriadas: Producaoapropriada[];

  @OneToMany(() => Propostaatendimento, (propostaatendimento) => propostaatendimento.idatendimento)
  propostaatendimentos: Propostaatendimento[];

  @OneToMany(() => Receitaapropriada, (receitaapropriada) => receitaapropriada.idatendimento2)
  receitaapropriadas: Receitaapropriada[];

  @OneToMany(() => Receitafaturamento, (receitafaturamento) => receitafaturamento.idatendimento2)
  receitafaturamentos: Receitafaturamento[];

  @OneToMany(() => Receitafaturamentobackup, (receitafaturamentobackup) => receitafaturamentobackup.idatendimento2)
  receitafaturamentobackups: Receitafaturamentobackup[];

  @OneToMany(() => Relatoriofinal, (relatoriofinal) => relatoriofinal.idatendimento2)
  relatoriofinals: Relatoriofinal[];

  @OneToMany(() => Termoaceite, (termoaceite) => termoaceite.idatendimento2)
  termoaceites: Termoaceite[];
}