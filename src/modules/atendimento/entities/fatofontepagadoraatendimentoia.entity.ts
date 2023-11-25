import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from './Cliente';
import { Solicitacaostatus } from './Solicitacaostatus';
import { Unidadefederativa } from './Unidadefederativa';

@Index('fatofontepagadoraatendimentoia_pkey', ['id'], { unique: true })
@Index('ftfntpgdoraatendimentoiafkftfntpgadoraatendimentoiaidcalendario', ['idcalendario'], {})
@Index('ftfntpgadoraatendimentoiafkftfntepagadoraatendimentoiaidcliente', ['idcliente'], {})
@Index('ftfntpgdratendimentoiafkftfntpgdoraatendimentoiaidfontepagadora', ['idfontepagadora'], {})
@Index('ftfntpgdrtndimentoiafkftfntpgdratendimentoiaidsolicitacaostatus', ['idsolicitacaostatus'], {})
@Index('ftfntpgdrtndimentoiafkftfntpgdratendimentoiaidunidadefederativa', ['idunidadefederativa'], {})
@Index('ftfntpgdrtendimentoiafkftfntpgdraatendimentoiaidunidadenacional', ['idunidadenacional'], {})
@Index('ftfntpgdrtndimentoiafkftfntpgdrtendimentoiaidunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ftfntpgdrtendimentoiafkftfntpgdraatendimentoiaidunidaderegional', ['idunidaderegional'], {})
@Entity('fatofontepagadoraatendimentoia', { schema: 'public' })
export class Fatofontepagadoraatendimentoia {
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

  @Column('double precision', {
    name: 'vlrfinanceiro',
    nullable: true,
    precision: 53,
  })
  vlrfinanceiro: number | null;

  @Column('integer', { name: 'idcalendario', nullable: true })
  idcalendario: number | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @Column('integer', { name: 'idfontepagadora', nullable: true })
  idfontepagadora: number | null;

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

  @ManyToOne(() => Calendario, (calendario) => calendario.fatofontepagadoraatendimentoias)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatofontepagadoraatendimentoias)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatofontepagadoraatendimentoias2)
  @JoinColumn([{ name: 'idfontepagadora', referencedColumnName: 'id' }])
  idfontepagadora2: Cliente;

  @ManyToOne(() => Solicitacaostatus, (solicitacaostatus) => solicitacaostatus.fatofontepagadoraatendimentoias)
  @JoinColumn([{ name: 'idsolicitacaostatus', referencedColumnName: 'id' }])
  idsolicitacaostatus2: Solicitacaostatus;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatofontepagadoraatendimentoias)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatofontepagadoraatendimentoias)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatofontepagadoraatendimentoias2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatofontepagadoraatendimentoias3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
