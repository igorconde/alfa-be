import { Evento } from '@modules/common/entities/evento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Colaborador } from './colaborador.entity';

@Index('eventocolaborador_pkey', ['id'], { unique: true })
@Index('ix_eventocolaborador_fk_eventocolaborador_idcolaborador', ['idcolaborador'], {})
@Index('ix_eventocolaborador_fk_eventocolaborador_idevento', ['idevento'], {})
@Entity('eventocolaborador', { schema: 'public' })
export class Eventocolaborador {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idevento', nullable: true })
  idevento: number | null;

  @Column('integer', { name: 'idcolaborador', nullable: true })
  idcolaborador: number | null;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.eventocolaboradors)
  @JoinColumn([{ name: 'idcolaborador', referencedColumnName: 'id' }])
  idcolaborador2: Colaborador;

  @ManyToOne(() => Evento, (evento) => evento.eventocolaboradors)
  @JoinColumn([{ name: 'idevento', referencedColumnName: 'id' }])
  idevento2: Evento;
}
