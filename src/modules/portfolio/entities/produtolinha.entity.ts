import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Fatoatendimento } from '@modules/atendimento/entities/fatoatendimento.entity';
import { Fatostatusatendimento } from '@modules/atendimento/entities/fatostatusatendimento.entity';
import { Despesa } from '@modules/common/entities/despesa.entity';
import { Fatodespesa } from '@modules/common/entities/fatodespesa.entity';
import { Relatoriodn } from '@modules/common/entities/relatoriodn.entity';
import { Fatoresultado } from '@modules/metas/entities/fatoresultado.entity';
import { Fatoresultadocompetencia } from '@modules/metas/entities/fatoresultadocompetencia.entity';
import { Metafinanceira } from '@modules/metas/entities/metafinanceira.entity';
import { Produtocategoria } from '@modules/portfolio/entities/produtocategoria.entity';
import { Fatoproducaoapropriada } from '@modules/producao/entities/fatoproducaoapropriada.entity';
import { Fatoproducaoapropriadametrologia } from '@modules/producao/entities/fatoproducaoapropriadametrologia.entity';
import { Producao } from '@modules/producao/entities/producao.entity';
import { Fatoreceitaapropriada } from '@modules/receita/entities/fatoreceitaapropriada.entity';
import { Fatoreceitacompetencia } from '@modules/receita/entities/fatoreceitacompetencia.entity';
import { Receita } from '@modules/receita/entities/receita.entity';
import { Usuarioprodutolinha } from '@modules/usuario/entities/usuario-produto-linha.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
