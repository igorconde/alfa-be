import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

@Index('fatoproducaoapropriadametrologia_pkey', ['id'], { unique: true })
@Index('ftprdcprpriadametrologiafkftprdcprpriadametrologiaidatendimento', ['idatendimento'], {})
@Index('ftprdcprpriadametrologiafkftprdcpropriadametrologiaidcalendario', ['idcalendario'], {})
@Index('ftprdcpropriadametrologiafkftprdcoapropriadametrologiaidcliente', ['idcliente'], {})
@Index('ftprdcprpriadametrologiafkftprdcprpriadametrologiaidcolaborador', ['idcolaborador'], {})
@Index('ftprdcprprdmtrlogiafkftprdcprprdmtrologiaidespecialidadeunidade', ['idespecialidadeunidade'], {})
@Index('ftprdcprpradametrologiafkftprdcprpriadametrologiaidportecliente', ['idportecliente'], {})
@Index('ftprdcprprdmetrologiafkftprdcprprdametrologiaidprodutocategoria', ['idprodutocategoria'], {})
@Index('ftprdcprpradametrologiafkftprdcprpriadametrologiaidprodutolinha', ['idprodutolinha'], {})
@Index('ftprdcprprdmetrologiafkftprdcprpradametrologiaidprodutonacional', ['idprodutonacional'], {})
@Index('ftprdcprprdmetrologiafkftprdcprpradametrologiaidprodutoregional', ['idprodutoregional'], {})
@Index('ftprdcpropriadametrologiafkftprdcaoapropriadametrologiaidregiao', ['idregiao'], {})
@Index('ftprdcprprdmtrologiafkftprdcprprdametrologiaidunidadefederativa', ['idunidadefederativa'], {})
@Index('ftprdcprprdmetrologiafkftprdcprpradametrologiaidunidadenacional', ['idunidadenacional'], {})
@Index('ftprdcprprdmtrologiafkftprdcprprdmetrologiaidunidadeoperacional', ['idunidadeoperacional'], {})
@Index('ftprdcprprdmetrologiafkftprdcprpradametrologiaidunidaderegional', ['idunidaderegional'], {})
@Entity('fatoproducaoapropriadametrologia', { schema: 'public' })
export class Fatoproducaoapropriadametrologia {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idproducao', nullable: true })
  idproducao: number | null;

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

  @Column('integer', { name: 'qtderelatorioprevisto', nullable: true })
  qtderelatorioprevisto: number | null;

  @Column('integer', { name: 'qtderelatoriorealizado', nullable: true })
  qtderelatoriorealizado: number | null;

  @Column('character varying', { name: 'tipo', nullable: true, length: 255 })
  tipo: string | null;

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

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @Column('integer', { name: 'idunidadenacional', nullable: true })
  idunidadenacional: number | null;

  @Column('integer', { name: 'idunidadeoperacional', nullable: true })
  idunidadeoperacional: number | null;

  @Column('integer', { name: 'idunidaderegional', nullable: true })
  idunidaderegional: number | null;

  @Column('character varying', {
    name: 'isproducaoterceiro',
    nullable: true,
    length: 255,
  })
  isproducaoterceiro: string | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.fatoproducaoapropriadametrologias)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatoproducaoapropriadametrologias)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Cliente, (cliente) => cliente.fatoproducaoapropriadametrologias)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.fatoproducaoapropriadametrologias)
  @JoinColumn([{ name: 'idcolaborador', referencedColumnName: 'id' }])
  idcolaborador2: Colaborador;

  @ManyToOne(() => Especialidadeunidade, (especialidadeunidade) => especialidadeunidade.fatoproducaoapropriadametrologias)
  @JoinColumn([{ name: 'idespecialidadeunidade', referencedColumnName: 'id' }])
  idespecialidadeunidade2: Especialidadeunidade;

  @ManyToOne(() => Portecliente, (portecliente) => portecliente.fatoproducaoapropriadametrologias)
  @JoinColumn([{ name: 'idportecliente', referencedColumnName: 'id' }])
  idportecliente2: Portecliente;

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.fatoproducaoapropriadametrologias)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria2: Produtocategoria;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.fatoproducaoapropriadametrologias)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Produtonacional, (produtonacional) => produtonacional.fatoproducaoapropriadametrologias)
  @JoinColumn([{ name: 'idprodutonacional', referencedColumnName: 'id' }])
  idprodutonacional2: Produtonacional;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.fatoproducaoapropriadametrologias)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;

  @ManyToOne(() => Regiao, (regiao) => regiao.fatoproducaoapropriadametrologias)
  @JoinColumn([{ name: 'idregiao', referencedColumnName: 'id' }])
  idregiao2: Regiao;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.fatoproducaoapropriadametrologias)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoproducaoapropriadametrologias)
  @JoinColumn([{ name: 'idunidadenacional', referencedColumnName: 'id' }])
  idunidadenacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoproducaoapropriadametrologias2)
  @JoinColumn([{ name: 'idunidadeoperacional', referencedColumnName: 'id' }])
  idunidadeoperacional2: Unidade;

  @ManyToOne(() => Unidade, (unidade) => unidade.fatoproducaoapropriadametrologias3)
  @JoinColumn([{ name: 'idunidaderegional', referencedColumnName: 'id' }])
  idunidaderegional2: Unidade;
}
