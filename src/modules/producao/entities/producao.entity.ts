import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Produtoregional } from '@modules/portfolio/entities/produtoregional.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produtocategoria } from './Produtocategoria';
import { Produtolinha } from './Produtolinha';

@Index('producao_pkey', ['id'], { unique: true })
@Index('iproducaofkprodutocategoria', ['idprodutocategoria'], {})
@Index('iproducaofkprodutolinha', ['idprodutolinha'], {})
@Index('iproducaofkprodutoregional', ['idprodutoregional'], {})
@Index('iproducaofkregional', ['idregional'], {})
@Index('iproducaofkunidade', ['idunidade'], {})
@Entity('producao', { schema: 'public' })
export class Producao {
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

  @Column('integer', { name: 'qtdeproducaoprevistom', nullable: true })
  qtdeproducaoprevistom: number | null;

  @Column('integer', { name: 'qtdeproducaorealizadom', nullable: true })
  qtdeproducaorealizadom: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.producaos)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria2: Produtocategoria;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.producaos)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.producaos)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;

  @ManyToOne(() => Unidade, (unidade) => unidade.producaos)
  @JoinColumn([{ name: 'idregional', referencedColumnName: 'id' }])
  idregional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.producaos2)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
