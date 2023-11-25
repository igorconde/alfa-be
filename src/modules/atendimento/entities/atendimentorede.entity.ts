import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Statusnotificacao } from './statusnotificacao.entity';

@Index('atendimentorede_pkey', ['id'], { unique: true })
@Index('ix_atendimentorede_fk_atendimentorede_idatendimentoexecutor', ['idatendimentoexecutor'], {})
@Index('ix_atendimentorede_fk_atendimentorede_idatendimentoparceiro', ['idatendimentoparceiro'], {})
@Index('ix_atendimentorede_fk_atendimentorede_idstatusnotificacao', ['idstatusnotificacao'], {})
@Index('ix_atendimentorede_fk_atendimentorede_idunidadeparceira', ['idunidadeparceira'], {})
@Entity('atendimentorede', { schema: 'public' })
export class Atendimentorede {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('boolean', { name: 'iscompartilhado', nullable: true })
  iscompartilhado: boolean | null;

  @Column('boolean', { name: 'isrede', nullable: true })
  isrede: boolean | null;

  @Column('integer', { name: 'idatendimentoexecutor', nullable: true })
  idatendimentoexecutor: number | null;

  @Column('integer', { name: 'idatendimentoparceiro', nullable: true })
  idatendimentoparceiro: number | null;

  @Column('integer', { name: 'idstatusnotificacao', nullable: true })
  idstatusnotificacao: number | null;

  @Column('integer', { name: 'idunidadeparceira', nullable: true })
  idunidadeparceira: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'origem', nullable: true, length: 255 })
  origem: string | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.atendimentoredes)
  @JoinColumn([{ name: 'idatendimentoexecutor', referencedColumnName: 'id' }])
  idatendimentoexecutor2: Atendimento;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.atendimentoredes2)
  @JoinColumn([{ name: 'idatendimentoparceiro', referencedColumnName: 'id' }])
  idatendimentoparceiro2: Atendimento;

  @ManyToOne(() => Statusnotificacao, (statusnotificacao) => statusnotificacao.atendimentoredes)
  @JoinColumn([{ name: 'idstatusnotificacao', referencedColumnName: 'id' }])
  idstatusnotificacao2: Statusnotificacao;

  @ManyToOne(() => Unidade, (unidade) => unidade.atendimentoredes)
  @JoinColumn([{ name: 'idunidadeparceira', referencedColumnName: 'id' }])
  idunidadeparceira2: Unidade;
}
