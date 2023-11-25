import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Apl } from './Apl';
import { Calendario } from './Calendario';
import { Cliente } from './Cliente';
import { Setor } from './Setor';
import { Solicitacaostatus } from './Solicitacaostatus';
import { Unidadefederativa } from './Unidadefederativa';

@Index('fatosolicitacaoatendimentobp_pkey', ['id'], { unique: true })
@Index('fatosolicitacaoatendimentobpfkfatosolicitacaoatendimentobpidapl', ['idapl'], {})
@Index('ftslcitacaoatendimentobpfkftslicitacaoatendimentobpidcalendario', ['idcalendario'], {})
@Index('ftslicitacaoatendimentobpfkftosolicitacaoatendimentobpidcliente', ['idcliente'], {})
@Index('ftsolicitacaoatendimentobpfkfatosolicitacaoatendimentobpidsetor', ['idsetor'], {})
@Index('ftslctcatendimentobpfkftslctcaoatendimentobpidsolicitacaostatus', ['idsolicitacaostatus'], {})
@Index('ftslctcatendimentobpfkftslctcaoatendimentobpidunidadefederativa', ['idunidadefederativa'], {})
@Index('ftslctcoatendimentobpfkftslctacaoatendimentobpidunidadenacional', ['idunidadenacional'], {})
@Index('ftslctctendimentobpfkftslctcaoatendimentobpidunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ftslctcoatendimentobpfkftslctacaoatendimentobpidunidaderegional', ['idunidaderegional'], {})
@Entity('fatosolicitacaoatendimentobp', { schema: 'public' })
export class Fatosolicitacaoatendimentobp {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'iditemmetaregional', nullable: true })
  iditemmetaregional: number | null;

  @Column('integer', { name: 'numerodeproducaoestimada', nullable: true })
  numerodeproducaoestimada: number | null;

  @Column('double precision', {
    name: 'numerodereceitaestimada',
    nullable: true,
    precision: 53,
  })
  numerodereceitaestimada: number | null;

  @Column('integer', { name: 'qtdeanaliserealizado', nullable: true })
  qtdeanaliserealizado: number | null;

  @Column('integer', { name: 'qtdeconformeprevisto', nullable: true })
  qtdeconformeprevisto: number | null;

  @Column('integer', { name: 'qtdeconformerealizado', nullable: true })
  qtdeconformerealizado: number | null;

  @Column('integer', { name: 'qtdenaoconformerealizado', nullable: true })
  qtdenaoconformerealizado: number | null;

  @Column('integer', { name: 'qtderecusadorealizado', nullable: true })
  qtderecusadorealizado: number | null;

  @Column('character varying', {
    name: 'tipometa',
    nullable: true,
    length: 255,
  })
  tipometa: string | null;

  @Column('double precision', {
    name: 'vlrfinanceiro',
    nullable: true,
    precision: 53,
  })
  vlrfinanceiro: number | null;

  @Column('integer', { name: 'idapl', nullable: true })
  idapl: number | null;

  @Column('integer', { name: 'idcalendario', nullable: true })
  idcalendario: number | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @Column('integer', { name: 'idsetor', nullable: true })
  idsetor: number | null;

  @Column('integer', { name: 'idsolicitacaostatus', nullable: true })
  idsolicitacaostatus: number | null;

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @Column('integer', { name: 'idunidadenacional', nullable: true })
  idunidadenacional: number | null;

  @Column('integer', { name: 'idunidadeoperacional', nullable: true })
  idunidadeoperacional: number | null;

  @Column('integer', { name: 'idunidaderegional', nullable: true })
  idunidaderegional: number | null;

  @ManyToOne(() => Apl, (apl) => apl.fatosolicitacaoatendimentobps)
  @JoinColumn([{ name: 'idapl', referencedColumnName: 'id' }])
  idapl2: Apl;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatosolicitacaoatendimentobps)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatosolicitacaoatendimentobps)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Setor, (setor) => setor.fatosolicitacaoatendimentobps)
  @JoinColumn([{ name: 'idsetor', referencedColumnName: 'id' }])
  idsetor2: Setor;

  @ManyToOne(() => Solicitacaostatus, (solicitacaostatus) => solicitacaostatus.fatosolicitacaoatendimentobps)
  @JoinColumn([{ name: 'idsolicitacaostatus', referencedColumnName: 'id' }])
  idsolicitacaostatus2: Solicitacaostatus;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatosolicitacaoatendimentobps)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatosolicitacaoatendimentobps)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatosolicitacaoatendimentobps2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatosolicitacaoatendimentobps3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
