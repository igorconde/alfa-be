import { Atendimentotabelaco } from '@modules/brasil-mais/entities/atendimentotabelaco.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('parceirobolsatabelaco_pkey', ['id'], { unique: true })
@Index('prceirobolsatabelacofkprceirobolsatabelacoidatendimentotabelaco', ['idatendimentotabelaco'], {})
@Entity('parceirobolsatabelaco', { schema: 'public' })
export class Parceirobolsatabelaco {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'agenciabolsa',
    nullable: true,
    length: 80,
  })
  agenciabolsa: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'programabolsa',
    nullable: true,
    length: 80,
  })
  programabolsa: string | null;

  @Column('double precision', {
    name: 'vlrfinanceiro',
    nullable: true,
    precision: 53,
  })
  vlrfinanceiro: number | null;

  @Column('integer', { name: 'idatendimentotabelaco', nullable: true })
  idatendimentotabelaco: number | null;

  @ManyToOne(() => Atendimentotabelaco, (atendimentotabelaco) => atendimentotabelaco.parceirobolsatabelacos)
  @JoinColumn([{ name: 'idatendimentotabelaco', referencedColumnName: 'id' }])
  idatendimentotabelaco2: Atendimentotabelaco;
}
