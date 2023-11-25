import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AtendimentoEtapa } from './AtendimentoEtapa';
import { Atendimentostatus } from './Atendimentostatus';

@Index('atendimento_subetapa_pkey', ['id'], { unique: true })
@Index('atendimentosubetapafk_atendimento_subetapa_id_atendimento_etapa', ['idAtendimentoEtapa'], {})
@Index('atendimentosubetapafkatendimento_subetapa_id_atendimento_status', ['idAtendimentoStatus'], {})
@Entity('atendimento_subetapa', { schema: 'public' })
export class AtendimentoSubetapa {
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
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('integer', { name: 'id_atendimento_etapa', nullable: true })
  idAtendimentoEtapa: number | null;

  @Column('integer', { name: 'id_atendimento_status', nullable: true })
  idAtendimentoStatus: number | null;

  @OneToMany(() => Atendimento, (atendimento) => atendimento.idAtendimentoSubetapa)
  atendimentos: Atendimento[];

  @ManyToOne(() => AtendimentoEtapa, (atendimentoEtapa) => atendimentoEtapa.atendimentoSubetapas)
  @JoinColumn([{ name: 'id_atendimento_etapa', referencedColumnName: 'id' }])
  idAtendimentoEtapa2: AtendimentoEtapa;

  @ManyToOne(() => Atendimentostatus, (atendimentostatus) => atendimentostatus.atendimentoSubetapas)
  @JoinColumn([{ name: 'id_atendimento_status', referencedColumnName: 'id' }])
  idAtendimentoStatus2: Atendimentostatus;
}
