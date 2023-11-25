import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Usuario } from '@modules/usuario/entities/usuario.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Arquivocarga } from './Arquivocarga';
import { Arquivounigestcsv } from './Arquivounigestcsv';
import { Atendimentorede } from './Atendimentorede';
import { Atendimentosi } from './Atendimentosi';
import { Cliente } from './Cliente';
import { Clientebackup } from './Clientebackup';
import { Cluster } from './Cluster';
import { Clustermentoriadigital } from './Clustermentoriadigital';
import { Colaboradorunidade } from './Colaboradorunidade';
import { Controlesequencia } from './Controlesequencia';
import { Controleusuarios } from './Controleusuarios';
import { Dashboardisi } from './Dashboardisi';
import { Despesa } from './Despesa';
import { Especialidadeunidade } from './Especialidadeunidade';
import { Evento } from './Evento';
import { Fatoatendimento } from './Fatoatendimento';
import { Fatodespesa } from './Fatodespesa';
import { Fatofontepagadoraatendimentobp } from './Fatofontepagadoraatendimentobp';
import { Fatofontepagadoraatendimentoia } from './Fatofontepagadoraatendimentoia';
import { Fatofontepagadoraatendimentoie } from './Fatofontepagadoraatendimentoie';
import { Fatofontepagadoraatendimentoipea } from './Fatofontepagadoraatendimentoipea';
import { Fatoproducaoapropriada } from './Fatoproducaoapropriada';
import { Fatoproducaoapropriadametrologia } from './Fatoproducaoapropriadametrologia';
import { Fatoreceitaapropriada } from './Fatoreceitaapropriada';
import { Fatoreceitacompetencia } from './Fatoreceitacompetencia';
import { Fatoresultado } from './Fatoresultado';
import { Fatoresultadocompetencia } from './Fatoresultadocompetencia';
import { Fatosolicitacaoatendimentobp } from './Fatosolicitacaoatendimentobp';
import { Fatosolicitacaoatendimentoia } from './Fatosolicitacaoatendimentoia';
import { Fatosolicitacaoatendimentoie } from './Fatosolicitacaoatendimentoie';
import { Fatosolicitacaoatendimentoipea } from './Fatosolicitacaoatendimentoipea';
import { Fatostatusatendimento } from './Fatostatusatendimento';
import { Fatostatusatendimentobp } from './Fatostatusatendimentobp';
import { Fatostatusatendimentohistoricobp } from './Fatostatusatendimentohistoricobp';
import { Fatostatusatendimentohistoricoia } from './Fatostatusatendimentohistoricoia';
import { Fatostatusatendimentohistoricoie } from './Fatostatusatendimentohistoricoie';
import { Fatostatusatendimentohistoricoipea } from './Fatostatusatendimentohistoricoipea';
import { Fatostatusatendimentoia } from './Fatostatusatendimentoia';
import { Fatostatusatendimentoie } from './Fatostatusatendimentoie';
import { Fatostatusatendimentoipea } from './Fatostatusatendimentoipea';
import { Grupotecnologicounidade } from './Grupotecnologicounidade';
import { Grupounidade } from './Grupounidade';
import { Grupounidadementoriadigital } from './Grupounidadementoriadigital';
import { Metafinanceira } from './Metafinanceira';
import { Metaregional } from './Metaregional';
import { Metaregionaldigital } from './Metaregionaldigital';
import { Metaregionalie } from './Metaregionalie';
import { Metaregionalipea } from './Metaregionalipea';
import { Metaregionallean } from './Metaregionallean';
import { Municipio } from './Municipio';
import { Parametrounidade } from './Parametrounidade';
import { Perfilusuario } from './Perfilusuario';
import { Previsaoapropriacaoproducao } from './Previsaoapropriacaoproducao';
import { Previsaoproducao } from './Previsaoproducao';
import { Previsaoproducaocompartilhada } from './Previsaoproducaocompartilhada';
import { Previsaoproducaoemrede } from './Previsaoproducaoemrede';
import { Producao } from './Producao';
import { Producaoapropriada } from './Producaoapropriada';
import { Produtoregional } from './Produtoregional';
import { Proposta } from './Proposta';
import { Publicacao } from './Publicacao';
import { Rateioreceitaapropriada } from './Rateioreceitaapropriada';
import { Rateioreceitafaturamento } from './Rateioreceitafaturamento';
import { Receita } from './Receita';
import { Relatoriodn } from './Relatoriodn';
import { Tipounidade } from './Tipounidade';
import { Treinamento } from './Treinamento';
import { Visita } from './Visita';

@Index('unidadebuscalivre', ['buscalivre'], {})
@Index('iunidadeu1', ['codigooba'], { unique: true })
@Index('iunidade01', ['codigooba'], {})
@Index('unidade_pkey', ['id'], { unique: true })
@Index('iunidadefkcliente', ['idcliente'], {})
@Index('iunidadefkespecialidadeunidade', ['idespecialidadeunidade'], {})
@Index('iunidadefkmunicipio', ['idmunicipio'], {})
@Index('iunidadefktipounidade', ['idtipounidade'], {})
@Index('iunidadefkunidadepai', ['idunidadepai'], {})
@Entity('unidade', { schema: 'public' })
export class Unidade {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'abreviacao',
    nullable: true,
    length: 255,
  })
  abreviacao: string | null;

  @Column('character varying', { name: 'codigo', nullable: true, length: 255 })
  codigo: string | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('integer', { name: 'idespecialidadeunidade', nullable: true })
  idespecialidadeunidade: number | null;

  @Column('integer', { name: 'idmunicipio', nullable: true })
  idmunicipio: number | null;

  @Column('integer', { name: 'idtipounidade', nullable: true })
  idtipounidade: number | null;

  @Column('integer', { name: 'idunidadepai', nullable: true })
  idunidadepai: number | null;

  @Column('tsvector', { name: 'buscalivre', nullable: true })
  buscalivre: string | null;

  @Column('character varying', {
    name: 'codigooba',
    nullable: true,
    length: 45,
  })
  codigooba: string | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'cnpj', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('character varying', {
    name: 'perfilusosistema',
    nullable: true,
    length: 10,
  })
  perfilusosistema: string | null;

  @OneToMany(() => Arquivocarga, (arquivocarga) => arquivocarga.idunidade2)
  arquivocargas: Arquivocarga[];

  @OneToMany(() => Arquivounigestcsv, (arquivounigestcsv) => arquivounigestcsv.idunidade2)
  arquivounigestcsvs: Arquivounigestcsv[];

  @OneToMany(() => Atendimento, (atendimento) => atendimento.idregional)
  atendimentos: Atendimento[];

  @OneToMany(() => Atendimento, (atendimento) => atendimento.idunidade2)
  atendimentos2: Atendimento[];

  @OneToMany(() => Atendimentorede, (atendimentorede) => atendimentorede.idunidadeparceira2)
  atendimentoredes: Atendimentorede[];

  @OneToMany(() => Atendimentosi, (atendimentosi) => atendimentosi.idunidade2)
  atendimentosis: Atendimentosi[];

  @OneToMany(() => Cliente, (cliente) => cliente.idunidade)
  clientes: Cliente[];

  @OneToMany(() => Clientebackup, (clientebackup) => clientebackup.idunidade2)
  clientebackups: Clientebackup[];

  @OneToMany(() => Cluster, (cluster) => cluster.idunidade2)
  clusters: Cluster[];

  @OneToMany(() => Clustermentoriadigital, (clustermentoriadigital) => clustermentoriadigital.idunidade2)
  clustermentoriadigitals: Clustermentoriadigital[];

  @OneToMany(() => Colaboradorunidade, (colaboradorunidade) => colaboradorunidade.idunidade2)
  colaboradorunidades: Colaboradorunidade[];

  @OneToMany(() => Controlesequencia, (controlesequencia) => controlesequencia.idunidade2)
  controlesequencias: Controlesequencia[];

  @OneToMany(() => Controleusuarios, (controleusuarios) => controleusuarios.idunidade2)
  controleusuarios: Controleusuarios[];

  @OneToMany(() => Dashboardisi, (dashboardisi) => dashboardisi.idunidade2)
  dashboardisis: Dashboardisi[];

  @OneToMany(() => Despesa, (despesa) => despesa.idregional2)
  despesas: Despesa[];

  @OneToMany(() => Despesa, (despesa) => despesa.idunidade2)
  despesas2: Despesa[];

  @OneToMany(() => Evento, (evento) => evento.idunidade2)
  eventos: Evento[];

  @OneToMany(() => Fatoatendimento, (fatoatendimento) => fatoatendimento.idunidadenacional2)
  fatoatendimentos: Fatoatendimento[];

  @OneToMany(() => Fatoatendimento, (fatoatendimento) => fatoatendimento.idunidadeoperacional2)
  fatoatendimentos2: Fatoatendimento[];

  @OneToMany(() => Fatoatendimento, (fatoatendimento) => fatoatendimento.idunidaderegional2)
  fatoatendimentos3: Fatoatendimento[];

  @OneToMany(() => Fatodespesa, (fatodespesa) => fatodespesa.idunidadenacional2)
  fatodespesas: Fatodespesa[];

  @OneToMany(() => Fatodespesa, (fatodespesa) => fatodespesa.idunidadeoperacional2)
  fatodespesas2: Fatodespesa[];

  @OneToMany(() => Fatodespesa, (fatodespesa) => fatodespesa.idunidaderegional2)
  fatodespesas3: Fatodespesa[];

  @OneToMany(() => Fatofontepagadoraatendimentobp, (fatofontepagadoraatendimentobp) => fatofontepagadoraatendimentobp.idunidadenacional2)
  fatofontepagadoraatendimentobps: Fatofontepagadoraatendimentobp[];

  @OneToMany(() => Fatofontepagadoraatendimentobp, (fatofontepagadoraatendimentobp) => fatofontepagadoraatendimentobp.idunidadeoperacional2)
  fatofontepagadoraatendimentobps2: Fatofontepagadoraatendimentobp[];

  @OneToMany(() => Fatofontepagadoraatendimentobp, (fatofontepagadoraatendimentobp) => fatofontepagadoraatendimentobp.idunidaderegional2)
  fatofontepagadoraatendimentobps3: Fatofontepagadoraatendimentobp[];

  @OneToMany(() => Fatofontepagadoraatendimentoia, (fatofontepagadoraatendimentoia) => fatofontepagadoraatendimentoia.idunidadenacional2)
  fatofontepagadoraatendimentoias: Fatofontepagadoraatendimentoia[];

  @OneToMany(() => Fatofontepagadoraatendimentoia, (fatofontepagadoraatendimentoia) => fatofontepagadoraatendimentoia.idunidadeoperacional2)
  fatofontepagadoraatendimentoias2: Fatofontepagadoraatendimentoia[];

  @OneToMany(() => Fatofontepagadoraatendimentoia, (fatofontepagadoraatendimentoia) => fatofontepagadoraatendimentoia.idunidaderegional2)
  fatofontepagadoraatendimentoias3: Fatofontepagadoraatendimentoia[];

  @OneToMany(() => Fatofontepagadoraatendimentoie, (fatofontepagadoraatendimentoie) => fatofontepagadoraatendimentoie.idunidadenacional)
  fatofontepagadoraatendimentoies: Fatofontepagadoraatendimentoie[];

  @OneToMany(() => Fatofontepagadoraatendimentoie, (fatofontepagadoraatendimentoie) => fatofontepagadoraatendimentoie.idunidadeoperacional)
  fatofontepagadoraatendimentoies2: Fatofontepagadoraatendimentoie[];

  @OneToMany(() => Fatofontepagadoraatendimentoie, (fatofontepagadoraatendimentoie) => fatofontepagadoraatendimentoie.idunidaderegional)
  fatofontepagadoraatendimentoies3: Fatofontepagadoraatendimentoie[];

  @OneToMany(() => Fatofontepagadoraatendimentoipea, (fatofontepagadoraatendimentoipea) => fatofontepagadoraatendimentoipea.idunidadenacional2)
  fatofontepagadoraatendimentoipeas: Fatofontepagadoraatendimentoipea[];

  @OneToMany(() => Fatofontepagadoraatendimentoipea, (fatofontepagadoraatendimentoipea) => fatofontepagadoraatendimentoipea.idunidadeoperacional2)
  fatofontepagadoraatendimentoipeas2: Fatofontepagadoraatendimentoipea[];

  @OneToMany(() => Fatofontepagadoraatendimentoipea, (fatofontepagadoraatendimentoipea) => fatofontepagadoraatendimentoipea.idunidaderegional2)
  fatofontepagadoraatendimentoipeas3: Fatofontepagadoraatendimentoipea[];

  @OneToMany(() => Fatoproducaoapropriada, (fatoproducaoapropriada) => fatoproducaoapropriada.idunidadenacional2)
  fatoproducaoapropriadas: Fatoproducaoapropriada[];

  @OneToMany(() => Fatoproducaoapropriada, (fatoproducaoapropriada) => fatoproducaoapropriada.idunidadeoperacional2)
  fatoproducaoapropriadas2: Fatoproducaoapropriada[];

  @OneToMany(() => Fatoproducaoapropriada, (fatoproducaoapropriada) => fatoproducaoapropriada.idunidaderegional2)
  fatoproducaoapropriadas3: Fatoproducaoapropriada[];

  @OneToMany(() => Fatoproducaoapropriadametrologia, (fatoproducaoapropriadametrologia) => fatoproducaoapropriadametrologia.idunidadenacional2)
  fatoproducaoapropriadametrologias: Fatoproducaoapropriadametrologia[];

  @OneToMany(() => Fatoproducaoapropriadametrologia, (fatoproducaoapropriadametrologia) => fatoproducaoapropriadametrologia.idunidadeoperacional2)
  fatoproducaoapropriadametrologias2: Fatoproducaoapropriadametrologia[];

  @OneToMany(() => Fatoproducaoapropriadametrologia, (fatoproducaoapropriadametrologia) => fatoproducaoapropriadametrologia.idunidaderegional2)
  fatoproducaoapropriadametrologias3: Fatoproducaoapropriadametrologia[];

  @OneToMany(() => Fatoreceitaapropriada, (fatoreceitaapropriada) => fatoreceitaapropriada.idunidadenacional2)
  fatoreceitaapropriadas: Fatoreceitaapropriada[];

  @OneToMany(() => Fatoreceitaapropriada, (fatoreceitaapropriada) => fatoreceitaapropriada.idunidadeoperacional2)
  fatoreceitaapropriadas2: Fatoreceitaapropriada[];

  @OneToMany(() => Fatoreceitaapropriada, (fatoreceitaapropriada) => fatoreceitaapropriada.idunidaderegional2)
  fatoreceitaapropriadas3: Fatoreceitaapropriada[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idunidadenacional2)
  fatoreceitacompetencias: Fatoreceitacompetencia[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idunidadeoperacional2)
  fatoreceitacompetencias2: Fatoreceitacompetencia[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idunidaderegional2)
  fatoreceitacompetencias3: Fatoreceitacompetencia[];

  @OneToMany(() => Fatoresultado, (fatoresultado) => fatoresultado.idunidadenacional2)
  fatoresultados: Fatoresultado[];

  @OneToMany(() => Fatoresultado, (fatoresultado) => fatoresultado.idunidadeoperacional2)
  fatoresultados2: Fatoresultado[];

  @OneToMany(() => Fatoresultado, (fatoresultado) => fatoresultado.idunidaderegional2)
  fatoresultados3: Fatoresultado[];

  @OneToMany(() => Fatoresultadocompetencia, (fatoresultadocompetencia) => fatoresultadocompetencia.idunidadenacional2)
  fatoresultadocompetencias: Fatoresultadocompetencia[];

  @OneToMany(() => Fatoresultadocompetencia, (fatoresultadocompetencia) => fatoresultadocompetencia.idunidadeoperacional2)
  fatoresultadocompetencias2: Fatoresultadocompetencia[];

  @OneToMany(() => Fatoresultadocompetencia, (fatoresultadocompetencia) => fatoresultadocompetencia.idunidaderegional2)
  fatoresultadocompetencias3: Fatoresultadocompetencia[];

  @OneToMany(() => Fatosolicitacaoatendimentobp, (fatosolicitacaoatendimentobp) => fatosolicitacaoatendimentobp.idunidadenacional2)
  fatosolicitacaoatendimentobps: Fatosolicitacaoatendimentobp[];

  @OneToMany(() => Fatosolicitacaoatendimentobp, (fatosolicitacaoatendimentobp) => fatosolicitacaoatendimentobp.idunidadeoperacional2)
  fatosolicitacaoatendimentobps2: Fatosolicitacaoatendimentobp[];

  @OneToMany(() => Fatosolicitacaoatendimentobp, (fatosolicitacaoatendimentobp) => fatosolicitacaoatendimentobp.idunidaderegional2)
  fatosolicitacaoatendimentobps3: Fatosolicitacaoatendimentobp[];

  @OneToMany(() => Fatosolicitacaoatendimentoia, (fatosolicitacaoatendimentoia) => fatosolicitacaoatendimentoia.idunidadenacional2)
  fatosolicitacaoatendimentoias: Fatosolicitacaoatendimentoia[];

  @OneToMany(() => Fatosolicitacaoatendimentoia, (fatosolicitacaoatendimentoia) => fatosolicitacaoatendimentoia.idunidadeoperacional2)
  fatosolicitacaoatendimentoias2: Fatosolicitacaoatendimentoia[];

  @OneToMany(() => Fatosolicitacaoatendimentoia, (fatosolicitacaoatendimentoia) => fatosolicitacaoatendimentoia.idunidaderegional2)
  fatosolicitacaoatendimentoias3: Fatosolicitacaoatendimentoia[];

  @OneToMany(() => Fatosolicitacaoatendimentoie, (fatosolicitacaoatendimentoie) => fatosolicitacaoatendimentoie.idunidadenacional)
  fatosolicitacaoatendimentoies: Fatosolicitacaoatendimentoie[];

  @OneToMany(() => Fatosolicitacaoatendimentoie, (fatosolicitacaoatendimentoie) => fatosolicitacaoatendimentoie.idunidadeoperacional)
  fatosolicitacaoatendimentoies2: Fatosolicitacaoatendimentoie[];

  @OneToMany(() => Fatosolicitacaoatendimentoie, (fatosolicitacaoatendimentoie) => fatosolicitacaoatendimentoie.idunidaderegional)
  fatosolicitacaoatendimentoies3: Fatosolicitacaoatendimentoie[];

  @OneToMany(() => Fatosolicitacaoatendimentoipea, (fatosolicitacaoatendimentoipea) => fatosolicitacaoatendimentoipea.idunidadenacional2)
  fatosolicitacaoatendimentoipeas: Fatosolicitacaoatendimentoipea[];

  @OneToMany(() => Fatosolicitacaoatendimentoipea, (fatosolicitacaoatendimentoipea) => fatosolicitacaoatendimentoipea.idunidadeoperacional2)
  fatosolicitacaoatendimentoipeas2: Fatosolicitacaoatendimentoipea[];

  @OneToMany(() => Fatosolicitacaoatendimentoipea, (fatosolicitacaoatendimentoipea) => fatosolicitacaoatendimentoipea.idunidaderegional2)
  fatosolicitacaoatendimentoipeas3: Fatosolicitacaoatendimentoipea[];

  @OneToMany(() => Fatostatusatendimento, (fatostatusatendimento) => fatostatusatendimento.idunidadenacional2)
  fatostatusatendimentos: Fatostatusatendimento[];

  @OneToMany(() => Fatostatusatendimento, (fatostatusatendimento) => fatostatusatendimento.idunidadeoperacional2)
  fatostatusatendimentos2: Fatostatusatendimento[];

  @OneToMany(() => Fatostatusatendimento, (fatostatusatendimento) => fatostatusatendimento.idunidaderegional2)
  fatostatusatendimentos3: Fatostatusatendimento[];

  @OneToMany(() => Fatostatusatendimentobp, (fatostatusatendimentobp) => fatostatusatendimentobp.idunidadenacional2)
  fatostatusatendimentobps: Fatostatusatendimentobp[];

  @OneToMany(() => Fatostatusatendimentobp, (fatostatusatendimentobp) => fatostatusatendimentobp.idunidadeoperacional2)
  fatostatusatendimentobps2: Fatostatusatendimentobp[];

  @OneToMany(() => Fatostatusatendimentobp, (fatostatusatendimentobp) => fatostatusatendimentobp.idunidaderegional2)
  fatostatusatendimentobps3: Fatostatusatendimentobp[];

  @OneToMany(() => Fatostatusatendimentohistoricobp, (fatostatusatendimentohistoricobp) => fatostatusatendimentohistoricobp.idunidadenacional2)
  fatostatusatendimentohistoricobps: Fatostatusatendimentohistoricobp[];

  @OneToMany(() => Fatostatusatendimentohistoricobp, (fatostatusatendimentohistoricobp) => fatostatusatendimentohistoricobp.idunidadeoperacional2)
  fatostatusatendimentohistoricobps2: Fatostatusatendimentohistoricobp[];

  @OneToMany(() => Fatostatusatendimentohistoricobp, (fatostatusatendimentohistoricobp) => fatostatusatendimentohistoricobp.idunidaderegional2)
  fatostatusatendimentohistoricobps3: Fatostatusatendimentohistoricobp[];

  @OneToMany(() => Fatostatusatendimentohistoricoia, (fatostatusatendimentohistoricoia) => fatostatusatendimentohistoricoia.idunidadenacional2)
  fatostatusatendimentohistoricoias: Fatostatusatendimentohistoricoia[];

  @OneToMany(() => Fatostatusatendimentohistoricoia, (fatostatusatendimentohistoricoia) => fatostatusatendimentohistoricoia.idunidadeoperacional2)
  fatostatusatendimentohistoricoias2: Fatostatusatendimentohistoricoia[];

  @OneToMany(() => Fatostatusatendimentohistoricoia, (fatostatusatendimentohistoricoia) => fatostatusatendimentohistoricoia.idunidaderegional2)
  fatostatusatendimentohistoricoias3: Fatostatusatendimentohistoricoia[];

  @OneToMany(() => Fatostatusatendimentohistoricoie, (fatostatusatendimentohistoricoie) => fatostatusatendimentohistoricoie.idunidadenacional)
  fatostatusatendimentohistoricoies: Fatostatusatendimentohistoricoie[];

  @OneToMany(() => Fatostatusatendimentohistoricoie, (fatostatusatendimentohistoricoie) => fatostatusatendimentohistoricoie.idunidadeoperacional)
  fatostatusatendimentohistoricoies2: Fatostatusatendimentohistoricoie[];

  @OneToMany(() => Fatostatusatendimentohistoricoie, (fatostatusatendimentohistoricoie) => fatostatusatendimentohistoricoie.idunidaderegional)
  fatostatusatendimentohistoricoies3: Fatostatusatendimentohistoricoie[];

  @OneToMany(() => Fatostatusatendimentohistoricoipea, (fatostatusatendimentohistoricoipea) => fatostatusatendimentohistoricoipea.idunidadenacional2)
  fatostatusatendimentohistoricoipeas: Fatostatusatendimentohistoricoipea[];

  @OneToMany(() => Fatostatusatendimentohistoricoipea, (fatostatusatendimentohistoricoipea) => fatostatusatendimentohistoricoipea.idunidadeoperacional2)
  fatostatusatendimentohistoricoipeas2: Fatostatusatendimentohistoricoipea[];

  @OneToMany(() => Fatostatusatendimentohistoricoipea, (fatostatusatendimentohistoricoipea) => fatostatusatendimentohistoricoipea.idunidaderegional2)
  fatostatusatendimentohistoricoipeas3: Fatostatusatendimentohistoricoipea[];

  @OneToMany(() => Fatostatusatendimentoia, (fatostatusatendimentoia) => fatostatusatendimentoia.idunidadenacional2)
  fatostatusatendimentoias: Fatostatusatendimentoia[];

  @OneToMany(() => Fatostatusatendimentoia, (fatostatusatendimentoia) => fatostatusatendimentoia.idunidadeoperacional2)
  fatostatusatendimentoias2: Fatostatusatendimentoia[];

  @OneToMany(() => Fatostatusatendimentoia, (fatostatusatendimentoia) => fatostatusatendimentoia.idunidaderegional2)
  fatostatusatendimentoias3: Fatostatusatendimentoia[];

  @OneToMany(() => Fatostatusatendimentoie, (fatostatusatendimentoie) => fatostatusatendimentoie.idunidadenacional)
  fatostatusatendimentoies: Fatostatusatendimentoie[];

  @OneToMany(() => Fatostatusatendimentoie, (fatostatusatendimentoie) => fatostatusatendimentoie.idunidadeoperacional)
  fatostatusatendimentoies2: Fatostatusatendimentoie[];

  @OneToMany(() => Fatostatusatendimentoie, (fatostatusatendimentoie) => fatostatusatendimentoie.idunidaderegional)
  fatostatusatendimentoies3: Fatostatusatendimentoie[];

  @OneToMany(() => Fatostatusatendimentoipea, (fatostatusatendimentoipea) => fatostatusatendimentoipea.idunidadenacional2)
  fatostatusatendimentoipeas: Fatostatusatendimentoipea[];

  @OneToMany(() => Fatostatusatendimentoipea, (fatostatusatendimentoipea) => fatostatusatendimentoipea.idunidadeoperacional2)
  fatostatusatendimentoipeas2: Fatostatusatendimentoipea[];

  @OneToMany(() => Fatostatusatendimentoipea, (fatostatusatendimentoipea) => fatostatusatendimentoipea.idunidaderegional2)
  fatostatusatendimentoipeas3: Fatostatusatendimentoipea[];

  @OneToMany(() => Grupotecnologicounidade, (grupotecnologicounidade) => grupotecnologicounidade.idunidade2)
  grupotecnologicounidades: Grupotecnologicounidade[];

  @OneToMany(() => Grupounidade, (grupounidade) => grupounidade.idunidade2)
  grupounidades: Grupounidade[];

  @OneToMany(() => Grupounidadementoriadigital, (grupounidadementoriadigital) => grupounidadementoriadigital.idunidade2)
  grupounidadementoriadigitals: Grupounidadementoriadigital[];

  @OneToMany(() => Metafinanceira, (metafinanceira) => metafinanceira.idregional)
  metafinanceiras: Metafinanceira[];

  @OneToMany(() => Metafinanceira, (metafinanceira) => metafinanceira.idunidade)
  metafinanceiras2: Metafinanceira[];

  @OneToMany(() => Metaregional, (metaregional) => metaregional.idunidade2)
  metaregionals: Metaregional[];

  @OneToMany(() => Metaregionaldigital, (metaregionaldigital) => metaregionaldigital.idunidade2)
  metaregionaldigitals: Metaregionaldigital[];

  @OneToMany(() => Metaregionalie, (metaregionalie) => metaregionalie.idunidade)
  metaregionalies: Metaregionalie[];

  @OneToMany(() => Metaregionalipea, (metaregionalipea) => metaregionalipea.idunidade2)
  metaregionalipeas: Metaregionalipea[];

  @OneToMany(() => Metaregionallean, (metaregionallean) => metaregionallean.idunidade2)
  metaregionalleans: Metaregionallean[];

  @OneToMany(() => Parametrounidade, (parametrounidade) => parametrounidade.idunidade2)
  parametrounidades: Parametrounidade[];

  @OneToMany(() => Perfilusuario, (perfilusuario) => perfilusuario.idunidade2)
  perfilusuarios: Perfilusuario[];

  @OneToMany(() => Previsaoapropriacaoproducao, (previsaoapropriacaoproducao) => previsaoapropriacaoproducao.idunidade)
  previsaoapropriacaoproducaos: Previsaoapropriacaoproducao[];

  @OneToMany(() => Previsaoproducao, (previsaoproducao) => previsaoproducao.idunidade)
  previsaoproducaos: Previsaoproducao[];

  @OneToMany(() => Previsaoproducaocompartilhada, (previsaoproducaocompartilhada) => previsaoproducaocompartilhada.idunidade2)
  previsaoproducaocompartilhadas: Previsaoproducaocompartilhada[];

  @OneToMany(() => Previsaoproducaoemrede, (previsaoproducaoemrede) => previsaoproducaoemrede.idunidade2)
  previsaoproducaoemredes: Previsaoproducaoemrede[];

  @OneToMany(() => Producao, (producao) => producao.idregional2)
  producaos: Producao[];

  @OneToMany(() => Producao, (producao) => producao.idunidade2)
  producaos2: Producao[];

  @OneToMany(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.idregional2)
  producaoapropriadas: Producaoapropriada[];

  @OneToMany(() => Produtoregional, (produtoregional) => produtoregional.idunidade2)
  produtoregionals: Produtoregional[];

  @OneToMany(() => Proposta, (proposta) => proposta.idregional)
  propostas: Proposta[];

  @OneToMany(() => Publicacao, (publicacao) => publicacao.idunidade2)
  publicacaos: Publicacao[];

  @OneToMany(() => Rateioreceitaapropriada, (rateioreceitaapropriada) => rateioreceitaapropriada.idunidade2)
  rateioreceitaapropriadas: Rateioreceitaapropriada[];

  @OneToMany(() => Rateioreceitafaturamento, (rateioreceitafaturamento) => rateioreceitafaturamento.idunidade2)
  rateioreceitafaturamentos: Rateioreceitafaturamento[];

  @OneToMany(() => Receita, (receita) => receita.idregional2)
  receitas: Receita[];

  @OneToMany(() => Receita, (receita) => receita.idunidade2)
  receitas2: Receita[];

  @OneToMany(() => Relatoriodn, (relatoriodn) => relatoriodn.idregional2)
  relatoriodns: Relatoriodn[];

  @OneToMany(() => Relatoriodn, (relatoriodn) => relatoriodn.idunidade2)
  relatoriodns2: Relatoriodn[];

  @OneToMany(() => Treinamento, (treinamento) => treinamento.idunidade2)
  treinamentos: Treinamento[];

  @ManyToOne(() => Cliente, (cliente) => cliente.unidades)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Especialidadeunidade, (especialidadeunidade) => especialidadeunidade.unidades)
  @JoinColumn([{ name: 'idespecialidadeunidade', referencedColumnName: 'id' }])
  idespecialidadeunidade2: Especialidadeunidade;

  @ManyToOne(() => Municipio, (municipio) => municipio.unidades)
  @JoinColumn([{ name: 'idmunicipio', referencedColumnName: 'id' }])
  idmunicipio2: Municipio;

  @ManyToOne(() => Tipounidade, (tipounidade) => tipounidade.unidades)
  @JoinColumn([{ name: 'idtipounidade', referencedColumnName: 'id' }])
  idtipounidade2: Tipounidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.unidades)
  @JoinColumn([{ name: 'idunidadepai', referencedColumnName: 'id' }])
  idunidadepai2: Unidade;

  @OneToMany(() => Unidade, (unidade) => unidade.idunidadepai2)
  unidades: Unidade[];

  @OneToMany(() => Usuario, (usuario) => usuario.idunidade2)
  usuarios: Usuario[];

  @OneToMany(() => Visita, (visita) => visita.idunidade2)
  visitas: Visita[];
}
