import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Colaborador } from './Colaborador';

@Index('formacaocolaborador_pkey', ['id'], { unique: true })
@Entity('formacaocolaborador', { schema: 'public' })
export class Formacaocolaborador {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Colaborador, (colaborador) => colaborador.idformacaocolaborador2)
  colaboradors: Colaborador[];
}
