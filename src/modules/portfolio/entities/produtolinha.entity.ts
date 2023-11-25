import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimento } from './Atendimento';
import { Despesa } from './Despesa';
import { Fatoatendimento } from './Fatoatendimento';
import { Fatodespesa } from './Fatodespesa';
import { Fatoproducaoapropriada } from './Fatoproducaoapropriada';
import { Fatoproducaoapropriadametrologia } from './Fatoproducaoapropriadametrologia';
import { Fatoreceitaapropriada } from './Fatoreceitaapropriada';
import { Fatoreceitacompetencia } from './Fatoreceitacompetencia';
import { Fatoresultado } from './Fatoresultado';
import { Fatoresultadocompetencia } from './Fatoresultadocompetencia';
import { Fatostatusatendimento } from './Fatostatusatendimento';
import { Metafinanceira } from './Metafinanceira';
import { Producao } from './Producao';
import { Produtocategoria } from './Produtocategoria';
import { Receita } from './Receita';
import { Relatoriodn } from './Relatoriodn';
import { Usuarioprodutolinha } from './Usuarioprodutolinha';

@Index('produtolinha_pkey', ['id'], { unique: true })
@Entity('produtolinha', { schema: 'public' })
export class Produtolinha {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'cr', nullable: true, length: 255 })
  cr: string | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('boolean', { name: 'isadefinir', nullable: true })
  isadefinir: boolean | null;

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

  @OneToMany(() => Atendimento, (atendimento) => atendimento.idprodutolinha2)
  atendimentos: Atendimento[];

  @OneToMany(() => Despesa, (despesa) => despesa.idprodutolinha2)
  despesas: Despesa[];

  @OneToMany(() => Fatoatendimento, (fatoatendimento) => fatoatendimento.idprodutolinha2)
  fatoatendimentos: Fatoatendimento[];

  @OneToMany(() => Fatodespesa, (fatodespesa) => fatodespesa.idprodutolinha2)
  fatodespesas: Fatodespesa[];

  @OneToMany(() => Fatoproducaoapropriada, (fatoproducaoapropriada) => fatoproducaoapropriada.idprodutolinha2)
  fatoproducaoapropriadas: Fatoproducaoapropriada[];

  @OneToMany(() => Fatoproducaoapropriadametrologia, (fatoproducaoapropriadametrologia) => fatoproducaoapropriadametrologia.idprodutolinha2)
  fatoproducaoapropriadametrologias: Fatoproducaoapropriadametrologia[];

  @OneToMany(() => Fatoreceitaapropriada, (fatoreceitaapropriada) => fatoreceitaapropriada.idprodutolinha2)
  fatoreceitaapropriadas: Fatoreceitaapropriada[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idprodutolinha2)
  fatoreceitacompetencias: Fatoreceitacompetencia[];

  @OneToMany(() => Fatoresultado, (fatoresultado) => fatoresultado.idprodutolinha2)
  fatoresultados: Fatoresultado[];

  @OneToMany(() => Fatoresultadocompetencia, (fatoresultadocompetencia) => fatoresultadocompetencia.idprodutolinha2)
  fatoresultadocompetencias: Fatoresultadocompetencia[];

  @OneToMany(() => Fatostatusatendimento, (fatostatusatendimento) => fatostatusatendimento.idprodutolinha2)
  fatostatusatendimentos: Fatostatusatendimento[];

  @OneToMany(() => Metafinanceira, (metafinanceira) => metafinanceira.idprodutolinha)
  metafinanceiras: Metafinanceira[];

  @OneToMany(() => Producao, (producao) => producao.idprodutolinha2)
  producaos: Producao[];

  @OneToMany(() => Produtocategoria, (produtocategoria) => produtocategoria.idprodutolinha2)
  produtocategorias: Produtocategoria[];

  @OneToMany(() => Receita, (receita) => receita.idprodutolinha2)
  receitas: Receita[];

  @OneToMany(() => Relatoriodn, (relatoriodn) => relatoriodn.idprodutolinha2)
  relatoriodns: Relatoriodn[];

  @OneToMany(() => Usuarioprodutolinha, (usuarioprodutolinha) => usuarioprodutolinha.idprodutolinha2)
  usuarioprodutolinhas: Usuarioprodutolinha[];
}
