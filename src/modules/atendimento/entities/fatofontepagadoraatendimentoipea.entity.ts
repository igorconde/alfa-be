import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Unidadefederativa } from '@modules/administracao/entities/unidadefederativa.entity';
import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Apl } from './Apl';
import { Setor } from './Setor';
import { Solicitacaostatus } from './Solicitacaostatus';

@Index('fatofontepagadoraatendimentoipea_pkey', ['id'], { unique: true })
@Index('ftfntpgadoraatendimentoipeafkftfntepagadoraatendimentoipeaidapl', ['idapl'], {})
@Index('ftfntpgdratendimentoipeafkftfntpgdraatendimentoipeaidcalendario', ['idcalendario'], {})
@Index('ftfntpgdraatendimentoipeafkftfntpgadoraatendimentoipeaidcliente', ['idcliente'], {})
@Index('ftfntpgdrtndimentoipeafkftfntpgdratendimentoipeaidfontepagadora', ['idfontepagadora'], {})
@Index('ftfntpgdoraatendimentoipeafkftfntpagadoraatendimentoipeaidsetor', ['idsetor'], {})
@Index('ftfntpgdrtndmntoipeafkftfntpgdrtndimentoipeaidsolicitacaostatus', ['idsolicitacaostatus'], {})
@Index('ftfntpgdrtndmntoipeafkftfntpgdrtndimentoipeaidunidadefederativa', ['idunidadefederativa'], {})
@Index('ftfntpgdrtndimentoipeafkftfntpgdrtndimentoipeaidunidadenacional', ['idunidadenacional'], {})
@Index('ftfntpgdrtndmntoipeafkftfntpgdrtndmentoipeaidunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ftfntpgdrtndimentoipeafkftfntpgdrtndimentoipeaidunidaderegional', ['idunidaderegional'], {})
@Entity('fatofontepagadoraatendimentoipea', { schema: 'public' })
export class Fatofontepagadoraatendimentoipea {
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

  @Column('integer', { name: 'idapl', nullable: true })
  idapl: number | null;

  @Column('integer', { name: 'idcalendario', nullable: true })
  idcalendario: number | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @Column('integer', { name: 'idfontepagadora', nullable: true })
  idfontepagadora: number | null;

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

  @ManyToOne(() => Apl, (apl) => apl.fatofontepagadoraatendimentoipeas)
  @JoinColumn([{ name: 'idapl', referencedColumnName: 'id' }])
  idapl2: Apl;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatofontepagadoraatendimentoipeas)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatofontepagadoraatendimentoipeas)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatofontepagadoraatendimentoipeas2)
  @JoinColumn([{ name: 'idfontepagadora', referencedColumnName: 'id' }])
  idfontepagadora2: Cliente;

  @ManyToOne(() => Setor, (setor) => setor.fatofontepagadoraatendimentoipeas)
  @JoinColumn([{ name: 'idsetor', referencedColumnName: 'id' }])
  idsetor2: Setor;

  @ManyToOne(() => Solicitacaostatus, (solicitacaostatus) => solicitacaostatus.fatofontepagadoraatendimentoipeas)
  @JoinColumn([{ name: 'idsolicitacaostatus', referencedColumnName: 'id' }])
  idsolicitacaostatus2: Solicitacaostatus;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatofontepagadoraatendimentoipeas)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatofontepagadoraatendimentoipeas)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatofontepagadoraatendimentoipeas2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatofontepagadoraatendimentoipeas3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
