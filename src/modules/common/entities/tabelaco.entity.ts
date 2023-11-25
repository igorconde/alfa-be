import { Atendimentotabelaco } from '@modules/brasil-mais/entities/atendimentotabelaco.entity';
import { Responsavelescritorio } from '@modules/brasil-mais/entities/responsavelescritorio.entity';
import { Colaboradortabelaco } from '@modules/usuario/entities/colaborador-tabelaco.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pesquisadortabelaco } from './pesquisadortabelaco.entity';
import { Statustabelaco } from './statustabelaco.entity';

@Index('tabelaco_pkey', ['id'], { unique: true })
@Index('ix_tabelaco_fk_tabelaco_idstatustabelaco', ['idstatustabelaco'], {})
@Entity('tabelaco', { schema: 'public' })
export class Tabelaco {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'admsuportebolsista', nullable: true })
  admsuportebolsista: number | null;

  @Column('integer', { name: 'admsuporteefetivo', nullable: true })
  admsuporteefetivo: number | null;

  @Column('character varying', {
    name: 'aliancamanufaturaavancada',
    nullable: true,
    length: 50,
  })
  aliancamanufaturaavancada: string | null;

  @Column('character varying', {
    name: 'analisedemercado',
    nullable: true,
    length: 1000,
  })
  analisedemercado: string | null;

  @Column('character varying', { name: 'ano', nullable: true, length: 5 })
  ano: string | null;

  @Column('character varying', {
    name: 'areatransversal',
    nullable: true,
    length: 50,
  })
  areatransversal: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'cidade', nullable: true, length: 50 })
  cidade: string | null;

  @Column('character varying', {
    name: 'conceitoimplementacao',
    nullable: true,
    length: 255,
  })
  conceitoimplementacao: string | null;

  @Column('double precision', {
    name: 'cpimedio',
    nullable: true,
    precision: 53,
  })
  cpimedio: number | null;

  @Column('double precision', {
    name: 'custosoppdipesquisador',
    nullable: true,
    precision: 53,
  })
  custosoppdipesquisador: number | null;

  @Column('double precision', {
    name: 'custosoppdiplanejados',
    nullable: true,
    precision: 53,
  })
  custosoppdiplanejados: number | null;

  @Column('double precision', {
    name: 'custosoppdirealizados',
    nullable: true,
    precision: 53,
  })
  custosoppdirealizados: number | null;

  @Column('double precision', {
    name: 'custossticolab',
    nullable: true,
    precision: 53,
  })
  custossticolab: number | null;

  @Column('double precision', {
    name: 'custosstiplanejados',
    nullable: true,
    precision: 53,
  })
  custosstiplanejados: number | null;

  @Column('double precision', {
    name: 'custosstirealizados',
    nullable: true,
    precision: 53,
  })
  custosstirealizados: number | null;

  @Column('timestamp without time zone', {
    name: 'dataatualizacao',
    nullable: true,
  })
  dataatualizacao: Date | null;

  @Column('character varying', {
    name: 'dataassinaturabndes',
    nullable: true,
    length: 255,
  })
  dataassinaturabndes: string | null;

  @Column('character varying', {
    name: 'diretorregionaldr',
    nullable: true,
    length: 50,
  })
  diretorregionaldr: string | null;

  @Column('integer', { name: 'doutoresbolsistas', nullable: true })
  doutoresbolsistas: number | null;

  @Column('integer', { name: 'doutoresefetivos', nullable: true })
  doutoresefetivos: number | null;

  @Column('integer', { name: 'drid', nullable: true })
  drid: number | null;

  @Column('character varying', { name: 'druo', nullable: true, length: 50 })
  druo: string | null;

  @Column('character varying', { name: 'druoid', nullable: true, length: 20 })
  druoid: string | null;

  @Column('character varying', {
    name: 'emaildiretorunidade',
    nullable: true,
    length: 255,
  })
  emaildiretorunidade: string | null;

  @Column('character varying', {
    name: 'emailgernteinovacaodr',
    nullable: true,
    length: 255,
  })
  emailgernteinovacaodr: string | null;

  @Column('character varying', {
    name: 'emailpesquisadorchefe',
    nullable: true,
    length: 255,
  })
  emailpesquisadorchefe: string | null;

  @Column('character varying', {
    name: 'emailpontofocaldepartamentocompras',
    nullable: true,
    length: 255,
  })
  emailpontofocaldepartamentocompras: string | null;

  @Column('character varying', {
    name: 'emailpontofocaldepartamentofinanceiro',
    nullable: true,
    length: 255,
  })
  emailpontofocaldepartamentofinanceiro: string | null;

  @Column('character varying', {
    name: 'emailpontofocaldepartamentojuridico',
    nullable: true,
    length: 255,
  })
  emailpontofocaldepartamentojuridico: string | null;

  @Column('character varying', {
    name: 'emailpontofocaldepartamentorh',
    nullable: true,
    length: 255,
  })
  emailpontofocaldepartamentorh: string | null;

  @Column('character varying', {
    name: 'emailpontofocalparaunidadedr',
    nullable: true,
    length: 255,
  })
  emailpontofocalparaunidadedr: string | null;

  @Column('integer', { name: 'emgraduacaobolsista', nullable: true })
  emgraduacaobolsista: number | null;

  @Column('integer', { name: 'emgraduacaoestagiario', nullable: true })
  emgraduacaoestagiario: number | null;

  @Column('character varying', {
    name: 'endereco',
    nullable: true,
    length: 255,
  })
  endereco: string | null;

  @Column('character varying', { name: 'estado', nullable: true, length: 20 })
  estado: string | null;

  @Column('double precision', {
    name: 'execucaofinanceiraplanejadabndes',
    nullable: true,
    precision: 53,
  })
  execucaofinanceiraplanejadabndes: number | null;

  @Column('double precision', {
    name: 'execucaofinanceiraplanejadadr',
    nullable: true,
    precision: 53,
  })
  execucaofinanceiraplanejadadr: number | null;

  @Column('double precision', {
    name: 'execucaofinanceirarealizadabndes',
    nullable: true,
    precision: 53,
  })
  execucaofinanceirarealizadabndes: number | null;

  @Column('double precision', {
    name: 'execucaofinanceirarealizadadr',
    nullable: true,
    precision: 53,
  })
  execucaofinanceirarealizadadr: number | null;

  @Column('integer', { name: 'graduadosbolsistas', nullable: true })
  graduadosbolsistas: number | null;

  @Column('integer', { name: 'graduadosefetivos', nullable: true })
  graduadosefetivos: number | null;

  @Column('character varying', {
    name: 'grupotecnologico',
    nullable: true,
    length: 50,
  })
  grupotecnologico: string | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('character varying', {
    name: 'inauguracaounidade',
    nullable: true,
    length: 255,
  })
  inauguracaounidade: string | null;

  @Column('double precision', {
    name: 'investimentosgeraispn',
    nullable: true,
    precision: 53,
  })
  investimentosgeraispn: number | null;

  @Column('integer', { name: 'mestresbolsistas', nullable: true })
  mestresbolsistas: number | null;

  @Column('integer', { name: 'mestresefetivos', nullable: true })
  mestresefetivos: number | null;

  @Column('character varying', {
    name: 'nivelmaturidade',
    nullable: true,
    length: 15,
  })
  nivelmaturidade: string | null;

  @Column('character varying', {
    name: 'nomediretorunidade',
    nullable: true,
    length: 80,
  })
  nomediretorunidade: string | null;

  @Column('character varying', {
    name: 'nomegernteinovacaodr',
    nullable: true,
    length: 80,
  })
  nomegernteinovacaodr: string | null;

  @Column('character varying', {
    name: 'nomepesquisadorchefe',
    nullable: true,
    length: 80,
  })
  nomepesquisadorchefe: string | null;

  @Column('character varying', {
    name: 'nomepontofocaldepartamentocompras',
    nullable: true,
    length: 80,
  })
  nomepontofocaldepartamentocompras: string | null;

  @Column('character varying', {
    name: 'nomepontofocaldepartamentocomunicacao',
    nullable: true,
    length: 80,
  })
  nomepontofocaldepartamentocomunicacao: string | null;

  @Column('character varying', {
    name: 'nomepontofocaldepartamentofinanceiro',
    nullable: true,
    length: 80,
  })
  nomepontofocaldepartamentofinanceiro: string | null;

  @Column('character varying', {
    name: 'nomepontofocaldepartamentojuridico',
    nullable: true,
    length: 80,
  })
  nomepontofocaldepartamentojuridico: string | null;

  @Column('character varying', {
    name: 'nomepontofocaldepartamentorh',
    nullable: true,
    length: 80,
  })
  nomepontofocaldepartamentorh: string | null;

  @Column('character varying', {
    name: 'nomepontofocalparaunidadedr',
    nullable: true,
    length: 80,
  })
  nomepontofocalparaunidadedr: string | null;

  @Column('integer', { name: 'numclientesretidos', nullable: true })
  numclientesretidos: number | null;

  @Column('character varying', {
    name: 'numeroaditivobndes',
    nullable: true,
    length: 50,
  })
  numeroaditivobndes: string | null;

  @Column('integer', { name: 'numeventosatendidos', nullable: true })
  numeventosatendidos: number | null;

  @Column('integer', { name: 'numeventosorganizados', nullable: true })
  numeventosorganizados: number | null;

  @Column('integer', { name: 'numpesqtransfindustria', nullable: true })
  numpesqtransfindustria: number | null;

  @Column('integer', {
    name: 'numpublicacoescientificasunidade',
    nullable: true,
  })
  numpublicacoescientificasunidade: number | null;

  @Column('integer', {
    name: 'numpublicacoescomerciaisunidade',
    nullable: true,
  })
  numpublicacoescomerciaisunidade: number | null;

  @Column('integer', { name: 'numterinamentopesquisadores', nullable: true })
  numterinamentopesquisadores: number | null;

  @Column('double precision', {
    name: 'perexecucaofinanceirabndes',
    nullable: true,
    precision: 53,
  })
  perexecucaofinanceirabndes: number | null;

  @Column('double precision', {
    name: 'perexecucaofinanceiradr',
    nullable: true,
    precision: 53,
  })
  perexecucaofinanceiradr: number | null;

  @Column('double precision', {
    name: 'perinvestimentosgeraisrealizados',
    nullable: true,
    precision: 53,
  })
  perinvestimentosgeraisrealizados: number | null;

  @Column('character varying', {
    name: 'planonegociosingles',
    nullable: true,
    length: 255,
  })
  planonegociosingles: string | null;

  @Column('character varying', {
    name: 'planonegociosportugues',
    nullable: true,
    length: 1000,
  })
  planonegociosportugues: string | null;

  @Column('character varying', {
    name: 'pontofocaldepartamentocomunicacao',
    nullable: true,
    length: 255,
  })
  pontofocaldepartamentocomunicacao: string | null;

  @Column('integer', { name: 'propostasaprovadas', nullable: true })
  propostasaprovadas: number | null;

  @Column('integer', { name: 'propostasenviadas', nullable: true })
  propostasenviadas: number | null;

  @Column('integer', { name: 'propostasrequisitadas', nullable: true })
  propostasrequisitadas: number | null;

  @Column('double precision', {
    name: 'receitapdicaptadapesquisador',
    nullable: true,
    precision: 53,
  })
  receitapdicaptadapesquisador: number | null;

  @Column('double precision', {
    name: 'receitaspdiplanejada',
    nullable: true,
    precision: 53,
  })
  receitaspdiplanejada: number | null;

  @Column('double precision', {
    name: 'receitaspdirealizada',
    nullable: true,
    precision: 53,
  })
  receitaspdirealizada: number | null;

  @Column('double precision', {
    name: 'receitasticaptadacolab',
    nullable: true,
    precision: 53,
  })
  receitasticaptadacolab: number | null;

  @Column('double precision', {
    name: 'receitastiplanejada',
    nullable: true,
    precision: 53,
  })
  receitastiplanejada: number | null;

  @Column('double precision', {
    name: 'receitastirealizada',
    nullable: true,
    precision: 53,
  })
  receitastirealizada: number | null;

  @Column('double precision', {
    name: 'recursosempenhadosbndes',
    nullable: true,
    precision: 53,
  })
  recursosempenhadosbndes: number | null;

  @Column('double precision', {
    name: 'recursosempenhadosdr',
    nullable: true,
    precision: 53,
  })
  recursosempenhadosdr: number | null;

  @Column('double precision', {
    name: 'recursosrequisitadosbndes',
    nullable: true,
    precision: 53,
  })
  recursosrequisitadosbndes: number | null;

  @Column('integer', { name: 'referencia', nullable: true })
  referencia: number | null;

  @Column('character varying', {
    name: 'reuniaoplanejamentofinanceiro',
    nullable: true,
    length: 255,
  })
  reuniaoplanejamentofinanceiro: string | null;

  @Column('character varying', {
    name: 'reuniaoplanejamentooperacional',
    nullable: true,
    length: 255,
  })
  reuniaoplanejamentooperacional: string | null;

  @Column('character varying', {
    name: 'revisaomodelodenegocios',
    nullable: true,
    length: 1000,
  })
  revisaomodelodenegocios: string | null;

  @Column('character varying', {
    name: 'revisaoportfolioproduto',
    nullable: true,
    length: 1000,
  })
  revisaoportfolioproduto: string | null;

  @Column('double precision', {
    name: 'spimedio',
    nullable: true,
    precision: 53,
  })
  spimedio: number | null;

  @Column('character varying', {
    name: 'statusunidade',
    nullable: true,
    length: 50,
  })
  statusunidade: string | null;

  @Column('character varying', {
    name: 'suplentediretorregionaldr',
    nullable: true,
    length: 50,
  })
  suplentediretorregionaldr: string | null;

  @Column('integer', { name: 'tamanhoplanejadoequipe', nullable: true })
  tamanhoplanejadoequipe: number | null;

  @Column('double precision', {
    name: 'taxamediasatisfacao',
    nullable: true,
    precision: 53,
  })
  taxamediasatisfacao: number | null;

  @Column('double precision', {
    name: 'taxaprojetosnoprazo',
    nullable: true,
    precision: 53,
  })
  taxaprojetosnoprazo: number | null;

  @Column('double precision', {
    name: 'taxasucessoanual',
    nullable: true,
    precision: 53,
  })
  taxasucessoanual: number | null;

  @Column('double precision', {
    name: 'taxasustentabilidadepdi',
    nullable: true,
    precision: 53,
  })
  taxasustentabilidadepdi: number | null;

  @Column('double precision', {
    name: 'taxasustentabilidadesti',
    nullable: true,
    precision: 53,
  })
  taxasustentabilidadesti: number | null;

  @Column('integer', { name: 'tempomediocontratacaocolab', nullable: true })
  tempomediocontratacaocolab: number | null;

  @Column('integer', { name: 'tempomediocontratacaoproj', nullable: true })
  tempomediocontratacaoproj: number | null;

  @Column('character varying', {
    name: 'treinamentoparagestao',
    nullable: true,
    length: 255,
  })
  treinamentoparagestao: string | null;

  @Column('integer', { name: 'visitasrealizadas', nullable: true })
  visitasrealizadas: number | null;

  @Column('integer', { name: 'visitasrealizadasforaestado', nullable: true })
  visitasrealizadasforaestado: number | null;

  @Column('integer', { name: 'visitasrecebidas', nullable: true })
  visitasrecebidas: number | null;

  @Column('double precision', {
    name: 'volumerecursosdr',
    nullable: true,
    precision: 53,
  })
  volumerecursosdr: number | null;

  @Column('character varying', {
    name: 'workshopavaliacaoauditoriagestao',
    nullable: true,
    length: 255,
  })
  workshopavaliacaoauditoriagestao: string | null;

  @Column('character varying', {
    name: 'workshopcolaboracao',
    nullable: true,
    length: 1000,
  })
  workshopcolaboracao: string | null;

  @Column('character varying', {
    name: 'workshopestrategia',
    nullable: true,
    length: 255,
  })
  workshopestrategia: string | null;

  @Column('character varying', {
    name: 'workshopimplementacao',
    nullable: true,
    length: 255,
  })
  workshopimplementacao: string | null;

  @Column('character varying', {
    name: 'workshopindustrial',
    nullable: true,
    length: 255,
  })
  workshopindustrial: string | null;

  @Column('character varying', {
    name: 'workshoppreparacao',
    nullable: true,
    length: 255,
  })
  workshoppreparacao: string | null;

  @Column('character varying', {
    name: 'workshoptecnologia',
    nullable: true,
    length: 255,
  })
  workshoptecnologia: string | null;

  @Column('integer', { name: 'idstatustabelaco', nullable: true })
  idstatustabelaco: number | null;

  @Column('character varying', {
    name: 'workshopauditoriatecnologica',
    nullable: true,
    length: 255,
  })
  workshopauditoriatecnologica: string | null;

  @Column('character varying', {
    name: 'emaildiretorregionaldr',
    nullable: true,
    length: 255,
  })
  emaildiretorregionaldr: string | null;

  @Column('character varying', {
    name: 'emailpontofocaldepartamentocomunicacao',
    nullable: true,
    length: 255,
  })
  emailpontofocaldepartamentocomunicacao: string | null;

  @Column('character varying', {
    name: 'emailsuplentediretorregionaldr',
    nullable: true,
    length: 255,
  })
  emailsuplentediretorregionaldr: string | null;

  @Column('boolean', { name: 'investimentobndes', nullable: true })
  investimentobndes: boolean | null;

  @Column('character varying', {
    name: 'nomediretorregionaldr',
    nullable: true,
    length: 50,
  })
  nomediretorregionaldr: string | null;

  @Column('character varying', {
    name: 'nomesuplentediretorregionaldr',
    nullable: true,
    length: 50,
  })
  nomesuplentediretorregionaldr: string | null;

  @OneToMany(() => Atendimentotabelaco, (atendimentotabelaco) => atendimentotabelaco.idtabelaco2)
  atendimentotabelacos: Atendimentotabelaco[];

  @OneToMany(() => Colaboradortabelaco, (colaboradortabelaco) => colaboradortabelaco.idtabelaco2)
  colaboradortabelacos: Colaboradortabelaco[];

  @OneToMany(() => Pesquisadortabelaco, (pesquisadortabelaco) => pesquisadortabelaco.idtabelaco2)
  pesquisadortabelacos: Pesquisadortabelaco[];

  @OneToMany(() => Responsavelescritorio, (responsavelescritorio) => responsavelescritorio.idtabelaco2)
  responsavelescritorios: Responsavelescritorio[];

  @ManyToOne(() => Statustabelaco, (statustabelaco) => statustabelaco.tabelacos)
  @JoinColumn([{ name: 'idstatustabelaco', referencedColumnName: 'id' }])
  idstatustabelaco2: Statustabelaco;
}
