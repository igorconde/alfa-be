import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Calendario } from './Calendario';
import { Cliente } from './Cliente';
import { Solicitacaostatus } from './Solicitacaostatus';
import { Unidadefederativa } from './Unidadefederativa';

@Index('fatosolicitacaoatendimentoia_pkey', ['id'], { unique: true })
@Index('ftslcitacaoatendimentoiafkftslicitacaoatendimentoiaidcalendario', ['idcalendario'], {})
@Index('ftslicitacaoatendimentoiafkftosolicitacaoatendimentoiaidcliente', ['idcliente'], {})
@Index('ftslctcatendimentoiafkftslctcaoatendimentoiaidsolicitacaostatus', ['idsolicitacaostatus'], {})
@Index('ftslctcatendimentoiafkftslctcaoatendimentoiaidunidadefederativa', ['idunidadefederativa'], {})
@Index('ftslctcoatendimentoiafkftslctacaoatendimentoiaidunidadenacional', ['idunidadenacional'], {})
@Index('ftslctctendimentoiafkftslctcaoatendimentoiaidunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ftslctcoatendimentoiafkftslctacaoatendimentoiaidunidaderegional', ['idunidaderegional'], {})
@Entity('fatosolicitacaoatendimentoia', { schema: 'public' })
export class Fatosolicitacaoatendimentoia {
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

  @Column('integer', { name: 'iditemmetaregional', nullable: true })
  iditemmetaregional: number | null;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatosolicitacaoatendimentoias)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatosolicitacaoatendimentoias)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Solicitacaostatus, (solicitacaostatus) => solicitacaostatus.fatosolicitacaoatendimentoias)
  @JoinColumn([{ name: 'idsolicitacaostatus', referencedColumnName: 'id' }])
  idsolicitacaostatus2: Solicitacaostatus;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatosolicitacaoatendimentoias)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatosolicitacaoatendimentoias)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatosolicitacaoatendimentoias2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatosolicitacaoatendimentoias3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
