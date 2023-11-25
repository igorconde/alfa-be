import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tabelaco } from './Tabelaco';
import { Parceirobolsatabelaco } from './Parceirobolsatabelaco';
import { Parceiroempresatabelaco } from './Parceiroempresatabelaco';
import { Parceirofomentotabelaco } from './Parceirofomentotabelaco';
import { Parceiroicttabelaco } from './Parceiroicttabelaco';
import { Parceirosenaitabelaco } from './Parceirosenaitabelaco';

@Index('atendimentotabelaco_pkey', ['id'], { unique: true })
@Index('ix_atendimentotabelaco_fk_atendimentotabelaco_idtabelaco', ['idtabelaco'], {})
@Entity('atendimentotabelaco', { schema: 'public' })
export class Atendimentotabelaco {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'abrangenciaimpacto',
    nullable: true,
    length: 65,
  })
  abrangenciaimpacto: string | null;

  @Column('character varying', {
    name: 'agencianacional',
    nullable: true,
    length: 65,
  })
  agencianacional: string | null;

  @Column('double precision', {
    name: 'agencianacionalvlrfinanceiro',
    nullable: true,
    precision: 53,
  })
  agencianacionalvlrfinanceiro: number | null;

  @Column('character varying', {
    name: 'areadepesquisa',
    nullable: true,
    length: 500,
  })
  areadepesquisa: string | null;

  @Column('character varying', {
    name: 'areadeservico',
    nullable: true,
    length: 255,
  })
  areadeservico: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'categoria',
    nullable: true,
    length: 255,
  })
  categoria: string | null;

  @Column('character varying', {
    name: 'complexidade',
    nullable: true,
    length: 65,
  })
  complexidade: string | null;

  @Column('timestamp without time zone', {
    name: 'dataassinaturacontrato',
    nullable: true,
  })
  dataassinaturacontrato: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataconclusaoprojeto',
    nullable: true,
  })
  dataconclusaoprojeto: Date | null;

  @Column('double precision', {
    name: 'duracaoestimada',
    nullable: true,
    precision: 53,
  })
  duracaoestimada: number | null;

  @Column('character varying', {
    name: 'empresaatendida',
    nullable: true,
    length: 255,
  })
  empresaatendida: string | null;

  @Column('boolean', { name: 'empresaatendidaprimeiravez', nullable: true })
  empresaatendidaprimeiravez: boolean | null;

  @Column('boolean', { name: 'encerramentonoperiodo', nullable: true })
  encerramentonoperiodo: boolean | null;

  @Column('character varying', {
    name: 'estadolocalizacao',
    nullable: true,
    length: 10,
  })
  estadolocalizacao: string | null;

  @Column('character varying', {
    name: 'graudeinovacao',
    nullable: true,
    length: 65,
  })
  graudeinovacao: string | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('character varying', {
    name: 'origemacaoprospectiva',
    nullable: true,
    length: 50,
  })
  origemacaoprospectiva: string | null;

  @Column('character varying', {
    name: 'parceirosnoprojeto',
    nullable: true,
    length: 65,
  })
  parceirosnoprojeto: string | null;

  @Column('character varying', {
    name: 'parceirossenai',
    nullable: true,
    length: 65,
  })
  parceirossenai: string | null;

  @Column('character varying', {
    name: 'porteempresa',
    nullable: true,
    length: 25,
  })
  porteempresa: string | null;

  @Column('boolean', { name: 'possuiparceiro', nullable: true })
  possuiparceiro: boolean | null;

  @Column('character varying', {
    name: 'produtonacional',
    nullable: true,
    length: 255,
  })
  produtonacional: string | null;

  @Column('character varying', {
    name: 'proponenteprojeto',
    nullable: true,
    length: 50,
  })
  proponenteprojeto: string | null;

  @Column('character varying', {
    name: 'responsavelacaoprospectiva',
    nullable: true,
    length: 50,
  })
  responsavelacaoprospectiva: string | null;

  @Column('character varying', {
    name: 'resumoexecutivo',
    nullable: true,
    length: 500,
  })
  resumoexecutivo: string | null;

  @Column('character varying', {
    name: 'setorindustrial',
    nullable: true,
    length: 65,
  })
  setorindustrial: string | null;

  @Column('character varying', { name: 'status', nullable: true, length: 45 })
  status: string | null;

  @Column('character varying', {
    name: 'statusunidade',
    nullable: true,
    length: 15,
  })
  statusunidade: string | null;

  @Column('double precision', {
    name: 'taxasatisfacao',
    nullable: true,
    precision: 53,
  })
  taxasatisfacao: number | null;

  @Column('character varying', { name: 'titulo', nullable: true, length: 500 })
  titulo: string | null;

  @Column('double precision', {
    name: 'valortotal',
    nullable: true,
    precision: 53,
  })
  valortotal: number | null;

  @Column('double precision', {
    name: 'vlreconomicocliente',
    nullable: true,
    precision: 53,
  })
  vlreconomicocliente: number | null;

  @Column('double precision', {
    name: 'vlreconomicodr',
    nullable: true,
    precision: 53,
  })
  vlreconomicodr: number | null;

  @Column('double precision', {
    name: 'vlreconomicounidade',
    nullable: true,
    precision: 53,
  })
  vlreconomicounidade: number | null;

  @Column('double precision', {
    name: 'vlrfinanceirocliente',
    nullable: true,
    precision: 53,
  })
  vlrfinanceirocliente: number | null;

  @Column('double precision', {
    name: 'vlrfinanceirodr',
    nullable: true,
    precision: 53,
  })
  vlrfinanceirodr: number | null;

  @Column('double precision', {
    name: 'vlrfinanceirounidade',
    nullable: true,
    precision: 53,
  })
  vlrfinanceirounidade: number | null;

  @Column('integer', { name: 'idtabelaco', nullable: true })
  idtabelaco: number | null;

  @Column('double precision', {
    name: 'vlreconomicosi',
    nullable: true,
    precision: 53,
  })
  vlreconomicosi: number | null;

  @Column('double precision', {
    name: 'vlrfinanceirosi',
    nullable: true,
    precision: 53,
  })
  vlrfinanceirosi: number | null;

  @ManyToOne(() => Tabelaco, (tabelaco) => tabelaco.atendimentotabelacos)
  @JoinColumn([{ name: 'idtabelaco', referencedColumnName: 'id' }])
  idtabelaco2: Tabelaco;

  @OneToMany(() => Parceirobolsatabelaco, (parceirobolsatabelaco) => parceirobolsatabelaco.idatendimentotabelaco2)
  parceirobolsatabelacos: Parceirobolsatabelaco[];

  @OneToMany(() => Parceiroempresatabelaco, (parceiroempresatabelaco) => parceiroempresatabelaco.idatendimentotabelaco2)
  parceiroempresatabelacos: Parceiroempresatabelaco[];

  @OneToMany(() => Parceirofomentotabelaco, (parceirofomentotabelaco) => parceirofomentotabelaco.idatendimentotabelaco2)
  parceirofomentotabelacos: Parceirofomentotabelaco[];

  @OneToMany(() => Parceiroicttabelaco, (parceiroicttabelaco) => parceiroicttabelaco.idatendimentotabelaco2)
  parceiroicttabelacos: Parceiroicttabelaco[];

  @OneToMany(() => Parceirosenaitabelaco, (parceirosenaitabelaco) => parceirosenaitabelaco.idatendimentotabelaco2)
  parceirosenaitabelacos: Parceirosenaitabelaco[];
}
