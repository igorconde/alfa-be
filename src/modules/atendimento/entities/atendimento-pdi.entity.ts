import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimento } from './Atendimento';

@Index('atendimento_pdi_pkey', ['id'], { unique: true })
@Index('ix_atendimento_pdi_fk_atendimento_pdi_id_atendimento', ['idAtendimento'], {})
@Entity('atendimento_pdi', { schema: 'public' })
export class AtendimentoPdi {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'areaservico',
    nullable: true,
    length: 255,
  })
  areaservico: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'grauinovacao', nullable: true })
  grauinovacao: number | null;

  @Column('integer', { name: 'idareatematica', nullable: true })
  idareatematica: number | null;

  @Column('character varying', {
    name: 'origemacaoprospectiva',
    nullable: true,
    length: 255,
  })
  origemacaoprospectiva: string | null;

  @Column('integer', { name: 'poderinducao', nullable: true })
  poderinducao: number | null;

  @Column('character varying', {
    name: 'temporalidade',
    nullable: true,
    length: 255,
  })
  temporalidade: string | null;

  @Column('character varying', {
    name: 'trlfinal',
    nullable: true,
    length: 255,
  })
  trlfinal: string | null;

  @Column('character varying', {
    name: 'trlinicial',
    nullable: true,
    length: 255,
  })
  trlinicial: string | null;

  @Column('integer', { name: 'id_atendimento', nullable: true })
  idAtendimento: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.atendimentoPdis)
  @JoinColumn([{ name: 'id_atendimento', referencedColumnName: 'id' }])
  idAtendimento2: Atendimento;
}
