import { Atendimentotabelaco } from '@modules/brasil-mais/entities/atendimentotabelaco.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('parceiroicttabelaco_pkey', ['id'], { unique: true })
@Index('parceiroicttabelacofk_parceiroicttabelaco_idatendimentotabelaco', ['idatendimentotabelaco'], {})
@Entity('parceiroicttabelaco', { schema: 'public' })
export class Parceiroicttabelaco {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'departamento',
    nullable: true,
    length: 80,
  })
  departamento: string | null;

  @Column('character varying', {
    name: 'descricaoparceiro',
    nullable: true,
    length: 80,
  })
  descricaoparceiro: string | null;

  @Column('double precision', {
    name: 'receitarepassada',
    nullable: true,
    precision: 53,
  })
  receitarepassada: number | null;

  @Column('double precision', {
    name: 'vlreconomico',
    nullable: true,
    precision: 53,
  })
  vlreconomico: number | null;

  @Column('double precision', {
    name: 'vlrfinanceiro',
    nullable: true,
    precision: 53,
  })
  vlrfinanceiro: number | null;

  @Column('integer', { name: 'idatendimentotabelaco', nullable: true })
  idatendimentotabelaco: number | null;

  @ManyToOne(() => Atendimentotabelaco, (atendimentotabelaco) => atendimentotabelaco.parceiroicttabelacos)
  @JoinColumn([{ name: 'idatendimentotabelaco', referencedColumnName: 'id' }])
  idatendimentotabelaco2: Atendimentotabelaco;
}
