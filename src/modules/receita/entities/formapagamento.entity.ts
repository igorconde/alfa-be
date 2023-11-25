import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ordemfaturamento } from './ordemfaturamento.entity';

@Index('formapagamento_codigo_key', ['codigo'], { unique: true })
@Index('formapagamento_pkey', ['id'], { unique: true })
@Entity('formapagamento', { schema: 'public' })
export class Formapagamento {
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
    name: 'codigo',
    nullable: true,
    unique: true,
    length: 10,
  })
  codigo: string | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 60,
  })
  descricao: string | null;

  @OneToMany(() => Ordemfaturamento, (ordemfaturamento) => ordemfaturamento.idformapagamento2)
  ordemfaturamentos: Ordemfaturamento[];
}
