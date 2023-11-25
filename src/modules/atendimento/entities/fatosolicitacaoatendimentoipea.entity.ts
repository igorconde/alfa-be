import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Apl } from './Apl';
import { Cliente } from './Cliente';
import { Setor } from './Setor';
import { Solicitacaostatus } from './Solicitacaostatus';
import { Unidadefederativa } from './Unidadefederativa';

@Index('fatosolicitacaoatendimentoipea_pkey', ['id'], { unique: true })
@Index('ftslicitacaoatendimentoipeafkftosolicitacaoatendimentoipeaidapl', ['idapl'], {})
@Index('ftslctcaoatendimentoipeafkftslctacaoatendimentoipeaidcalendario', ['idcalendario'], {})
@Index('ftslctacaoatendimentoipeafkftslicitacaoatendimentoipeaidcliente', ['idcliente'], {})
@Index('ftslcitacaoatendimentoipeafkftsolicitacaoatendimentoipeaidsetor', ['idsetor'], {})
@Index('ftslctctndimentoipeafkftslctcatendimentoipeaidsolicitacaostatus', ['idsolicitacaostatus'], {})
@Index('ftslctctndimentoipeafkftslctcatendimentoipeaidunidadefederativa', ['idunidadefederativa'], {})
@Index('ftslctctendimentoipeafkftslctcoatendimentoipeaidunidadenacional', ['idunidadenacional'], {})
@Index('ftslctctndimentoipeafkftslctctendimentoipeaidunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ftslctctendimentoipeafkftslctcoatendimentoipeaidunidaderegional', ['idunidaderegional'], {})
@Entity('fatosolicitacaoatendimentoipea', { schema: 'public' })
export class Fatosolicitacaoatendimentoipea {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'iditemmetaregionalipea', nullable: true })
  iditemmetaregionalipea: number | null;

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

  @ManyToOne(() => Apl, (apl) => apl.fatosolicitacaoatendimentoipeas)
  @JoinColumn([{ name: 'idapl', referencedColumnName: 'id' }])
  idapl2: Apl;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatosolicitacaoatendimentoipeas)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatosolicitacaoatendimentoipeas)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Setor, (setor) => setor.fatosolicitacaoatendimentoipeas)
  @JoinColumn([{ name: 'idsetor', referencedColumnName: 'id' }])
  idsetor2: Setor;

  @ManyToOne(() => Solicitacaostatus, (solicitacaostatus) => solicitacaostatus.fatosolicitacaoatendimentoipeas)
  @JoinColumn([{ name: 'idsolicitacaostatus', referencedColumnName: 'id' }])
  idsolicitacaostatus2: Solicitacaostatus;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatosolicitacaoatendimentoipeas)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatosolicitacaoatendimentoipeas)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatosolicitacaoatendimentoipeas2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatosolicitacaoatendimentoipeas3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
