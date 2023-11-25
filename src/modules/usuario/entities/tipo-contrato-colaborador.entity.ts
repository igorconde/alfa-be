import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Colaborador } from './colaborador.entity';

@Index('tipocontratocolaborador_pkey', ['id'], { unique: true })
@Entity('tipocontratocolaborador', { schema: 'public' })
export class Tipocontratocolaborador {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('integer', { name: 'numerodehorasdetrabalho', nullable: true })
  numerodehorasdetrabalho: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Colaborador, (colaborador) => colaborador.idtipocontratocolaborador2)
  colaboradors: Colaborador[];
}
