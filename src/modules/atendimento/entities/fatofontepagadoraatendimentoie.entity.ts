import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Unidadefederativa } from '@modules/administracao/entities/unidadefederativa.entity';
import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Apl } from '@modules/common/entities/apl.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Setor } from './setor.entity';
import { Solicitacaostatus } from './solicitacaostatus.entity';

@Index('fatofontepagadoraatendimentoie_pkey', ['id'], { unique: true })
@Entity('fatofontepagadoraatendimentoie', { schema: 'public' })
export class Fatofontepagadoraatendimentoie {
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

  @Column('integer', { name: 'qtde', nullable: true })
  qtde: number | null;

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

  @ManyToOne(() => Apl, (apl) => apl.fatofontepagadoraatendimentoies)
  @JoinColumn([{ name: 'idapl', referencedColumnName: 'id' }])
  idapl: Apl;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatofontepagadoraatendimentoies)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatofontepagadoraatendimentoies)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente: Cliente;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatofontepagadoraatendimentoies2)
  @JoinColumn([{ name: 'idfontepagadora', referencedColumnName: 'id' }])
  idfontepagadora: Cliente;

  @ManyToOne(() => Setor, (setor) => setor.fatofontepagadoraatendimentoies)
  @JoinColumn([{ name: 'idsetor', referencedColumnName: 'id' }])
  idsetor: Setor;

  @ManyToOne(() => Solicitacaostatus, (solicitacaostatus) => solicitacaostatus.fatofontepagadoraatendimentoies)
  @JoinColumn([{ name: 'idsolicitacaostatus', referencedColumnName: 'id' }])
  idsolicitacaostatus: Solicitacaostatus;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatofontepagadoraatendimentoies)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatofontepagadoraatendimentoies)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatofontepagadoraatendimentoies2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatofontepagadoraatendimentoies3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional: Unidade;
}
