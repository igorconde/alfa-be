import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ordemfaturamento } from './ordemfaturamento.entity';

@Index('condicaopagamento_codigo_key', ['codigo'], { unique: true })
@Index('condicaopagamento_pkey', ['id'], { unique: true })
@Entity('condicaopagamento', { schema: 'public' })
export class Condicaopagamento {
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

  @OneToMany(() => Ordemfaturamento, (ordemfaturamento) => ordemfaturamento.idcondicaopagamento2)
  ordemfaturamentos: Ordemfaturamento[];
}
