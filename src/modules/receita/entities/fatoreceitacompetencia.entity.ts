import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimento } from './Atendimento';
import { Calendario } from './Calendario';
import { Cliente } from './Cliente';
import { Especialidadeunidade } from './Especialidadeunidade';
import { Portecliente } from './Portecliente';
import { Produtocategoria } from './Produtocategoria';
import { Produtolinha } from './Produtolinha';
import { Produtonacional } from './Produtonacional';
import { Produtoregional } from './Produtoregional';
import { Regiao } from './Regiao';
import { Tipoprevisaoreceita } from './Tipoprevisaoreceita';
import { Unidadefederativa } from './Unidadefederativa';

@Index('fatoreceitacompetencia_pkey', ['id'], { unique: true })
@Index('fatoreceitacompetencia_fk_fatoreceitacompetencia_idatendimento', ['idatendimento'], {})
@Index('fatoreceitacompetencia_fk_fatoreceitacompetencia_idcalendario', ['idcalendario'], {})
@Index('ix_fatoreceitacompetencia_fk_fatoreceitacompetencia_idcliente', ['idcliente'], {})
@Index('ftrceitacompetenciafkftreceitacompetenciaidespecialidadeunidade', ['idespecialidadeunidade'], {})
@Index('fatoreceitacompetenciafk_fatoreceitacompetencia_idfontepagadora', ['idfontepagadora'], {})
@Index('fatoreceitacompetencia_fk_fatoreceitacompetencia_idportecliente', ['idportecliente'], {})
@Index('ftoreceitacompetenciafkfatoreceitacompetenciaidprodutocategoria', ['idprodutocategoria'], {})
@Index('fatoreceitacompetencia_fk_fatoreceitacompetencia_idprodutolinha', ['idprodutolinha'], {})
@Index('fatoreceitacompetenciafkfatoreceitacompetenciaidprodutonacional', ['idprodutonacional'], {})
@Index('fatoreceitacompetenciafkfatoreceitacompetenciaidprodutoregional', ['idprodutoregional'], {})
@Index('ix_fatoreceitacompetencia_fk_fatoreceitacompetencia_idregiao', ['idregiao'], {})
@Index('ftrceitacompetenciafkftoreceitacompetenciaidtipoprevisaoreceita', ['idtipoprevisaoreceita'], {})
@Index('ftreceitacompetenciafkfatoreceitacompetenciaidunidadefederativa', ['idunidadefederativa'], {})
@Index('fatoreceitacompetenciafkfatoreceitacompetenciaidunidadenacional', ['idunidadenacional'], {})
@Index('ftreceitacompetenciafkftoreceitacompetenciaidunidadeoperacional', ['idunidadeoperacional'], {})
@Index('fatoreceitacompetenciafkfatoreceitacompetenciaidunidaderegional', ['idunidaderegional'], {})
@Entity('fatoreceitacompetencia', { schema: 'public' })
export class Fatoreceitacompetencia {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idreceita', nullable: true })
  idreceita: number | null;

  @Column('integer', { name: 'idreceitafaturamento', nullable: true })
  idreceitafaturamento: number | null;

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

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @Column('integer', { name: 'idunidadenacional', nullable: true })
  idunidadenacional: number | null;

  @Column('integer', { name: 'idunidadeoperacional', nullable: true })
  idunidadeoperacional: number | null;

  @Column('integer', { name: 'idunidaderegional', nullable: true })
  idunidaderegional: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.fatoreceitacompetencias)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatoreceitacompetencias)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatoreceitacompetencias)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Especialidadeunidade, (especialidadeunidade) => especialidadeunidade.fatoreceitacompetencias)
  @JoinColumn([{ name: 'idespecialidadeunidade', referencedColumnName: 'id' }])
  idespecialidadeunidade2: Especialidadeunidade;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatoreceitacompetencias2)
  @JoinColumn([{ name: 'idfontepagadora', referencedColumnName: 'id' }])
  idfontepagadora2: Cliente;

  @ManyToOne(() => Portecliente, (portecliente) => portecliente.fatoreceitacompetencias)
  @JoinColumn([{ name: 'idportecliente', referencedColumnName: 'id' }])
  idportecliente2: Portecliente;

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.fatoreceitacompetencias)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria2: Produtocategoria;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.fatoreceitacompetencias)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Produtonacional, (produtonacional) => produtonacional.fatoreceitacompetencias)
  @JoinColumn([{ name: 'idprodutonacional', referencedColumnName: 'id' }])
  idprodutonacional2: Produtonacional;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.fatoreceitacompetencias)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;

  @ManyToOne(() => Regiao, (regiao) => regiao.fatoreceitacompetencias)
  @JoinColumn([{ name: 'idregiao', referencedColumnName: 'id' }])
  idregiao2: Regiao;

  @ManyToOne(() => Tipoprevisaoreceita, (tipoprevisaoreceita) => tipoprevisaoreceita.fatoreceitacompetencias)
  @JoinColumn([{ name: 'idtipoprevisaoreceita', referencedColumnName: 'id' }])
  idtipoprevisaoreceita2: Tipoprevisaoreceita;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatoreceitacompetencias)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoreceitacompetencias)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoreceitacompetencias2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoreceitacompetencias3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
