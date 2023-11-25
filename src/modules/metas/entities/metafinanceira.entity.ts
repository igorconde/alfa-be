import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Produtocategoria } from '@modules/portfolio/entities/produtocategoria.entity';
import { Produtoregional } from '@modules/portfolio/entities/produtoregional.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produtolinha } from './Produtolinha';

@Index('metafinanceira_pkey', ['id'], { unique: true })
@Entity('metafinanceira', { schema: 'public' })
export class Metafinanceira {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ano', nullable: true })
  ano: number | null;

  @Column('integer', { name: 'mes', nullable: true })
  mes: number | null;

  @Column('integer', { name: 'qtdeproducaoprevisto', nullable: true })
  qtdeproducaoprevisto: number | null;

  @Column('integer', { name: 'qtdeproducaorealizado', nullable: true })
  qtdeproducaorealizado: number | null;

  @Column('double precision', {
    name: 'vlrdespesaprevisto',
    nullable: true,
    precision: 53,
  })
  vlrdespesaprevisto: number | null;

  @Column('double precision', {
    name: 'vlrdespesarealizado',
    nullable: true,
    precision: 53,
  })
  vlrdespesarealizado: number | null;

  @Column('double precision', {
    name: 'vlrreceitaprevisto',
    nullable: true,
    precision: 53,
  })
  vlrreceitaprevisto: number | null;

  @Column('double precision', {
    name: 'vlrreceitarealizado',
    nullable: true,
    precision: 53,
  })
  vlrreceitarealizado: number | null;

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.metafinanceiras)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria: Produtocategoria;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.metafinanceiras)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha: Produtolinha;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.metafinanceiras)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional: Produtoregional;

  @ManyToOne(() => Unidade, (unidade) => unidade.metafinanceiras)
  @JoinColumn([{ name: 'idregional', referencedColumnName: 'id' }])
  idregional: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.metafinanceiras2)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade: Unidade;
}
