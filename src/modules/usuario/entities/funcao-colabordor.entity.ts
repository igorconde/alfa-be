import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Colaborador } from './colaborador.entity';

@Index('funcaocolaborador_pkey', ['id'], { unique: true })
@Entity('funcaocolaborador', { schema: 'public' })
export class Funcaocolaborador {
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

  @OneToMany(() => Colaborador, (colaborador) => colaborador.idfuncaocolaborador)
  colaboradors: Colaborador[];
}
