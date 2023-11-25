import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Usuario } from '@modules/usuario/entities/usuario.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentopraticabdigital } from './Atendimentopraticabdigital';
import { Atendimentoproducaoapropriada } from './Atendimentoproducaoapropriada';
import { Colaborador } from './Colaborador';
import { Encontroalinhamentobdigital } from './Encontroalinhamentobdigital';
import { Encontroconsultoriabdigital } from './Encontroconsultoriabdigital';
import { Encontroconsultoriacdigital } from './Encontroconsultoriacdigital';
import { Encontroconsultoriaddigital } from './Encontroconsultoriaddigital';
import { Receitaapropriada } from './Receitaapropriada';
import { Receitaapropriadaproducaoapropriada } from './Receitaapropriadaproducaoapropriada';
import { Visitaconsultoriac } from './Visitaconsultoriac';
import { Visitaconsultoriad } from './Visitaconsultoriad';

@Index('producaoapropriada_pkey', ['id'], { unique: true })
@Index('iproducaoapropriadafkatendimento', ['idatendimento'], {})
@Index('iproducaoapropriadafkcolaborador', ['idcolaborador'], {})
@Index('iproducaoapropriadafkreceitaapropriada', ['idreceitaapropriada'], {})
@Index('iproducaoapropriadafkregional', ['idregional'], {})
@Index('iproducaoapropriadafkunidade', ['idunidade'], {})
@Index('iproducaoapropriadafkusuario', ['idusuario'], {})
@Entity('producaoapropriada', { schema: 'public' })
export class Producaoapropriada {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'datadeapropriacao',
    nullable: true,
  })
  datadeapropriacao: Date | null;

  @Column('integer', { name: 'quantidadeapropriadas', nullable: true })
  quantidadeapropriadas: number | null;

  @Column('integer', { name: 'quantidaderelatorio', nullable: true })
  quantidaderelatorio: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idcolaborador', nullable: true })
  idcolaborador: number | null;

  @Column('integer', { name: 'idreceitaapropriada', nullable: true })
  idreceitaapropriada: number | null;

  @Column('integer', { name: 'idregional', nullable: true })
  idregional: number | null;

  @Column('integer', { name: 'idusuario', nullable: true })
  idusuario: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('boolean', { name: 'islote', nullable: true })
  islote: boolean | null;

  @Column('boolean', { name: 'isterceiros', nullable: true })
  isterceiros: boolean | null;

  @Column('character varying', { name: 'origem', nullable: true, length: 255 })
  origem: string | null;

  @OneToMany(() => Atendimentopraticabdigital, (atendimentopraticabdigital) => atendimentopraticabdigital.idproducaoapropriada2)
  atendimentopraticabdigitals: Atendimentopraticabdigital[];

  @OneToMany(() => Atendimentoproducaoapropriada, (atendimentoproducaoapropriada) => atendimentoproducaoapropriada.idproducaoapropriada)
  atendimentoproducaoapropriadas: Atendimentoproducaoapropriada[];

  @OneToMany(() => Encontroalinhamentobdigital, (encontroalinhamentobdigital) => encontroalinhamentobdigital.idproducaoapropriada2)
  encontroalinhamentobdigitals: Encontroalinhamentobdigital[];

  @OneToMany(() => Encontroconsultoriabdigital, (encontroconsultoriabdigital) => encontroconsultoriabdigital.idproducaoapropriada2)
  encontroconsultoriabdigitals: Encontroconsultoriabdigital[];

  @OneToMany(() => Encontroconsultoriacdigital, (encontroconsultoriacdigital) => encontroconsultoriacdigital.idproducaoapropriada2)
  encontroconsultoriacdigitals: Encontroconsultoriacdigital[];

  @OneToMany(() => Encontroconsultoriaddigital, (encontroconsultoriaddigital) => encontroconsultoriaddigital.idproducaoapropriada2)
  encontroconsultoriaddigitals: Encontroconsultoriaddigital[];

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.producaoapropriadas)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.producaoapropriadas)
  @JoinColumn([{ name: 'idcolaborador', referencedColumnName: 'id' }])
  idcolaborador2: Colaborador;

  @ManyToOne(() => Receitaapropriada, (receitaapropriada) => receitaapropriada.producaoapropriadas)
  @JoinColumn([{ name: 'idreceitaapropriada', referencedColumnName: 'id' }])
  idreceitaapropriada2: Receitaapropriada;

  @ManyToOne(() => Unidade, (unidade) => unidade.producaoapropriadas)
  @JoinColumn([{ name: 'idregional', referencedColumnName: 'id' }])
  idregional2: Unidade;

  @ManyToOne(() => Usuario, (usuario) => usuario.producaoapropriadas)
  @JoinColumn([{ name: 'idusuario', referencedColumnName: 'id' }])
  idusuario2: Usuario;

  @OneToMany(() => Receitaapropriadaproducaoapropriada, (receitaapropriadaproducaoapropriada) => receitaapropriadaproducaoapropriada.idproducaoapropriada)
  receitaapropriadaproducaoapropriadas: Receitaapropriadaproducaoapropriada[];

  @OneToMany(() => Visitaconsultoriac, (visitaconsultoriac) => visitaconsultoriac.idproducaoapropriada)
  visitaconsultoriacs: Visitaconsultoriac[];

  @OneToMany(() => Visitaconsultoriad, (visitaconsultoriad) => visitaconsultoriad.idproducaoapropriada)
  visitaconsultoriads: Visitaconsultoriad[];
}
