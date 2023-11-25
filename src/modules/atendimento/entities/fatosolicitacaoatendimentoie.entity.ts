import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Unidadefederativa } from '@modules/administracao/entities/unidadefederativa.entity';
import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Apl } from './Apl';
import { Setor } from './Setor';
import { Solicitacaostatus } from './Solicitacaostatus';

@Index('fatosolicitacaoatendimentoie_pkey', ['id'], { unique: true })
@Entity('fatosolicitacaoatendimentoie', { schema: 'public' })
export class Fatosolicitacaoatendimentoie {
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

  @Column('integer', { name: 'iditemmetaregionalie', nullable: true })
  iditemmetaregionalie: number | null;

  @ManyToOne(() => Apl, (apl) => apl.fatosolicitacaoatendimentoies)
  @JoinColumn([{ name: 'idapl', referencedColumnName: 'id' }])
  idapl: Apl;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatosolicitacaoatendimentoies)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatosolicitacaoatendimentoies)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente: Cliente;

  @ManyToOne(() => Setor, (setor) => setor.fatosolicitacaoatendimentoies)
  @JoinColumn([{ name: 'idsetor', referencedColumnName: 'id' }])
  idsetor: Setor;

  @ManyToOne(() => Solicitacaostatus, (solicitacaostatus) => solicitacaostatus.fatosolicitacaoatendimentoies)
  @JoinColumn([{ name: 'idsolicitacaostatus', referencedColumnName: 'id' }])
  idsolicitacaostatus: Solicitacaostatus;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatosolicitacaoatendimentoies)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatosolicitacaoatendimentoies)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatosolicitacaoatendimentoies2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatosolicitacaoatendimentoies3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional: Unidade;
}
