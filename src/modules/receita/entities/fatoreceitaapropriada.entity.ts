import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from './Cliente';
import { Especialidadeunidade } from './Especialidadeunidade';
import { Portecliente } from './Portecliente';
import { Produtocategoria } from './Produtocategoria';
import { Produtolinha } from './Produtolinha';
import { Produtonacional } from './Produtonacional';
import { Produtoregional } from './Produtoregional';
import { Regiao } from './Regiao';
import { Tipoprevisaoreceita } from './Tipoprevisaoreceita';

@Index('fatoreceitaapropriada_pkey', ['id'], { unique: true })
@Index('ifatoreceitaapropriadafkatendimento', ['idatendimento'], {})
@Index('ifatoreceitaapropriadafkcalendario', ['idcalendario'], {})
@Index('ifatoreceitaapropriadafkcliente', ['idcliente'], {})
@Index('ifatoreceitaapropriadafkespecialidadeunidade', ['idespecialidadeunidade'], {})
@Index('ifatoreceitaapropriadafkfontepagadora', ['idfontepagadora'], {})
@Index('ifatoreceitaapropriadafkportecliente', ['idportecliente'], {})
@Index('ifatoreceitaapropriadafkprodutocategoria', ['idprodutocategoria'], {})
@Index('ifatoreceitaapropriadafkprodutolinha', ['idprodutolinha'], {})
@Index('ifatoreceitaapropriadafkprodutonacional', ['idprodutonacional'], {})
@Index('ifatoreceitaapropriadafkprodutoregional', ['idprodutoregional'], {})
@Index('ifatoreceitaapropriadafkregiao', ['idregiao'], {})
@Index('ifatoreceitaapropriadafktipoprevisaoreceita', ['idtipoprevisaoreceita'], {})
@Index('ifatoreceitaapropriadafkunidadefederativa', ['idunidadefederativa'], {})
@Index('ifatoreceitaapropriadafkunidadenacional', ['idunidadenacional'], {})
@Index('ifatoreceitaapropriadafkunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ifatoreceitaapropriadafkunidaderegional', ['idunidaderegional'], {})
@Entity('fatoreceitaapropriada', { schema: 'public' })
export class Fatoreceitaapropriada {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idreceitaapropriada', nullable: true })
  idreceitaapropriada: number | null;

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

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idcalendario', nullable: true })
  idcalendario: number | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @Column('integer', { name: 'idespecialidadeunidade', nullable: true })
  idespecialidadeunidade: number | null;

  @Column('integer', { name: 'idfontepagadora', nullable: true })
  idfontepagadora: number | null;

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

  @Column('integer', { name: 'idtipoprevisaoreceita', nullable: true })
  idtipoprevisaoreceita: number | null;

  @Column('integer', { name: 'idunidadenacional', nullable: true })
  idunidadenacional: number | null;

  @Column('integer', { name: 'idunidadeoperacional', nullable: true })
  idunidadeoperacional: number | null;

  @Column('integer', { name: 'idunidaderegional', nullable: true })
  idunidaderegional: number | null;

  @Column('integer', { name: 'idreceita', nullable: true })
  idreceita: number | null;

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.fatoreceitaapropriadas)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatoreceitaapropriadas)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatoreceitaapropriadas)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Especialidadeunidade, (especialidadeunidade) => especialidadeunidade.fatoreceitaapropriadas)
  @JoinColumn([{ name: 'idespecialidadeunidade', referencedColumnName: 'id' }])
  idespecialidadeunidade2: Especialidadeunidade;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatoreceitaapropriadas2)
  @JoinColumn([{ name: 'idfontepagadora', referencedColumnName: 'id' }])
  idfontepagadora2: Cliente;

  @ManyToOne(() => Portecliente, (portecliente) => portecliente.fatoreceitaapropriadas)
  @JoinColumn([{ name: 'idportecliente', referencedColumnName: 'id' }])
  idportecliente2: Portecliente;

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.fatoreceitaapropriadas)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria2: Produtocategoria;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.fatoreceitaapropriadas)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Produtonacional, (produtonacional) => produtonacional.fatoreceitaapropriadas)
  @JoinColumn([{ name: 'idprodutonacional', referencedColumnName: 'id' }])
  idprodutonacional2: Produtonacional;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.fatoreceitaapropriadas)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;

  @ManyToOne(() => Regiao, (regiao) => regiao.fatoreceitaapropriadas)
  @JoinColumn([{ name: 'idregiao', referencedColumnName: 'id' }])
  idregiao2: Regiao;

  @ManyToOne(() => Tipoprevisaoreceita, (tipoprevisaoreceita) => tipoprevisaoreceita.fatoreceitaapropriadas)
  @JoinColumn([{ name: 'idtipoprevisaoreceita', referencedColumnName: 'id' }])
  idtipoprevisaoreceita2: Tipoprevisaoreceita;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoreceitaapropriadas)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoreceitaapropriadas2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoreceitaapropriadas3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
