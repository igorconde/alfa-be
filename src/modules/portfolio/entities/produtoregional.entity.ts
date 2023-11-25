import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Fatoatendimento } from '@modules/atendimento/entities/fatoatendimento.entity';
import { Fatostatusatendimento } from '@modules/atendimento/entities/fatostatusatendimento.entity';
import { Despesa } from '@modules/common/entities/despesa.entity';
import { Fatodespesa } from '@modules/common/entities/fatodespesa.entity';
import { Fatoresultado } from '@modules/metas/entities/fatoresultado.entity';
import { Fatoresultadocompetencia } from '@modules/metas/entities/fatoresultadocompetencia.entity';
import { Metafinanceira } from '@modules/metas/entities/metafinanceira.entity';
import { Produtonacional } from '@modules/portfolio/entities/produtonacional.entity';
import { Fatoproducaoapropriada } from '@modules/producao/entities/fatoproducaoapropriada.entity';
import { Fatoproducaoapropriadametrologia } from '@modules/producao/entities/fatoproducaoapropriadametrologia.entity';
import { Producao } from '@modules/producao/entities/producao.entity';
import { Fatoreceitaapropriada } from '@modules/receita/entities/fatoreceitaapropriada.entity';
import { Fatoreceitacompetencia } from '@modules/receita/entities/fatoreceitacompetencia.entity';
import { Receita } from '@modules/receita/entities/receita.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Colaboradorprodutoregional } from './Colaboradorprodutoregional';
';

@Index('produtoregional_pkey', ['id'], { unique: true })
@Index('iprodutoregionalfkprodutonacional', ['idprodutonacional'], {})
@Index('iprodutoregionalfkunidade', ['idunidade'], {})
@Entity('produtoregional', { schema: 'public' })
export class Produtoregional {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'cr', nullable: true, length: 255 })
  cr: string | null;

  @Column('boolean', { name: 'isativo', nullable: true })
  isativo: boolean | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('integer', { name: 'idprodutonacional', nullable: true })
  idprodutonacional: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('character varying', {
    name: 'codigointegracao',
    nullable: true,
    length: 255,
  })
  codigointegracao: string | null;

  @Column('boolean', { name: 'isadefinir', nullable: true })
  isadefinir: boolean | null;

  @Column('tsvector', { name: 'buscalivreprodutoregional', nullable: true })
  buscalivreprodutoregional: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'codigodn', nullable: true, length: 45 })
  codigodn: string | null;

  @Column('character varying', { name: 'motivo', nullable: true, length: 200 })
  motivo: string | null;

  @OneToMany(() => Atendimento, (atendimento) => atendimento.idprodutoregional2)
  atendimentos: Atendimento[];

  @OneToMany(() => Colaboradorprodutoregional, (colaboradorprodutoregional) => colaboradorprodutoregional.idprodutoregional2)
  colaboradorprodutoregionals: Colaboradorprodutoregional[];

  @OneToMany(() => Despesa, (despesa) => despesa.idprodutoregional2)
  despesas: Despesa[];

  @OneToMany(() => Fatoatendimento, (fatoatendimento) => fatoatendimento.idprodutoregional2)
  fatoatendimentos: Fatoatendimento[];

  @OneToMany(() => Fatodespesa, (fatodespesa) => fatodespesa.idprodutoregional2)
  fatodespesas: Fatodespesa[];

  @OneToMany(() => Fatoproducaoapropriada, (fatoproducaoapropriada) => fatoproducaoapropriada.idprodutoregional2)
  fatoproducaoapropriadas: Fatoproducaoapropriada[];

  @OneToMany(() => Fatoproducaoapropriadametrologia, (fatoproducaoapropriadametrologia) => fatoproducaoapropriadametrologia.idprodutoregional2)
  fatoproducaoapropriadametrologias: Fatoproducaoapropriadametrologia[];

  @OneToMany(() => Fatoreceitaapropriada, (fatoreceitaapropriada) => fatoreceitaapropriada.idprodutoregional2)
  fatoreceitaapropriadas: Fatoreceitaapropriada[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idprodutoregional2)
  fatoreceitacompetencias: Fatoreceitacompetencia[];

  @OneToMany(() => Fatoresultado, (fatoresultado) => fatoresultado.idprodutoregional2)
  fatoresultados: Fatoresultado[];

  @OneToMany(() => Fatoresultadocompetencia, (fatoresultadocompetencia) => fatoresultadocompetencia.idprodutoregional2)
  fatoresultadocompetencias: Fatoresultadocompetencia[];

  @OneToMany(() => Fatostatusatendimento, (fatostatusatendimento) => fatostatusatendimento.idprodutoregional2)
  fatostatusatendimentos: Fatostatusatendimento[];

  @OneToMany(() => Metafinanceira, (metafinanceira) => metafinanceira.idprodutoregional)
  metafinanceiras: Metafinanceira[];

  @OneToMany(() => Producao, (producao) => producao.idprodutoregional2)
  producaos: Producao[];

  @ManyToOne(() => Produtonacional, (produtonacional) => produtonacional.produtoregionals)
  @JoinColumn([{ name: 'idprodutonacional', referencedColumnName: 'id' }])
  idprodutonacional2: Produtonacional;

  @ManyToOne(() => Unidade, (unidade) => unidade.produtoregionals)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;

  @OneToMany(() => Receita, (receita) => receita.idprodutoregional2)
  receitas: Receita[];
}
