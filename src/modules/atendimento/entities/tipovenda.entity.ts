import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentopesquisa } from './Atendimentopesquisa';

@Index('tipovenda_pkey', ['id'], { unique: true })
@Entity('tipovenda', { schema: 'public' })
export class Tipovenda {
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
    name: 'descricao',
    nullable: true,
    length: 45,
  })
  descricao: string | null;

  @OneToMany(() => Atendimentopesquisa, (atendimentopesquisa) => atendimentopesquisa.tipovenda)
  atendimentopesquisas: Atendimentopesquisa[];
}