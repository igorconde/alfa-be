import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Produtoregional } from '@modules/portfolio/entities/produtoregional.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produtocategoria } from './Produtocategoria';
import { Produtolinha } from './Produtolinha';

@Index('receita_pkey', ['id'], { unique: true })
@Index('ireceitafkprodutocategoria', ['idprodutocategoria'], {})
@Index('ireceitafkprodutolinha', ['idprodutolinha'], {})
@Index('ireceitafkprodutoregional', ['idprodutoregional'], {})
@Index('ireceitafkregional', ['idregional'], {})
@Index('ireceitafkunidade', ['idunidade'], {})
@Entity('receita', { schema: 'public' })
export class Receita {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ano', nullable: true })
  ano: number | null;

  @Column('integer', { name: 'mes', nullable: true })
  mes: number | null;

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

  @Column('integer', { name: 'idprodutocategoria', nullable: true })
  idprodutocategoria: number | null;

  @Column('integer', { name: 'idprodutolinha', nullable: true })
  idprodutolinha: number | null;

  @Column('integer', { name: 'idprodutoregional', nullable: true })
  idprodutoregional: number | null;

  @Column('integer', { name: 'idregional', nullable: true })
  idregional: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.receitas)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria2: Produtocategoria;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.receitas)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.receitas)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;

  @ManyToOne(() => Unidade, (unidade) => unidade.receitas)
  @JoinColumn([{ name: 'idregional', referencedColumnName: 'id' }])
  idregional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.receitas2)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
