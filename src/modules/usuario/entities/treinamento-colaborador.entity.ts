import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Colaborador } from './colaborador.entity';
import { Treinamento } from './treinamento.entity';

@Index('treinamentocolaborador_pkey', ['id'], { unique: true })
@Index('treinamentocolaborador_fk_treinamentocolaborador_idcolaborador', ['idcolaborador'], {})
@Index('treinamentocolaborador_fk_treinamentocolaborador_idtreinamento', ['idtreinamento'], {})
@Entity('treinamentocolaborador', { schema: 'public' })
export class Treinamentocolaborador {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idtreinamento', nullable: true })
  idtreinamento: number | null;

  @Column('integer', { name: 'idcolaborador', nullable: true })
  idcolaborador: number | null;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.treinamentocolaboradors)
  @JoinColumn([{ name: 'idcolaborador', referencedColumnName: 'id' }])
  idcolaborador2: Colaborador;

  @ManyToOne(() => Treinamento, (treinamento) => treinamento.treinamentocolaboradors)
  @JoinColumn([{ name: 'idtreinamento', referencedColumnName: 'id' }])
  idtreinamento2: Treinamento;
}
