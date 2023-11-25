import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Apl } from './Apl';
import { Atendimentostatus } from './Atendimentostatus';
import { Calendario } from './Calendario';
import { Cliente } from './Cliente';
import { Setor } from './Setor';
import { Unidadefederativa } from './Unidadefederativa';

@Index('fatostatusatendimentohistoricobp_pkey', ['id'], { unique: true })
@Index('ftsttstendimentohistoricobpfkftsttusatendimentohistoricobpidapl', ['idapl'], {})
@Index('ftsttstndmnthstrcobpfkftsttstndmnthstoricobpidatendimentostatus', ['idatendimentostatus'], {})
@Index('ftsttstndmntohistoricobpfkftsttstndmentohistoricobpidcalendario', ['idcalendario'], {})
@Index('ftsttstndimentohistoricobpfkftsttstndimentohistoricobpidcliente', ['idcliente'], {})
@Index('ftsttstndimentohistoricobpfkftsttsatendimentohistoricobpidsetor', ['idsetor'], {})
@Index('ftsttstndmnthstrcobpfkftsttstndmnthstoricobpidunidadefederativa', ['idunidadefederativa'], {})
@Index('ftsttstndmnthstoricobpfkftsttstndmnthstoricobpidunidadenacional', ['idunidadenacional'], {})
@Index('ftsttstndmnthstrcobpfkftsttstndmnthstricobpidunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ftsttstndmnthstoricobpfkftsttstndmnthstoricobpidunidaderegional', ['idunidaderegional'], {})
@Entity('fatostatusatendimentohistoricobp', { schema: 'public' })
export class Fatostatusatendimentohistoricobp {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'numerodeproducaoestimada', nullable: true })
  numerodeproducaoestimada: number | null;

  @Column('double precision', {
    name: 'numerodereceitaestimada',
    nullable: true,
    precision: 53,
  })
  numerodereceitaestimada: number | null;

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

  @Column('character varying', {
    name: 'tipometa',
    nullable: true,
    length: 255,
  })
  tipometa: string | null;

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
    name: 'vlrfinanceiro',
    nullable: true,
    precision: 53,
  })
  vlrfinanceiro: number | null;

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

  @Column('integer', { name: 'idapl', nullable: true })
  idapl: number | null;

  @Column('integer', { name: 'idatendimentostatus', nullable: true })
  idatendimentostatus: number | null;

  @Column('integer', { name: 'idcalendario', nullable: true })
  idcalendario: number | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @Column('integer', { name: 'idsetor', nullable: true })
  idsetor: number | null;

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @Column('integer', { name: 'idunidadenacional', nullable: true })
  idunidadenacional: number | null;

  @Column('integer', { name: 'idunidadeoperacional', nullable: true })
  idunidadeoperacional: number | null;

  @Column('integer', { name: 'idunidaderegional', nullable: true })
  idunidaderegional: number | null;

  @Column('integer', { name: 'qtdeexecucao', nullable: true })
  qtdeexecucao: number | null;

  @ManyToOne(() => Apl, (apl) => apl.fatostatusatendimentohistoricobps)
  @JoinColumn([{ name: 'idapl', referencedColumnName: 'id' }])
  idapl2: Apl;

  @ManyToOne(() => Atendimentostatus, (atendimentostatus) => atendimentostatus.fatostatusatendimentohistoricobps)
  @JoinColumn([{ name: 'idatendimentostatus', referencedColumnName: 'id' }])
  idatendimentostatus2: Atendimentostatus;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatostatusatendimentohistoricobps)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatostatusatendimentohistoricobps)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Setor, (setor) => setor.fatostatusatendimentohistoricobps)
  @JoinColumn([{ name: 'idsetor', referencedColumnName: 'id' }])
  idsetor2: Setor;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatostatusatendimentohistoricobps)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatostatusatendimentohistoricobps)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatostatusatendimentohistoricobps2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatostatusatendimentohistoricobps3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}