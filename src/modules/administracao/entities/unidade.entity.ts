import { Especialidadeunidade } from '@modules/administracao/entities/especialidadeunidade.entity';
import { Tipounidade } from '@modules/administracao/entities/tipounidade.entity';
import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Atendimentorede } from '@modules/atendimento/entities/atendimentorede.entity';
import { Controlesequencia } from '@modules/atendimento/entities/controlesequencia.entity';
import { Fatoatendimento } from '@modules/atendimento/entities/fatoatendimento.entity';
import { Fatofontepagadoraatendimentobp } from '@modules/atendimento/entities/fatofontepagadoraatendimentobp.entity';
import { Fatofontepagadoraatendimentoia } from '@modules/atendimento/entities/fatofontepagadoraatendimentoia.entity';
import { Fatofontepagadoraatendimentoie } from '@modules/atendimento/entities/fatofontepagadoraatendimentoie.entity';
import { Fatofontepagadoraatendimentoipea } from '@modules/atendimento/entities/fatofontepagadoraatendimentoipea.entity';
import { Fatosolicitacaoatendimentobp } from '@modules/atendimento/entities/fatosolicitacaoatendimentobp.entity';
import { Fatosolicitacaoatendimentoia } from '@modules/atendimento/entities/fatosolicitacaoatendimentoia.entity';
import { Fatosolicitacaoatendimentoie } from '@modules/atendimento/entities/fatosolicitacaoatendimentoie.entity';
import { Fatosolicitacaoatendimentoipea } from '@modules/atendimento/entities/fatosolicitacaoatendimentoipea.entity';
import { Fatostatusatendimento } from '@modules/atendimento/entities/fatostatusatendimento.entity';
import { Fatostatusatendimentobp } from '@modules/atendimento/entities/fatostatusatendimentobp.entity';
import { Fatostatusatendimentohistoricobp } from '@modules/atendimento/entities/fatostatusatendimentohistoricobp.entity';
import { Fatostatusatendimentohistoricoia } from '@modules/atendimento/entities/fatostatusatendimentohistoricoia.entity';
import { Fatostatusatendimentohistoricoie } from '@modules/atendimento/entities/fatostatusatendimentohistoricoie.entity';
import { Fatostatusatendimentohistoricoipea } from '@modules/atendimento/entities/fatostatusatendimentohistoricoipea.entity';
import { Fatostatusatendimentoia } from '@modules/atendimento/entities/fatostatusatendimentoia.entity';
import { Fatostatusatendimentoie } from '@modules/atendimento/entities/fatostatusatendimentoie.entity';
import { Fatostatusatendimentoipea } from '@modules/atendimento/entities/fatostatusatendimentoipea.entity';
import { Previsaoapropriacaoproducao } from '@modules/atendimento/entities/previsaoapropriacaoproducao.entity';
import { Previsaoproducao } from '@modules/atendimento/entities/previsaoproducao.entity';
import { Previsaoproducaocompartilhada } from '@modules/atendimento/entities/previsaoproducaocompartilhada.entity';
import { Previsaoproducaoemrede } from '@modules/atendimento/entities/previsaoproducaoemrede.entity';
import { Proposta } from '@modules/atendimento/entities/proposta.entity';
import { Publicacao } from '@modules/atendimento/entities/publicacao.entity';
import { Cluster } from '@modules/brasil-mais/entities/cluster.entity';
import { Clustermentoriadigital } from '@modules/brasil-mais/entities/clustermentoriadigital.entity';
import { Grupounidadementoriadigital } from '@modules/brasil-mais/entities/grupounidadementoriadigital.entity';
import { Metaregional } from '@modules/brasil-mais/entities/metaregional.entity';
import { Metaregionaldigital } from '@modules/brasil-mais/entities/metaregionaldigital.entity';
import { Metaregionalie } from '@modules/brasil-mais/entities/metaregionalie.entity';
import { Metaregionalipea } from '@modules/brasil-mais/entities/metaregionalipea.entity';
import { Metaregionallean } from '@modules/brasil-mais/entities/metaregionallean.entity';
import { Visita } from '@modules/brasil-mais/entities/visita.entity';
import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Despesa } from '@modules/common/entities/despesa.entity';
import { Evento } from '@modules/common/entities/evento.entity';
import { Fatodespesa } from '@modules/common/entities/fatodespesa.entity';
import { Grupotecnologicounidade } from '@modules/common/entities/grupotecnologicounidade.entity';
import { Relatoriodn } from '@modules/common/entities/relatoriodn.entity';
import { Dashboardisi } from '@modules/dashboard/entities/dashboardisi.entity';
import { Fatoresultado } from '@modules/metas/entities/fatoresultado.entity';
import { Fatoresultadocompetencia } from '@modules/metas/entities/fatoresultadocompetencia.entity';
import { Metafinanceira } from '@modules/metas/entities/metafinanceira.entity';
import { Produtoregional } from '@modules/portfolio/entities/produtoregional.entity';
import { Fatoproducaoapropriada } from '@modules/producao/entities/fatoproducaoapropriada.entity';
import { Fatoproducaoapropriadametrologia } from '@modules/producao/entities/fatoproducaoapropriadametrologia.entity';
import { Producao } from '@modules/producao/entities/producao.entity';
import { Producaoapropriada } from '@modules/producao/entities/producaoapropriada.entity';
import { Fatoreceitaapropriada } from '@modules/receita/entities/fatoreceitaapropriada.entity';
import { Fatoreceitacompetencia } from '@modules/receita/entities/fatoreceitacompetencia.entity';
import { Rateioreceitaapropriada } from '@modules/receita/entities/rateioreceitaapropriada.entity';
import { Rateioreceitafaturamento } from '@modules/receita/entities/rateioreceitafaturamento.entity';
import { Receita } from '@modules/receita/entities/receita.entity';
import { Arquivocarga } from '@modules/solucao-integradora/entities/arquivo-carga.entity';
import { Arquivounigestcsv } from '@modules/solucao-integradora/entities/arquivo-unigest-csv.entity';
import { Atendimentosi } from '@modules/solucao-integradora/entities/atendimento-si.entity';
import { Colaboradorunidade } from '@modules/usuario/entities/colaborador-unidade.entity';
import { Controleusuarios } from '@modules/usuario/entities/controle-usuario.entity';
import { Perfilusuario } from '@modules/usuario/entities/perfil-usuario.entity';
import { Treinamento } from '@modules/usuario/entities/treinamento.entity';
import { Usuario } from '@modules/usuario/entities/usuario.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grupounidade } from './grupounidade.entity';
import { Municipio } from './municipio.entity';
import { Parametrounidade } from './parametrounidade.entity';

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
