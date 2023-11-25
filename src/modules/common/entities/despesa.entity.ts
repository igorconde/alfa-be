import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Produtoregional } from '@modules/portfolio/entities/produtoregional.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produtocategoria } from './Produtocategoria';
import { Produtolinha } from './Produtolinha';

@Index('despesa_pkey', ['id'], { unique: true })
@Index('idespesafkprodutocategoria', ['idprodutocategoria'], {})
@Index('idespesafkprodutolinha', ['idprodutolinha'], {})
@Index('idespesafkprodutoregional', ['idprodutoregional'], {})
@Index('idespesafkregional', ['idregional'], {})
@Index('idespesafkunidade', ['idunidade'], {})
@Entity('despesa', { schema: 'public' })
export class Despesa {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ano', nullable: true })
  ano: number | null;

  @Column('integer', { name: 'mes', nullable: true })
  mes: number | null;

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

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.despesas)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria2: Produtocategoria;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.despesas)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.despesas)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;

  @ManyToOne(() => Unidade, (unidade) => unidade.despesas)
  @JoinColumn([{ name: 'idregional', referencedColumnName: 'id' }])
  idregional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.despesas2)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
