import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Arquivocarga } from './arquivo-carga.entity';

@Index('atendimentoscriticas_pkey', ['id'], { unique: true })
@Index('ix_atendimentoscriticas_fk_atendimentoscriticas_idarquivocarga', ['idarquivocarga'], {})
@Index('ix_atendimentoscriticas_fk_atendimentoscriticas_idatendimento', ['idatendimento'], {})
@Entity('atendimentoscriticas', { schema: 'public' })
export class Atendimentoscriticas {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'impeditivo',
    nullable: true,
    length: 15,
  })
  impeditivo: string | null;

  @Column('integer', { name: 'idarquivocarga', nullable: true })
  idarquivocarga: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @ManyToOne(() => Arquivocarga, (arquivocarga) => arquivocarga.atendimentoscriticas)
  @JoinColumn([{ name: 'idarquivocarga', referencedColumnName: 'id' }])
  idarquivocarga2: Arquivocarga;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.atendimentoscriticas)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;
}
