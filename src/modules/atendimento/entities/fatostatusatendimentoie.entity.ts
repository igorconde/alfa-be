import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Unidadefederativa } from '@modules/administracao/entities/unidadefederativa.entity';
import { Atendimentostatus } from '@modules/atendimento/entities/atendimentostatus.entity';
import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Apl } from './Apl';
import { Setor } from './Setor';

@Index('fatostatusatendimentoie_pkey', ['id'], { unique: true })
@Entity('fatostatusatendimentoie', { schema: 'public' })
export class Fatostatusatendimentoie {
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

  @Column('integer', { name: 'qtdeexecucao', nullable: true })
  qtdeexecucao: number | null;

  @ManyToOne(() => Apl, (apl) => apl.fatostatusatendimentoies)
  @JoinColumn([{ name: 'idapl', referencedColumnName: 'id' }])
  idapl: Apl;

  @ManyToOne(() => Atendimentostatus, (atendimentostatus) => atendimentostatus.fatostatusatendimentoies)
  @JoinColumn([{ name: 'idatendimentostatus', referencedColumnName: 'id' }])
  idatendimentostatus: Atendimentostatus;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatostatusatendimentoies)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatostatusatendimentoies)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente: Cliente;

  @ManyToOne(() => Setor, (setor) => setor.fatostatusatendimentoies)
  @JoinColumn([{ name: 'idsetor', referencedColumnName: 'id' }])
  idsetor: Setor;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatostatusatendimentoies)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatostatusatendimentoies)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatostatusatendimentoies2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatostatusatendimentoies3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional: Unidade;
}
