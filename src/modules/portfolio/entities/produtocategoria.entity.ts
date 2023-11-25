import { Fatoatendimento } from '@modules/atendimento/entities/fatoatendimento.entity';
import { Fatostatusatendimento } from '@modules/atendimento/entities/fatostatusatendimento.entity';
import { Despesa } from '@modules/common/entities/despesa.entity';
import { Fatodespesa } from '@modules/common/entities/fatodespesa.entity';
import { Fatoresultado } from '@modules/metas/entities/fatoresultado.entity';
import { Fatoresultadocompetencia } from '@modules/metas/entities/fatoresultadocompetencia.entity';
import { Metafinanceira } from '@modules/metas/entities/metafinanceira.entity';
import { Produtolinha } from '@modules/portfolio/entities/produtolinha.entity';
import { Produtonacional } from '@modules/portfolio/entities/produtonacional.entity';
import { Fatoproducaoapropriada } from '@modules/producao/entities/fatoproducaoapropriada.entity';
import { Fatoproducaoapropriadametrologia } from '@modules/producao/entities/fatoproducaoapropriadametrologia.entity';
import { Producao } from '@modules/producao/entities/producao.entity';
import { Fatoreceitaapropriada } from '@modules/receita/entities/fatoreceitaapropriada.entity';
import { Fatoreceitacompetencia } from '@modules/receita/entities/fatoreceitacompetencia.entity';
import { Receita } from '@modules/receita/entities/receita.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('produtocategoria_pkey', ['id'], { unique: true })
@Index('iprodutocategoriafkprodutolinha', ['idprodutolinha'], {})
@Entity('produtocategoria', { schema: 'public' })
export class Produtocategoria {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', {
    name: 'numerocentroresponsabilidade',
    nullable: true,
    length: 255,
  })
  numerocentroresponsabilidade: string | null;

  @Column('integer', { name: 'idprodutolinha', nullable: true })
  idprodutolinha: number | null;

  @Column('boolean', { name: 'isadefinir', nullable: true })
  isadefinir: boolean | null;

  @Column('character varying', {
    name: 'labelnumerodeproducaoestimada',
    nullable: true,
    length: 255,
  })
  labelnumerodeproducaoestimada: string | null;

  @Column('character varying', {
    name: 'labelnumeroderelatorioestimado',
    nullable: true,
    length: 255,
  })
  labelnumeroderelatorioestimado: string | null;

  @Column('boolean', { name: 'isvisivel', nullable: true })
  isvisivel: boolean | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'codigodn', nullable: true, length: 45 })
  codigodn: string | null;

  @OneToMany(() => Despesa, (despesa) => despesa.idprodutocategoria2)
  despesas: Despesa[];

  @OneToMany(() => Fatoatendimento, (fatoatendimento) => fatoatendimento.idprodutocategoria2)
  fatoatendimentos: Fatoatendimento[];

  @OneToMany(() => Fatodespesa, (fatodespesa) => fatodespesa.idprodutocategoria2)
  fatodespesas: Fatodespesa[];

  @OneToMany(() => Fatoproducaoapropriada, (fatoproducaoapropriada) => fatoproducaoapropriada.idprodutocategoria2)
  fatoproducaoapropriadas: Fatoproducaoapropriada[];

  @OneToMany(() => Fatoproducaoapropriadametrologia, (fatoproducaoapropriadametrologia) => fatoproducaoapropriadametrologia.idprodutocategoria2)
  fatoproducaoapropriadametrologias: Fatoproducaoapropriadametrologia[];

  @OneToMany(() => Fatoreceitaapropriada, (fatoreceitaapropriada) => fatoreceitaapropriada.idprodutocategoria2)
  fatoreceitaapropriadas: Fatoreceitaapropriada[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idprodutocategoria2)
  fatoreceitacompetencias: Fatoreceitacompetencia[];

  @OneToMany(() => Fatoresultado, (fatoresultado) => fatoresultado.idprodutocategoria2)
  fatoresultados: Fatoresultado[];

  @OneToMany(() => Fatoresultadocompetencia, (fatoresultadocompetencia) => fatoresultadocompetencia.idprodutocategoria2)
  fatoresultadocompetencias: Fatoresultadocompetencia[];

  @OneToMany(() => Fatostatusatendimento, (fatostatusatendimento) => fatostatusatendimento.idprodutocategoria2)
  fatostatusatendimentos: Fatostatusatendimento[];

  @OneToMany(() => Metafinanceira, (metafinanceira) => metafinanceira.idprodutocategoria)
  metafinanceiras: Metafinanceira[];

  @OneToMany(() => Producao, (producao) => producao.idprodutocategoria2)
  producaos: Producao[];

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.produtocategorias)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @OneToMany(() => Produtonacional, (produtonacional) => produtonacional.idprodutocategoria2)
  produtonacionals: Produtonacional[];

  @OneToMany(() => Receita, (receita) => receita.idprodutocategoria2)
  receitas: Receita[];
}
