import { Atendimentotabelaco } from '@modules/brasil-mais/entities/atendimentotabelaco.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('parceirofomentotabelaco_pkey', ['id'], { unique: true })
@Index('prcrfomentotabelacofkprcirofomentotabelacoidatendimentotabelaco', ['idatendimentotabelaco'], {})
@Entity('parceirofomentotabelaco', { schema: 'public' })
export class Parceirofomentotabelaco {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'agenciafomento',
    nullable: true,
    length: 80,
  })
  agenciafomento: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'linhafomento',
    nullable: true,
    length: 80,
  })
  linhafomento: string | null;

  @Column('double precision', {
    name: 'vlrfinanceiro',
    nullable: true,
    precision: 53,
  })
  vlrfinanceiro: number | null;

  @Column('integer', { name: 'idatendimentotabelaco', nullable: true })
  idatendimentotabelaco: number | null;

  @ManyToOne(() => Atendimentotabelaco, (atendimentotabelaco) => atendimentotabelaco.parceirofomentotabelacos)
  @JoinColumn([{ name: 'idatendimentotabelaco', referencedColumnName: 'id' }])
  idatendimentotabelaco2: Atendimentotabelaco;
}
