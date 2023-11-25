import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tabelaco } from './Tabelaco';

@Index('statustabelaco_pkey', ['id'], { unique: true })
@Entity('statustabelaco', { schema: 'public' })
export class Statustabelaco {
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
    length: 50,
  })
  descricao: string | null;

  @OneToMany(() => Tabelaco, (tabelaco) => tabelaco.idstatustabelaco2)
  tabelacos: Tabelaco[];
}
