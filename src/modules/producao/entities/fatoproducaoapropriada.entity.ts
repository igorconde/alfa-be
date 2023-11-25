import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimento } from './Atendimento';
import { Calendario } from './Calendario';
import { Cliente } from './Cliente';
import { Colaborador } from './Colaborador';
import { Especialidadeunidade } from './Especialidadeunidade';
import { Portecliente } from './Portecliente';
import { Produtocategoria } from './Produtocategoria';
import { Produtolinha } from './Produtolinha';
import { Produtonacional } from './Produtonacional';
import { Produtoregional } from './Produtoregional';
import { Regiao } from './Regiao';
import { Unidadefederativa } from './Unidadefederativa';

@Index('fatoproducaoapropriada_pkey', ['id'], { unique: true })
@Index('ifatoproducaoapropriadafkatendimento', ['idatendimento'], {})
@Index('ifatoproducaoapropriadafkcalendario', ['idcalendario'], {})
@Index('ifatoproducaoapropriadafkcliente', ['idcliente'], {})
@Index('ifatoproducaoapropriadafkcolaborador', ['idcolaborador'], {})
@Index('ifatoproducaoapropriadafkespecialidadeunidade', ['idespecialidadeunidade'], {})
@Index('ifatoproducaoapropriadafkportecliente', ['idportecliente'], {})
@Index('ifatoproducaoapropriadafkprodutocategoria', ['idprodutocategoria'], {})
@Index('ifatoproducaoapropriadafkprodutolinha', ['idprodutolinha'], {})
@Index('ifatoproducaoapropriadafkprodutonacional', ['idprodutonacional'], {})
@Index('ifatoproducaoapropriadafkprodutoregional', ['idprodutoregional'], {})
@Index('ifatoproducaoapropriadafkregiao', ['idregiao'], {})
@Index('ifatoproducaoapropriadafkunidadefederativa', ['idunidadefederativa'], {})
@Index('ifatoproducaoapropriadafkunidadenacional', ['idunidadenacional'], {})
@Index('ifatoproducaoapropriadafkunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ifatoproducaoapropriadafkunidaderegional', ['idunidaderegional'], {})
@Entity('fatoproducaoapropriada', { schema: 'public' })
export class Fatoproducaoapropriada {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idproducaoapropriada', nullable: true })
  idproducaoapropriada: number | null;

  @Column('character varying', {
    name: 'iscompartilhado',
    nullable: true,
    length: 255,
  })
  iscompartilhado: string | null;

  @Column('character varying', {
    name: 'isemrede',
    nullable: true,
    length: 255,
  })
  isemrede: string | null;

  @Column('character varying', {
    name: 'isvalorhora',
    nullable: true,
    length: 255,
  })
  isvalorhora: string | null;

  @Column('integer', { name: 'qtdeproducaoprevisto', nullable: true })
  qtdeproducaoprevisto: number | null;

  @Column('integer', { name: 'qtdeproducaorealizado', nullable: true })
  qtdeproducaorealizado: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idcalendario', nullable: true })
  idcalendario: number | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @Column('integer', { name: 'idcolaborador', nullable: true })
  idcolaborador: number | null;

  @Column('integer', { name: 'idespecialidadeunidade', nullable: true })
  idespecialidadeunidade: number | null;

  @Column('integer', { name: 'idportecliente', nullable: true })
  idportecliente: number | null;

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

  @Column('integer', { name: 'idproducao', nullable: true })
  idproducao: number | null;

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @Column('character varying', {
    name: 'isproducaoterceiro',
    nullable: true,
    length: 255,
  })
  isproducaoterceiro: string | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.fatoproducaoapropriadas)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatoproducaoapropriadas)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatoproducaoapropriadas)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.fatoproducaoapropriadas)
  @JoinColumn([{ name: 'idcolaborador', referencedColumnName: 'id' }])
  idcolaborador2: Colaborador;

  @ManyToOne(() => Especialidadeunidade, (especialidadeunidade) => especialidadeunidade.fatoproducaoapropriadas)
  @JoinColumn([{ name: 'idespecialidadeunidade', referencedColumnName: 'id' }])
  idespecialidadeunidade2: Especialidadeunidade;

  @ManyToOne(() => Portecliente, (portecliente) => portecliente.fatoproducaoapropriadas)
  @JoinColumn([{ name: 'idportecliente', referencedColumnName: 'id' }])
  idportecliente2: Portecliente;

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.fatoproducaoapropriadas)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria2: Produtocategoria;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.fatoproducaoapropriadas)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Produtonacional, (produtonacional) => produtonacional.fatoproducaoapropriadas)
  @JoinColumn([{ name: 'idprodutonacional', referencedColumnName: 'id' }])
  idprodutonacional2: Produtonacional;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.fatoproducaoapropriadas)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;

  @ManyToOne(() => Regiao, (regiao) => regiao.fatoproducaoapropriadas)
  @JoinColumn([{ name: 'idregiao', referencedColumnName: 'id' }])
  idregiao2: Regiao;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatoproducaoapropriadas)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoproducaoapropriadas)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoproducaoapropriadas2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoproducaoapropriadas3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
