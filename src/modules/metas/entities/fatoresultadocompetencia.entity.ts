import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Calendario } from './Calendario';
import { Especialidadeunidade } from './Especialidadeunidade';
import { Produtocategoria } from './Produtocategoria';
import { Produtolinha } from './Produtolinha';
import { Produtonacional } from './Produtonacional';
import { Produtoregional } from './Produtoregional';
import { Regiao } from './Regiao';
import { Unidadefederativa } from './Unidadefederativa';

@Index('fatoresultadocompetencia_pkey', ['id'], { unique: true })
@Index('fatoresultadocompetenciafkfatoresultadocompetencia_idcalendario', ['idcalendario'], {})
@Index('ftrsltdocompetenciafkftrsltadocompetenciaidespecialidadeunidade', ['idespecialidadeunidade'], {})
@Index('ftrsultadocompetenciafkftresultadocompetenciaidprodutocategoria', ['idprodutocategoria'], {})
@Index('ftoresultadocompetenciafkfatoresultadocompetenciaidprodutolinha', ['idprodutolinha'], {})
@Index('ftrsultadocompetenciafkftoresultadocompetenciaidprodutonacional', ['idprodutonacional'], {})
@Index('ftrsultadocompetenciafkftoresultadocompetenciaidprodutoregional', ['idprodutoregional'], {})
@Index('fatoresultadocompetencia_fk_fatoresultadocompetencia_idregiao', ['idregiao'], {})
@Index('ftrsltadocompetenciafkftresultadocompetenciaidunidadefederativa', ['idunidadefederativa'], {})
@Index('ftrsultadocompetenciafkftoresultadocompetenciaidunidadenacional', ['idunidadenacional'], {})
@Index('ftrsltadocompetenciafkftrsultadocompetenciaidunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ftrsultadocompetenciafkftoresultadocompetenciaidunidaderegional', ['idunidaderegional'], {})
@Entity('fatoresultadocompetencia', { schema: 'public' })
export class Fatoresultadocompetencia {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'iddespesa', nullable: true })
  iddespesa: number | null;

  @Column('integer', { name: 'idreceita', nullable: true })
  idreceita: number | null;

  @Column('integer', { name: 'idreceitafaturamento', nullable: true })
  idreceitafaturamento: number | null;

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

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @Column('integer', { name: 'idunidadenacional', nullable: true })
  idunidadenacional: number | null;

  @Column('integer', { name: 'idunidadeoperacional', nullable: true })
  idunidadeoperacional: number | null;

  @Column('integer', { name: 'idunidaderegional', nullable: true })
  idunidaderegional: number | null;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatoresultadocompetencias)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Especialidadeunidade, (especialidadeunidade) => especialidadeunidade.fatoresultadocompetencias)
  @JoinColumn([{ name: 'idespecialidadeunidade', referencedColumnName: 'id' }])
  idespecialidadeunidade2: Especialidadeunidade;

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.fatoresultadocompetencias)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria2: Produtocategoria;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.fatoresultadocompetencias)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Produtonacional, (produtonacional) => produtonacional.fatoresultadocompetencias)
  @JoinColumn([{ name: 'idprodutonacional', referencedColumnName: 'id' }])
  idprodutonacional2: Produtonacional;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.fatoresultadocompetencias)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;

  @ManyToOne(() => Regiao, (regiao) => regiao.fatoresultadocompetencias)
  @JoinColumn([{ name: 'idregiao', referencedColumnName: 'id' }])
  idregiao2: Regiao;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatoresultadocompetencias)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoresultadocompetencias)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoresultadocompetencias2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoresultadocompetencias3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
