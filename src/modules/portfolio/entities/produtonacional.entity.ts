import { Produtoregional } from '@modules/portfolio/entities/produtoregional.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Constanteindicador } from './Constanteindicador';
import { Fase } from './Fase';
import { Fatoatendimento } from './Fatoatendimento';
import { Fatodespesa } from './Fatodespesa';
import { Fatoproducaoapropriada } from './Fatoproducaoapropriada';
import { Fatoproducaoapropriadametrologia } from './Fatoproducaoapropriadametrologia';
import { Fatoreceitaapropriada } from './Fatoreceitaapropriada';
import { Fatoreceitacompetencia } from './Fatoreceitacompetencia';
import { Fatoresultado } from './Fatoresultado';
import { Fatoresultadocompetencia } from './Fatoresultadocompetencia';
import { Fatostatusatendimento } from './Fatostatusatendimento';
import { Produtocategoria } from './Produtocategoria';
import { Visita } from './Visita';

@Index('produtonacional_pkey', ['id'], { unique: true })
@Index('iprodutonacionalfkprodutocategoria', ['idprodutocategoria'], {})
@Entity('produtonacional', { schema: 'public' })
export class Produtonacional {
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

  @Column('integer', { name: 'idprodutocategoria', nullable: true })
  idprodutocategoria: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'codigodn', nullable: true, length: 45 })
  codigodn: string | null;

  @Column('boolean', { name: 'isativo', nullable: true })
  isativo: boolean | null;

  @Column('character varying', { name: 'motivo', nullable: true, length: 200 })
  motivo: string | null;

  @Column('boolean', {
    name: 'isbasenacional',
    nullable: true,
    default: () => 'false',
  })
  isbasenacional: boolean | null;

  @OneToMany(() => Constanteindicador, (constanteindicador) => constanteindicador.idprodutonacional2)
  constanteindicadors: Constanteindicador[];

  @OneToMany(() => Fase, (fase) => fase.idprodutonacional2)
  fases: Fase[];

  @OneToMany(() => Fatoatendimento, (fatoatendimento) => fatoatendimento.idprodutonacional2)
  fatoatendimentos: Fatoatendimento[];

  @OneToMany(() => Fatodespesa, (fatodespesa) => fatodespesa.idprodutonacional2)
  fatodespesas: Fatodespesa[];

  @OneToMany(() => Fatoproducaoapropriada, (fatoproducaoapropriada) => fatoproducaoapropriada.idprodutonacional2)
  fatoproducaoapropriadas: Fatoproducaoapropriada[];

  @OneToMany(() => Fatoproducaoapropriadametrologia, (fatoproducaoapropriadametrologia) => fatoproducaoapropriadametrologia.idprodutonacional2)
  fatoproducaoapropriadametrologias: Fatoproducaoapropriadametrologia[];

  @OneToMany(() => Fatoreceitaapropriada, (fatoreceitaapropriada) => fatoreceitaapropriada.idprodutonacional2)
  fatoreceitaapropriadas: Fatoreceitaapropriada[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idprodutonacional2)
  fatoreceitacompetencias: Fatoreceitacompetencia[];

  @OneToMany(() => Fatoresultado, (fatoresultado) => fatoresultado.idprodutonacional2)
  fatoresultados: Fatoresultado[];

  @OneToMany(() => Fatoresultadocompetencia, (fatoresultadocompetencia) => fatoresultadocompetencia.idprodutonacional2)
  fatoresultadocompetencias: Fatoresultadocompetencia[];

  @OneToMany(() => Fatostatusatendimento, (fatostatusatendimento) => fatostatusatendimento.idprodutonacional2)
  fatostatusatendimentos: Fatostatusatendimento[];

  @ManyToOne(() => Produtocategoria, (produtocategoria) => produtocategoria.produtonacionals)
  @JoinColumn([{ name: 'idprodutocategoria', referencedColumnName: 'id' }])
  idprodutocategoria2: Produtocategoria;

  @OneToMany(() => Produtoregional, (produtoregional) => produtoregional.idprodutonacional2)
  produtoregionals: Produtoregional[];

  @OneToMany(() => Visita, (visita) => visita.idprodutonacional)
  visitas: Visita[];
}
