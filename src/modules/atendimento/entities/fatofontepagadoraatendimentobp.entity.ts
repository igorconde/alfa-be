import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Unidadefederativa } from '@modules/administracao/entities/unidadefederativa.entity';
import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Apl } from '@modules/common/entities/apl.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Setor } from './setor.entity';
import { Solicitacaostatus } from './solicitacaostatus.entity';

@Index('fatofontepagadoraatendimentobp_pkey', ['id'], { unique: true })
@Index('ftfntepagadoraatendimentobpfkftofontepagadoraatendimentobpidapl', ['idapl'], {})
@Index('ftfntpgdoraatendimentobpfkftfntpgadoraatendimentobpidcalendario', ['idcalendario'], {})
@Index('ftfntpgadoraatendimentobpfkftfntepagadoraatendimentobpidcliente', ['idcliente'], {})
@Index('ftfntpgdratendimentobpfkftfntpgdoraatendimentobpidfontepagadora', ['idfontepagadora'], {})
@Index('ftfntepagadoraatendimentobpfkftfntepagadoraatendimentobpidsetor', ['idsetor'], {})
@Index('ftfntpgdrtndimentobpfkftfntpgdratendimentobpidsolicitacaostatus', ['idsolicitacaostatus'], {})
@Index('ftfntpgdrtndimentobpfkftfntpgdratendimentobpidunidadefederativa', ['idunidadefederativa'], {})
@Index('ftfntpgdrtendimentobpfkftfntpgdraatendimentobpidunidadenacional', ['idunidadenacional'], {})
@Index('ftfntpgdrtndimentobpfkftfntpgdrtendimentobpidunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ftfntpgdrtendimentobpfkftfntpgdraatendimentobpidunidaderegional', ['idunidaderegional'], {})
@Entity('fatofontepagadoraatendimentobp', { schema: 'public' })
export class Fatofontepagadoraatendimentobp {
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

  @ManyToOne(() => Apl, (apl) => apl.fatofontepagadoraatendimentobps)
  @JoinColumn([{ name: 'idapl', referencedColumnName: 'id' }])
  idapl2: Apl;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatofontepagadoraatendimentobps)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatofontepagadoraatendimentobps)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatofontepagadoraatendimentobps2)
  @JoinColumn([{ name: 'idfontepagadora', referencedColumnName: 'id' }])
  idfontepagadora2: Cliente;

  @ManyToOne(() => Setor, (setor) => setor.fatofontepagadoraatendimentobps)
  @JoinColumn([{ name: 'idsetor', referencedColumnName: 'id' }])
  idsetor2: Setor;

  @ManyToOne(() => Solicitacaostatus, (solicitacaostatus) => solicitacaostatus.fatofontepagadoraatendimentobps)
  @JoinColumn([{ name: 'idsolicitacaostatus', referencedColumnName: 'id' }])
  idsolicitacaostatus2: Solicitacaostatus;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatofontepagadoraatendimentobps)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatofontepagadoraatendimentobps)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatofontepagadoraatendimentobps2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatofontepagadoraatendimentobps3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
