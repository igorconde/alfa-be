import { Fatoatendimento } from '@modules/atendimento/entities/fatoatendimento.entity';
import { Fatostatusatendimento } from '@modules/atendimento/entities/fatostatusatendimento.entity';
import { Fatodespesa } from '@modules/common/entities/fatodespesa.entity';
import { Fatoresultado } from '@modules/metas/entities/fatoresultado.entity';
import { Fatoresultadocompetencia } from '@modules/metas/entities/fatoresultadocompetencia.entity';
import { Fatoproducaoapropriada } from '@modules/producao/entities/fatoproducaoapropriada.entity';
import { Fatoproducaoapropriadametrologia } from '@modules/producao/entities/fatoproducaoapropriadametrologia.entity';
import { Fatoreceitaapropriada } from '@modules/receita/entities/fatoreceitaapropriada.entity';
import { Fatoreceitacompetencia } from '@modules/receita/entities/fatoreceitacompetencia.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentosi } from './Atendimentosi';
import { Fatofontepagadoraatendimentobp } from './Fatofontepagadoraatendimentobp';
import { Fatofontepagadoraatendimentoia } from './Fatofontepagadoraatendimentoia';
import { Fatofontepagadoraatendimentoie } from './Fatofontepagadoraatendimentoie';
import { Fatofontepagadoraatendimentoipea } from './Fatofontepagadoraatendimentoipea';
import { Fatosolicitacaoatendimentobp } from './Fatosolicitacaoatendimentobp';
import { Fatosolicitacaoatendimentoia } from './Fatosolicitacaoatendimentoia';
import { Fatosolicitacaoatendimentoie } from './Fatosolicitacaoatendimentoie';
import { Fatosolicitacaoatendimentoipea } from './Fatosolicitacaoatendimentoipea';
import { Fatostatusatendimentobp } from './Fatostatusatendimentobp';
import { Fatostatusatendimentohistoricobp } from './Fatostatusatendimentohistoricobp';
import { Fatostatusatendimentohistoricoia } from './Fatostatusatendimentohistoricoia';
import { Fatostatusatendimentohistoricoie } from './Fatostatusatendimentohistoricoie';
import { Fatostatusatendimentohistoricoipea } from './Fatostatusatendimentohistoricoipea';
import { Fatostatusatendimentoia } from './Fatostatusatendimentoia';
import { Fatostatusatendimentoie } from './Fatostatusatendimentoie';
import { Fatostatusatendimentoipea } from './Fatostatusatendimentoipea';
import { Fatostatusatendimentosi } from './Fatostatusatendimentosi';

@Index('calendario_pkey', ['id'], { unique: true })
@Entity('calendario', { schema: 'public' })
export class Calendario {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ano', nullable: true })
  ano: number | null;

  @Column('character varying', { name: 'ano2', nullable: true, length: 255 })
  ano2: string | null;

  @Column('character varying', {
    name: 'anomesabreviado',
    nullable: true,
    length: 255,
  })
  anomesabreviado: string | null;

  @Column('character varying', {
    name: 'anomesnumero',
    nullable: true,
    length: 255,
  })
  anomesnumero: string | null;

  @Column('character varying', {
    name: 'anotrimestre',
    nullable: true,
    length: 255,
  })
  anotrimestre: string | null;

  @Column('date', { name: 'data', nullable: true })
  data: string | null;

  @Column('character varying', {
    name: 'datacompleta',
    nullable: true,
    length: 255,
  })
  datacompleta: string | null;

  @Column('character varying', {
    name: 'datacomprida',
    nullable: true,
    length: 255,
  })
  datacomprida: string | null;

  @Column('character varying', {
    name: 'datacurta',
    nullable: true,
    length: 255,
  })
  datacurta: string | null;

  @Column('character varying', {
    name: 'datamedia',
    nullable: true,
    length: 255,
  })
  datamedia: string | null;

  @Column('character varying', {
    name: 'datanumerica',
    nullable: true,
    length: 255,
  })
  datanumerica: string | null;

  @Column('integer', { name: 'dia', nullable: true })
  dia: number | null;

  @Column('integer', { name: 'diaano', nullable: true })
  diaano: number | null;

  @Column('character varying', {
    name: 'diasemana',
    nullable: true,
    length: 255,
  })
  diasemana: string | null;

  @Column('character varying', {
    name: 'diasemanaabreviado',
    nullable: true,
    length: 255,
  })
  diasemanaabreviado: string | null;

  @Column('character varying', { name: 'estacao', nullable: true, length: 255 })
  estacao: string | null;

  @Column('character varying', {
    name: 'fimsemana',
    nullable: true,
    length: 255,
  })
  fimsemana: string | null;

  @Column('integer', { name: 'mes', nullable: true })
  mes: number | null;

  @Column('character varying', {
    name: 'mesabreviado',
    nullable: true,
    length: 255,
  })
  mesabreviado: string | null;

  @Column('character varying', { name: 'mesnome', nullable: true, length: 255 })
  mesnome: string | null;

  @Column('integer', { name: 'semanaano', nullable: true })
  semanaano: number | null;

  @Column('integer', { name: 'semanames', nullable: true })
  semanames: number | null;

  @Column('character varying', {
    name: 'trimestrenome',
    nullable: true,
    length: 255,
  })
  trimestrenome: string | null;

  @Column('character varying', {
    name: 'trimestrenumero',
    nullable: true,
    length: 255,
  })
  trimestrenumero: string | null;

  @Column('character varying', {
    name: 'ultimodiames',
    nullable: true,
    length: 255,
  })
  ultimodiames: string | null;

  @OneToMany(() => Atendimentosi, (atendimentosi) => atendimentosi.idcalendario2)
  atendimentosis: Atendimentosi[];

  @OneToMany(() => Fatoatendimento, (fatoatendimento) => fatoatendimento.idcalendarioaceitacao2)
  fatoatendimentos: Fatoatendimento[];

  @OneToMany(() => Fatoatendimento, (fatoatendimento) => fatoatendimento.idcalendarioconclusao2)
  fatoatendimentos2: Fatoatendimento[];

  @OneToMany(() => Fatoatendimento, (fatoatendimento) => fatoatendimento.idcalendarioemissao2)
  fatoatendimentos3: Fatoatendimento[];

  @OneToMany(() => Fatoatendimento, (fatoatendimento) => fatoatendimento.idcalendarionegociacao2)
  fatoatendimentos4: Fatoatendimento[];

  @OneToMany(() => Fatodespesa, (fatodespesa) => fatodespesa.idcalendario2)
  fatodespesas: Fatodespesa[];

  @OneToMany(() => Fatofontepagadoraatendimentobp, (fatofontepagadoraatendimentobp) => fatofontepagadoraatendimentobp.idcalendario2)
  fatofontepagadoraatendimentobps: Fatofontepagadoraatendimentobp[];

  @OneToMany(() => Fatofontepagadoraatendimentoia, (fatofontepagadoraatendimentoia) => fatofontepagadoraatendimentoia.idcalendario2)
  fatofontepagadoraatendimentoias: Fatofontepagadoraatendimentoia[];

  @OneToMany(() => Fatofontepagadoraatendimentoie, (fatofontepagadoraatendimentoie) => fatofontepagadoraatendimentoie.idcalendario)
  fatofontepagadoraatendimentoies: Fatofontepagadoraatendimentoie[];

  @OneToMany(() => Fatofontepagadoraatendimentoipea, (fatofontepagadoraatendimentoipea) => fatofontepagadoraatendimentoipea.idcalendario2)
  fatofontepagadoraatendimentoipeas: Fatofontepagadoraatendimentoipea[];

  @OneToMany(() => Fatoproducaoapropriada, (fatoproducaoapropriada) => fatoproducaoapropriada.idcalendario2)
  fatoproducaoapropriadas: Fatoproducaoapropriada[];

  @OneToMany(() => Fatoproducaoapropriadametrologia, (fatoproducaoapropriadametrologia) => fatoproducaoapropriadametrologia.idcalendario2)
  fatoproducaoapropriadametrologias: Fatoproducaoapropriadametrologia[];

  @OneToMany(() => Fatoreceitaapropriada, (fatoreceitaapropriada) => fatoreceitaapropriada.idcalendario2)
  fatoreceitaapropriadas: Fatoreceitaapropriada[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idcalendario2)
  fatoreceitacompetencias: Fatoreceitacompetencia[];

  @OneToMany(() => Fatoresultado, (fatoresultado) => fatoresultado.idcalendario2)
  fatoresultados: Fatoresultado[];

  @OneToMany(() => Fatoresultadocompetencia, (fatoresultadocompetencia) => fatoresultadocompetencia.idcalendario2)
  fatoresultadocompetencias: Fatoresultadocompetencia[];

  @OneToMany(() => Fatosolicitacaoatendimentobp, (fatosolicitacaoatendimentobp) => fatosolicitacaoatendimentobp.idcalendario2)
  fatosolicitacaoatendimentobps: Fatosolicitacaoatendimentobp[];

  @OneToMany(() => Fatosolicitacaoatendimentoia, (fatosolicitacaoatendimentoia) => fatosolicitacaoatendimentoia.idcalendario2)
  fatosolicitacaoatendimentoias: Fatosolicitacaoatendimentoia[];

  @OneToMany(() => Fatosolicitacaoatendimentoie, (fatosolicitacaoatendimentoie) => fatosolicitacaoatendimentoie.idcalendario)
  fatosolicitacaoatendimentoies: Fatosolicitacaoatendimentoie[];

  @OneToMany(() => Fatosolicitacaoatendimentoipea, (fatosolicitacaoatendimentoipea) => fatosolicitacaoatendimentoipea.idcalendario2)
  fatosolicitacaoatendimentoipeas: Fatosolicitacaoatendimentoipea[];

  @OneToMany(() => Fatostatusatendimento, (fatostatusatendimento) => fatostatusatendimento.idcalendario2)
  fatostatusatendimentos: Fatostatusatendimento[];

  @OneToMany(() => Fatostatusatendimentobp, (fatostatusatendimentobp) => fatostatusatendimentobp.idcalendario2)
  fatostatusatendimentobps: Fatostatusatendimentobp[];

  @OneToMany(() => Fatostatusatendimentohistoricobp, (fatostatusatendimentohistoricobp) => fatostatusatendimentohistoricobp.idcalendario2)
  fatostatusatendimentohistoricobps: Fatostatusatendimentohistoricobp[];

  @OneToMany(() => Fatostatusatendimentohistoricoia, (fatostatusatendimentohistoricoia) => fatostatusatendimentohistoricoia.idcalendario2)
  fatostatusatendimentohistoricoias: Fatostatusatendimentohistoricoia[];

  @OneToMany(() => Fatostatusatendimentohistoricoie, (fatostatusatendimentohistoricoie) => fatostatusatendimentohistoricoie.idcalendario)
  fatostatusatendimentohistoricoies: Fatostatusatendimentohistoricoie[];

  @OneToMany(() => Fatostatusatendimentohistoricoipea, (fatostatusatendimentohistoricoipea) => fatostatusatendimentohistoricoipea.idcalendario2)
  fatostatusatendimentohistoricoipeas: Fatostatusatendimentohistoricoipea[];

  @OneToMany(() => Fatostatusatendimentoia, (fatostatusatendimentoia) => fatostatusatendimentoia.idcalendario2)
  fatostatusatendimentoias: Fatostatusatendimentoia[];

  @OneToMany(() => Fatostatusatendimentoie, (fatostatusatendimentoie) => fatostatusatendimentoie.idcalendario)
  fatostatusatendimentoies: Fatostatusatendimentoie[];

  @OneToMany(() => Fatostatusatendimentoipea, (fatostatusatendimentoipea) => fatostatusatendimentoipea.idcalendario2)
  fatostatusatendimentoipeas: Fatostatusatendimentoipea[];

  @OneToMany(() => Fatostatusatendimentosi, (fatostatusatendimentosi) => fatostatusatendimentosi.idcalendario2)
  fatostatusatendimentosis: Fatostatusatendimentosi[];
}
