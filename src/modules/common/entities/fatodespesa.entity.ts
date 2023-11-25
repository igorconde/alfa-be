import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Produtoregional } from '@modules/portfolio/entities/produtoregional.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Especialidadeunidade } from './Especialidadeunidade';
import { Produtocategoria } from './Produtocategoria';
import { Produtolinha } from './Produtolinha';
import { Produtonacional } from './Produtonacional';
import { Regiao } from './Regiao';

@Index('fatodespesa_pkey', ['id'], { unique: true })
@Index('ifatodespesafkcalendario', ['idcalendario'], {})
@Index('ifatodespesafkespecialidadeunidade', ['idespecialidadeunidade'], {})
@Index('ifatodespesafkprodutocategoria', ['idprodutocategoria'], {})
@Index('ifatodespesafkprodutolinha', ['idprodutolinha'], {})
@Index('ifatodespesafkprodutonacional', ['idprodutonacional'], {})
@Index('ifatodespesafkprodutoregional', ['idprodutoregional'], {})
@Index('ifatodespesafkregiao', ['idregiao'], {})
@Index('ifatodespesafkunidadefederativa', ['idunidadefederativa'], {})
@Index('ifatodespesafkunidadenacional', ['idunidadenacional'], {})
@Index('ifatodespesafkunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ifatodespesafkunidaderegional', ['idunidaderegional'], {})
@Entity('fatodespesa', { schema: 'public' })
export class Fatodespesa {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'iddespesa', nullable: true })
  iddespesa: number | null;

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

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatodespesas)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Especialidadeunidade, (especialidadeunidade) => especialidadeunidade.fatodespesas)
  @JoinColumn([{ name: 'idespecialidadeunidade', referencedColumnName: 'id' }])
  idespecialidadeunidade2: Especialidadeunidade;

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.fatodespesas)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria2: Produtocategoria;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.fatodespesas)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Produtonacional, (produtonacional) => produtonacional.fatodespesas)
  @JoinColumn([{ name: 'idprodutonacional', referencedColumnName: 'id' }])
  idprodutonacional2: Produtonacional;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.fatodespesas)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;

  @ManyToOne(() => Regiao, (regiao) => regiao.fatodespesas)
  @JoinColumn([{ name: 'idregiao', referencedColumnName: 'id' }])
  idregiao2: Regiao;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatodespesas)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatodespesas2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatodespesas3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
