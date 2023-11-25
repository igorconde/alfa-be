import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentotabelaco } from './Atendimentotabelaco';

@Index('parceiroempresatabelaco_pkey', ['id'], { unique: true })
@Index('prcrempresatabelacofkprciroempresatabelacoidatendimentotabelaco', ['idatendimentotabelaco'], {})
@Entity('parceiroempresatabelaco', { schema: 'public' })
export class Parceiroempresatabelaco {
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
    name: 'descricaoparceiro',
    nullable: true,
    length: 80,
  })
  descricaoparceiro: string | null;

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

  @ManyToOne(() => Atendimentotabelaco, (atendimentotabelaco) => atendimentotabelaco.parceiroempresatabelacos)
  @JoinColumn([{ name: 'idatendimentotabelaco', referencedColumnName: 'id' }])
  idatendimentotabelaco2: Atendimentotabelaco;
}
