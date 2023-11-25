import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Fase } from './Fase';

@Index('atendimentofase_pkey', ['id'], { unique: true })
@Index('ix_atendimentofase_fk_atendimentofase_idatendimento', ['idatendimento'], {})
@Index('ix_atendimentofase_fk_atendimentofase_idfase', ['idfase'], {})
@Entity('atendimentofase', { schema: 'public' })
export class Atendimentofase {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('timestamp without time zone', { name: 'datafinal', nullable: true })
  datafinal: Date | null;

  @Column('integer', { name: 'quantidadedehoras', nullable: true })
  quantidadedehoras: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idfase', nullable: true })
  idfase: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.atendimentofases)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Fase, (fase) => fase.atendimentofases)
  @JoinColumn([{ name: 'idfase', referencedColumnName: 'id' }])
  idfase2: Fase;
}
