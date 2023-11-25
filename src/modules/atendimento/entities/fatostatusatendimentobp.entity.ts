import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Unidadefederativa } from '@modules/administracao/entities/unidadefederativa.entity';
import { Atendimentostatus } from '@modules/atendimento/entities/atendimentostatus.entity';
import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Apl } from './Apl';
import { Setor } from './Setor';

@Index('fatostatusatendimentobp_pkey', ['id'], { unique: true })
@Index('ix_fatostatusatendimentobp_fk_fatostatusatendimentobp_idapl', ['idapl'], {})
@Index('ftstatusatendimentobpfkftstatusatendimentobpidatendimentostatus', ['idatendimentostatus'], {})
@Index('fatostatusatendimentobp_fk_fatostatusatendimentobp_idcalendario', ['idcalendario'], {})
@Index('ix_fatostatusatendimentobp_fk_fatostatusatendimentobp_idcliente', ['idcliente'], {})
@Index('ix_fatostatusatendimentobp_fk_fatostatusatendimentobp_idsetor', ['idsetor'], {})
@Index('ftstatusatendimentobpfkftstatusatendimentobpidunidadefederativa', ['idunidadefederativa'], {})
@Index('ftstatusatendimentobpfkfatostatusatendimentobpidunidadenacional', ['idunidadenacional'], {})
@Index('ftsttusatendimentobpfkftstatusatendimentobpidunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ftstatusatendimentobpfkfatostatusatendimentobpidunidaderegional', ['idunidaderegional'], {})
@Entity('fatostatusatendimentobp', { schema: 'public' })
export class Fatostatusatendimentobp {
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

  @ManyToOne(() => Apl, (apl) => apl.fatostatusatendimentobps)
  @JoinColumn([{ name: 'idapl', referencedColumnName: 'id' }])
  idapl2: Apl;

  @ManyToOne(() => Atendimentostatus, (atendimentostatus) => atendimentostatus.fatostatusatendimentobps)
  @JoinColumn([{ name: 'idatendimentostatus', referencedColumnName: 'id' }])
  idatendimentostatus2: Atendimentostatus;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatostatusatendimentobps)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatostatusatendimentobps)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Setor, (setor) => setor.fatostatusatendimentobps)
  @JoinColumn([{ name: 'idsetor', referencedColumnName: 'id' }])
  idsetor2: Setor;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatostatusatendimentobps)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatostatusatendimentobps)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatostatusatendimentobps2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatostatusatendimentobps3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
