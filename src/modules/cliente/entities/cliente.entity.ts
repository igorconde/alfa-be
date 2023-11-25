import { Column, Entity, Index, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimento } from './Atendimento';
import { Clusterclientementoriadigital } from './Clusterclientementoriadigital';
import { Cnaesecundariocliente } from './Cnaesecundariocliente';
import { Contato } from './Contato';
import { Contatobackup } from './Contatobackup';
import { Endereco } from './Endereco';
import { Enderecobackup } from './Enderecobackup';
import { Fatoatendimento } from './Fatoatendimento';
import { Fatofontepagadoraatendimentobp } from './Fatofontepagadoraatendimentobp';
import { Fatofontepagadoraatendimentoia } from './Fatofontepagadoraatendimentoia';
import { Fatofontepagadoraatendimentoie } from './Fatofontepagadoraatendimentoie';
import { Fatofontepagadoraatendimentoipea } from './Fatofontepagadoraatendimentoipea';
import { Fatoproducaoapropriada } from './Fatoproducaoapropriada';
import { Fatoproducaoapropriadametrologia } from './Fatoproducaoapropriadametrologia';
import { Fatoreceitaapropriada } from './Fatoreceitaapropriada';
import { Fatoreceitacompetencia } from './Fatoreceitacompetencia';
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
import { Ordemfaturamento } from './Ordemfaturamento';
import { Pessoafisica } from './Pessoafisica';
import { Pessoafisicaestrangeira } from './Pessoafisicaestrangeira';
import { Pessoajuridica } from './Pessoajuridica';
import { Pessoajuridicaestrangeira } from './Pessoajuridicaestrangeira';
import { Portecliente } from './Portecliente';
import { Previsaoreceita } from './Previsaoreceita';
import { Receitafaturamentofontepagadora } from './Receitafaturamentofontepagadora';
import { Tipocnpj } from './Tipocnpj';
import { Unidade } from './Unidade';
import { Usuario } from './Usuario';
import { Agenciareguladora } from './agencia-reguladora.entity';
import { Clienteabdidigital } from './cliente-abdi-digital.entity';
import { Clienteabdi } from './cliente-abdi.entity';

@Index('iclienteu1', ['cpfcnpj'], {})
@Index('cliente_cpfcnpj', ['cpfcnpj'], { unique: true })
@Index('cliente_pkey', ['id'], { unique: true })
@Entity('cliente', { schema: 'public' })
export class Cliente {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'cnae', nullable: true, length: 255 })
  cnae: string | null;

  @Column('character varying', {
    name: 'cpfcnpj',
    nullable: true,
    unique: true,
    length: 255,
  })
  cpfcnpj: string | null;

  @Column('character varying', {
    name: 'documentoestrangeiro',
    nullable: true,
    length: 255,
  })
  documentoestrangeiro: string | null;

  @Column('character varying', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('character varying', {
    name: 'inscricaoestadual',
    nullable: true,
    length: 255,
  })
  inscricaoestadual: string | null;

  @Column('boolean', { name: 'isativo', nullable: true })
  isativo: boolean | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('integer', { name: 'numerodefuncionarios', nullable: true })
  numerodefuncionarios: number | null;

  @Column('character varying', {
    name: 'razaosocial',
    nullable: true,
    length: 255,
  })
  razaosocial: string | null;

  @Column('character varying', {
    name: 'telefone',
    nullable: true,
    length: 255,
  })
  telefone: string | null;

  @Column('integer', { name: 'tipopessoa', nullable: true })
  tipopessoa: number | null;

  @Column('date', { name: 'ultimaatualizacao', nullable: true })
  ultimaatualizacao: string | null;

  @Column('timestamp without time zone', {
    name: 'dataatualizacao',
    nullable: true,
  })
  dataatualizacao: Date | null;

  @Column('timestamp without time zone', {
    name: 'datacadastro',
    nullable: true,
  })
  datacadastro: Date | null;

  @Column('boolean', { name: 'isfontefomento', nullable: true })
  isfontefomento: boolean | null;

  @Column('tsvector', { name: 'buscalivre', nullable: true })
  buscalivre: string | null;

  @Column('boolean', { name: 'isunidadesenai', nullable: true })
  isunidadesenai: boolean | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('boolean', { name: 'isfontebp', nullable: true })
  isfontebp: boolean | null;

  @Column('boolean', { name: 'isfonteia', default: () => 'false' })
  isfonteia: boolean;

  @Column('boolean', { name: 'isfonteipea', nullable: true })
  isfonteipea: boolean | null;

  @Column('boolean', { name: 'isfonteie', nullable: true })
  isfonteie: boolean | null;

  @Column('character varying', {
    name: 'pais',
    nullable: true,
    length: 3,
    default: () => "'BRA'",
  })
  pais: string | null;

  @Column('character varying', {
    name: 'cnaesecundario',
    nullable: true,
    length: 1000,
  })
  cnaesecundario: string | null;

  @Column('boolean', { name: 'isarquivado', nullable: true })
  isarquivado: boolean | null;

  @Column('boolean', { name: 'isdeletadomentoriadigital', nullable: true })
  isdeletadomentoriadigital: boolean | null;

  @Column('boolean', { name: 'isdeletadomentorialean', nullable: true })
  isdeletadomentorialean: boolean | null;

  @OneToMany(() => Agenciareguladora, (agenciareguladora) => agenciareguladora.idcliente2)
  agenciareguladoras: Agenciareguladora[];

  @OneToMany(() => Atendimento, (atendimento) => atendimento.idcliente2)
  atendimentos: Atendimento[];

  @ManyToMany(() => Atendimento, (atendimento) => atendimento.clientes)
  atendimentos2: Atendimento[];

  @ManyToMany(() => Atendimento, (atendimento) => atendimento.clientes2)
  atendimentos3: Atendimento[];

  @ManyToOne(() => Portecliente, (portecliente) => portecliente.clientes)
  @JoinColumn([{ name: 'idportecliente', referencedColumnName: 'id' }])
  idportecliente: Portecliente;

  @ManyToOne(() => Tipocnpj, (tipocnpj) => tipocnpj.clientes)
  @JoinColumn([{ name: 'idtipocnpj', referencedColumnName: 'id' }])
  idtipocnpj: Tipocnpj;

  @ManyToOne(() => Unidade, (unidade) => unidade.clientes)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade: Unidade;

  @ManyToOne(() => Usuario, (usuario) => usuario.clientes)
  @JoinColumn([{ name: 'idusuario', referencedColumnName: 'id' }])
  idusuario: Usuario;

  @OneToMany(() => Clienteabdi, (clienteabdi) => clienteabdi.idcliente2)
  clienteabdis: Clienteabdi[];

  @OneToMany(() => Clienteabdidigital, (clienteabdidigital) => clienteabdidigital.idcliente2)
  clienteabdidigitals: Clienteabdidigital[];

  @OneToMany(() => Clusterclientementoriadigital, (clusterclientementoriadigital) => clusterclientementoriadigital.idcliente2)
  clusterclientementoriadigitals: Clusterclientementoriadigital[];

  @OneToMany(() => Cnaesecundariocliente, (cnaesecundariocliente) => cnaesecundariocliente.idcliente2)
  cnaesecundarioclientes: Cnaesecundariocliente[];

  @OneToMany(() => Contato, (contato) => contato.idcliente2)
  contatoes: Contato[];

  @OneToMany(() => Contatobackup, (contatobackup) => contatobackup.idcliente2)
  contatobackups: Contatobackup[];

  @OneToMany(() => Endereco, (endereco) => endereco.idcliente2)
  enderecos: Endereco[];

  @OneToMany(() => Enderecobackup, (enderecobackup) => enderecobackup.idcliente2)
  enderecobackups: Enderecobackup[];

  @OneToMany(() => Fatoatendimento, (fatoatendimento) => fatoatendimento.idcliente2)
  fatoatendimentos: Fatoatendimento[];

  @OneToMany(() => Fatofontepagadoraatendimentobp, (fatofontepagadoraatendimentobp) => fatofontepagadoraatendimentobp.idcliente2)
  fatofontepagadoraatendimentobps: Fatofontepagadoraatendimentobp[];

  @OneToMany(() => Fatofontepagadoraatendimentobp, (fatofontepagadoraatendimentobp) => fatofontepagadoraatendimentobp.idfontepagadora2)
  fatofontepagadoraatendimentobps2: Fatofontepagadoraatendimentobp[];

  @OneToMany(() => Fatofontepagadoraatendimentoia, (fatofontepagadoraatendimentoia) => fatofontepagadoraatendimentoia.idcliente2)
  fatofontepagadoraatendimentoias: Fatofontepagadoraatendimentoia[];

  @OneToMany(() => Fatofontepagadoraatendimentoia, (fatofontepagadoraatendimentoia) => fatofontepagadoraatendimentoia.idfontepagadora2)
  fatofontepagadoraatendimentoias2: Fatofontepagadoraatendimentoia[];

  @OneToMany(() => Fatofontepagadoraatendimentoie, (fatofontepagadoraatendimentoie) => fatofontepagadoraatendimentoie.idcliente)
  fatofontepagadoraatendimentoies: Fatofontepagadoraatendimentoie[];

  @OneToMany(() => Fatofontepagadoraatendimentoie, (fatofontepagadoraatendimentoie) => fatofontepagadoraatendimentoie.idfontepagadora)
  fatofontepagadoraatendimentoies2: Fatofontepagadoraatendimentoie[];

  @OneToMany(() => Fatofontepagadoraatendimentoipea, (fatofontepagadoraatendimentoipea) => fatofontepagadoraatendimentoipea.idcliente2)
  fatofontepagadoraatendimentoipeas: Fatofontepagadoraatendimentoipea[];

  @OneToMany(() => Fatofontepagadoraatendimentoipea, (fatofontepagadoraatendimentoipea) => fatofontepagadoraatendimentoipea.idfontepagadora2)
  fatofontepagadoraatendimentoipeas2: Fatofontepagadoraatendimentoipea[];

  @OneToMany(() => Fatoproducaoapropriada, (fatoproducaoapropriada) => fatoproducaoapropriada.idcliente2)
  fatoproducaoapropriadas: Fatoproducaoapropriada[];

  @OneToMany(() => Fatoproducaoapropriadametrologia, (fatoproducaoapropriadametrologia) => fatoproducaoapropriadametrologia.idcliente2)
  fatoproducaoapropriadametrologias: Fatoproducaoapropriadametrologia[];

  @OneToMany(() => Fatoreceitaapropriada, (fatoreceitaapropriada) => fatoreceitaapropriada.idcliente2)
  fatoreceitaapropriadas: Fatoreceitaapropriada[];

  @OneToMany(() => Fatoreceitaapropriada, (fatoreceitaapropriada) => fatoreceitaapropriada.idfontepagadora2)
  fatoreceitaapropriadas2: Fatoreceitaapropriada[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idcliente2)
  fatoreceitacompetencias: Fatoreceitacompetencia[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idfontepagadora2)
  fatoreceitacompetencias2: Fatoreceitacompetencia[];

  @OneToMany(() => Fatosolicitacaoatendimentobp, (fatosolicitacaoatendimentobp) => fatosolicitacaoatendimentobp.idcliente2)
  fatosolicitacaoatendimentobps: Fatosolicitacaoatendimentobp[];

  @OneToMany(() => Fatosolicitacaoatendimentoia, (fatosolicitacaoatendimentoia) => fatosolicitacaoatendimentoia.idcliente2)
  fatosolicitacaoatendimentoias: Fatosolicitacaoatendimentoia[];

  @OneToMany(() => Fatosolicitacaoatendimentoie, (fatosolicitacaoatendimentoie) => fatosolicitacaoatendimentoie.idcliente)
  fatosolicitacaoatendimentoies: Fatosolicitacaoatendimentoie[];

  @OneToMany(() => Fatosolicitacaoatendimentoipea, (fatosolicitacaoatendimentoipea) => fatosolicitacaoatendimentoipea.idcliente2)
  fatosolicitacaoatendimentoipeas: Fatosolicitacaoatendimentoipea[];

  @OneToMany(() => Fatostatusatendimento, (fatostatusatendimento) => fatostatusatendimento.idcliente2)
  fatostatusatendimentos: Fatostatusatendimento[];

  @OneToMany(() => Fatostatusatendimentobp, (fatostatusatendimentobp) => fatostatusatendimentobp.idcliente2)
  fatostatusatendimentobps: Fatostatusatendimentobp[];

  @OneToMany(() => Fatostatusatendimentohistoricobp, (fatostatusatendimentohistoricobp) => fatostatusatendimentohistoricobp.idcliente2)
  fatostatusatendimentohistoricobps: Fatostatusatendimentohistoricobp[];

  @OneToMany(() => Fatostatusatendimentohistoricoia, (fatostatusatendimentohistoricoia) => fatostatusatendimentohistoricoia.idcliente2)
  fatostatusatendimentohistoricoias: Fatostatusatendimentohistoricoia[];

  @OneToMany(() => Fatostatusatendimentohistoricoie, (fatostatusatendimentohistoricoie) => fatostatusatendimentohistoricoie.idcliente)
  fatostatusatendimentohistoricoies: Fatostatusatendimentohistoricoie[];

  @OneToMany(() => Fatostatusatendimentohistoricoipea, (fatostatusatendimentohistoricoipea) => fatostatusatendimentohistoricoipea.idcliente2)
  fatostatusatendimentohistoricoipeas: Fatostatusatendimentohistoricoipea[];

  @OneToMany(() => Fatostatusatendimentoia, (fatostatusatendimentoia) => fatostatusatendimentoia.idcliente2)
  fatostatusatendimentoias: Fatostatusatendimentoia[];

  @OneToMany(() => Fatostatusatendimentoie, (fatostatusatendimentoie) => fatostatusatendimentoie.idcliente)
  fatostatusatendimentoies: Fatostatusatendimentoie[];

  @OneToMany(() => Fatostatusatendimentoipea, (fatostatusatendimentoipea) => fatostatusatendimentoipea.idcliente2)
  fatostatusatendimentoipeas: Fatostatusatendimentoipea[];

  @OneToMany(() => Ordemfaturamento, (ordemfaturamento) => ordemfaturamento.idfontepagadora2)
  ordemfaturamentos: Ordemfaturamento[];

  @OneToMany(() => Pessoafisica, (pessoafisica) => pessoafisica.idcliente)
  pessoafisicas: Pessoafisica[];

  @OneToMany(() => Pessoafisicaestrangeira, (pessoafisicaestrangeira) => pessoafisicaestrangeira.idcliente)
  pessoafisicaestrangeiras: Pessoafisicaestrangeira[];

  @OneToMany(() => Pessoajuridica, (pessoajuridica) => pessoajuridica.idcliente)
  pessoajuridicas: Pessoajuridica[];

  @OneToMany(() => Pessoajuridicaestrangeira, (pessoajuridicaestrangeira) => pessoajuridicaestrangeira.idcliente)
  pessoajuridicaestrangeiras: Pessoajuridicaestrangeira[];

  @OneToMany(() => Previsaoreceita, (previsaoreceita) => previsaoreceita.idfontepagadora2)
  previsaoreceitas: Previsaoreceita[];

  @OneToMany(() => Receitafaturamentofontepagadora, (receitafaturamentofontepagadora) => receitafaturamentofontepagadora.idfontepagadora2)
  receitafaturamentofontepagadoras: Receitafaturamentofontepagadora[];

  @OneToMany(() => Unidade, (unidade) => unidade.idcliente2)
  unidades: Unidade[];
}
