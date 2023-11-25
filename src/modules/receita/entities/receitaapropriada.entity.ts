import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Enviofaturamento } from '@modules/common/entities/enviofaturamento.entity';
import { Producaoapropriada } from '@modules/producao/entities/producaoapropriada.entity';
import { Usuario } from '@modules/usuario/entities/usuario.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rateioreceitaapropriada } from './rateioreceitaapropriada.entity';
import { Receitaapropriadaproducaoapropriada } from './receitaapropriadaproducaoapropriada.entity';

@Index('receitaapropriada_pkey', ['id'], { unique: true })
@Index('ireceitaapropriadafkatendimento', ['idatendimento'], {})
@Index('ireceitaapropriadafkusuario', ['idusuario'], {})
@Entity('receitaapropriada', { schema: 'public' })
export class Receitaapropriada {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('date', { name: 'data', nullable: true })
  data: string | null;

  @Column('double precision', {
    name: 'quantidadeapropriada',
    nullable: true,
    precision: 53,
  })
  quantidadeapropriada: number | null;

  @Column('double precision', {
    name: 'receitaapropriada',
    nullable: true,
    precision: 53,
  })
  receitaapropriada: number | null;

  @Column('integer', { name: 'idusuario', nullable: true })
  idusuario: number | null;

  @Column('character varying', {
    name: 'condicaopagamento',
    nullable: true,
    length: 255,
  })
  condicaopagamento: string | null;

  @Column('timestamp without time zone', {
    name: 'dataatualizacao',
    nullable: true,
  })
  dataatualizacao: Date | null;

  @Column('integer', { name: 'quantidaderelatorio', nullable: true })
  quantidaderelatorio: number | null;

  @Column('double precision', { name: 'valorreceita', precision: 53 })
  valorreceita: number;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('double precision', {
    name: 'valorreceitafaturamento',
    nullable: true,
    precision: 53,
  })
  valorreceitafaturamento: number | null;

  @Column('integer', { name: 'idenviofaturamentoatendimento', nullable: true })
  idenviofaturamentoatendimento: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.idreceitaapropriada2)
  producaoapropriadas: Producaoapropriada[];

  @OneToMany(() => Rateioreceitaapropriada, (rateioreceitaapropriada) => rateioreceitaapropriada.idreceitaapropriada2)
  rateioreceitaapropriadas: Rateioreceitaapropriada[];

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.receitaapropriadas)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Enviofaturamento, (enviofaturamento) => enviofaturamento.receitaapropriadas)
  @JoinColumn([{ name: 'idenviofaturamento', referencedColumnName: 'id' }])
  idenviofaturamento: Enviofaturamento;

  @ManyToOne(() => Usuario, (usuario) => usuario.receitaapropriadas)
  @JoinColumn([{ name: 'idusuario', referencedColumnName: 'id' }])
  idusuario2: Usuario;

  @OneToMany(() => Receitaapropriadaproducaoapropriada, (receitaapropriadaproducaoapropriada) => receitaapropriadaproducaoapropriada.idreceitaapropriada)
  receitaapropriadaproducaoapropriadas: Receitaapropriadaproducaoapropriada[];
}
