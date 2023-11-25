import { Colaborador } from '@modules/usuario/entities/colaborador.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Visita } from './Visita';

@Index('visitacolaborador_pkey', ['id'], { unique: true })
@Index('ix_visitacolaborador_fk_visitacolaborador_idcolaborador', ['idcolaborador'], {})
@Index('ix_visitacolaborador_fk_visitacolaborador_idvisita', ['idvisita'], {})
@Entity('visitacolaborador', { schema: 'public' })
export class Visitacolaborador {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idvisita', nullable: true })
  idvisita: number | null;

  @Column('integer', { name: 'idcolaborador', nullable: true })
  idcolaborador: number | null;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.visitacolaboradors)
  @JoinColumn([{ name: 'idcolaborador', referencedColumnName: 'id' }])
  idcolaborador2: Colaborador;

  @ManyToOne(() => Visita, (visita) => visita.visitacolaboradors)
  @JoinColumn([{ name: 'idvisita', referencedColumnName: 'id' }])
  idvisita2: Visita;
}
