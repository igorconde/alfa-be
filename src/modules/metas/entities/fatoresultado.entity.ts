import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Especialidadeunidade } from './Especialidadeunidade';
import { Produtocategoria } from './Produtocategoria';
import { Produtolinha } from './Produtolinha';
import { Produtonacional } from './Produtonacional';
import { Produtoregional } from './Produtoregional';
import { Regiao } from './Regiao';

@Index('fatoresultado_pkey', ['id'], { unique: true })
@Index('ifatoresultadofkcalendario', ['idcalendario'], {})
@Index('ifatoresultadofkespecialidadeunidade', ['idespecialidadeunidade'], {})
@Index('ifatoresultadofkprodutocategoria', ['idprodutocategoria'], {})
@Index('ifatoresultadofkprodutolinha', ['idprodutolinha'], {})
@Index('ifatoresultadofkprodutonacional', ['idprodutonacional'], {})
@Index('ifatoresultadofkprodutoregional', ['idprodutoregional'], {})
@Index('ifatoresultadofkregiao', ['idregiao'], {})
@Index('ifatoresultadofkunidadefederativa', ['idunidadefederativa'], {})
@Index('ifatoresultadofkunidadenacional', ['idunidadenacional'], {})
@Index('ifatoresultadofkunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ifatoresultadofkunidaderegional', ['idunidaderegional'], {})
@Entity('fatoresultado', { schema: 'public' })
export class Fatoresultado {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idobjeto', nullable: true })
  idobjeto: number | null;

  @Column('double precision', {
    name: 'valordespesaprevisto',
    nullable: true,
    precision: 53,
  })
  valordespesaprevisto: number | null;

  @Column('double precision', {
    name: 'valordespesarealizado',
    nullable: true,
    precision: 53,
  })
  valordespesarealizado: number | null;

  @Column('double precision', {
    name: 'valorreceitaprevisto',
    nullable: true,
    precision: 53,
  })
  valorreceitaprevisto: number | null;

  @Column('double precision', {
    name: 'valorreceitarealizado',
    nullable: true,
    precision: 53,
  })
  valorreceitarealizado: number | null;

  @Column('integer', { name: 'idcalendario', nullable: true })
  idcalendario: number | null;

  @Column('integer', { name: 'idespecialidadeunidade', nullable: true })
  idespecialidadeunidade: number | null;

  @Column('integer', { name: 'idprodutocategoria', nullable: true })
  idprodutocategoria: number | null;

  @Column('integer', { name: 'idprodutolinha', nullable: true })
  idprodutolinha: number | null;

  @Column('integer', { name: 'idprodutonacional', nullable: true })
  idprodutonacional: number | null;

  @Column('integer', { name: 'idprodutoregional', nullable: true })
  idprodutoregional: number | null;

  @Column('integer', { name: 'idregiao', nullable: true })
  idregiao: number | null;

  @Column('integer', { name: 'idunidadenacional', nullable: true })
  idunidadenacional: number | null;

  @Column('integer', { name: 'idunidadeoperacional', nullable: true })
  idunidadeoperacional: number | null;

  @Column('integer', { name: 'idunidaderegional', nullable: true })
  idunidaderegional: number | null;

  @Column('integer', { name: 'iddespesa', nullable: true })
  iddespesa: number | null;

  @Column('integer', { name: 'idreceita', nullable: true })
  idreceita: number | null;

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @Column('integer', { name: 'idreceitaapropriada', nullable: true })
  idreceitaapropriada: number | null;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatoresultados)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Especialidadeunidade, (especialidadeunidade) => especialidadeunidade.fatoresultados)
  @JoinColumn([{ name: 'idespecialidadeunidade', referencedColumnName: 'id' }])
  idespecialidadeunidade2: Especialidadeunidade;

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.fatoresultados)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria2: Produtocategoria;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.fatoresultados)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Produtonacional, (produtonacional) => produtonacional.fatoresultados)
  @JoinColumn([{ name: 'idprodutonacional', referencedColumnName: 'id' }])
  idprodutonacional2: Produtonacional;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.fatoresultados)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;

  @ManyToOne(() => Regiao, (regiao) => regiao.fatoresultados)
  @JoinColumn([{ name: 'idregiao', referencedColumnName: 'id' }])
  idregiao2: Regiao;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoresultados)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoresultados2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoresultados3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
