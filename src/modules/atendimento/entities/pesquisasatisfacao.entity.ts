import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('pesquisasatisfacao_pkey', ['id'], { unique: true })
@Index('ix_pesquisasatisfacao_fk_pesquisasatisfacao_idatendimento', ['idatendimento'], {})
@Entity('pesquisasatisfacao', { schema: 'public' })
export class Pesquisasatisfacao {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'anexourl',
    nullable: true,
    length: 255,
  })
  anexourl: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'comments',
    nullable: true,
    length: 255,
  })
  comments: string | null;

  @Column('integer', { name: 'contentquality', nullable: true })
  contentquality: number | null;

  @Column('integer', { name: 'deadlinesobservance', nullable: true })
  deadlinesobservance: number | null;

  @Column('boolean', { name: 'executeprojectagain', nullable: true })
  executeprojectagain: boolean | null;

  @Column('integer', { name: 'impact', nullable: true })
  impact: number | null;

  @Column('integer', { name: 'interactionprojectteam', nullable: true })
  interactionprojectteam: number | null;

  @Column('integer', { name: 'knowledgerelatedfield', nullable: true })
  knowledgerelatedfield: number | null;

  @Column('integer', { name: 'orderimpact', nullable: true })
  orderimpact: number | null;

  @Column('integer', { name: 'orderinteractionorder', nullable: true })
  orderinteractionorder: number | null;

  @Column('integer', { name: 'orderprofessionalcompetence', nullable: true })
  orderprofessionalcompetence: number | null;

  @Column('integer', { name: 'orderprojectdeliverables', nullable: true })
  orderprojectdeliverables: number | null;

  @Column('integer', { name: 'ordertimeframe', nullable: true })
  ordertimeframe: number | null;

  @Column('integer', { name: 'postponementsdealing', nullable: true })
  postponementsdealing: number | null;

  @Column('integer', { name: 'presentationresults', nullable: true })
  presentationresults: number | null;

  @Column('integer', { name: 'priceperformanceratio', nullable: true })
  priceperformanceratio: number | null;

  @Column('integer', { name: 'professionalcompetencies', nullable: true })
  professionalcompetencies: number | null;

  @Column('integer', { name: 'projectdeliverables', nullable: true })
  projectdeliverables: number | null;

  @Column('integer', { name: 'projectimpact', nullable: true })
  projectimpact: number | null;

  @Column('integer', { name: 'projectmanagement', nullable: true })
  projectmanagement: number | null;

  @Column('integer', { name: 'recommendation', nullable: true })
  recommendation: number | null;

  @Column('integer', { name: 'requirementsfulfillment', nullable: true })
  requirementsfulfillment: number | null;

  @Column('integer', { name: 'schedulefulfillment', nullable: true })
  schedulefulfillment: number | null;

  @Column('integer', { name: 'teamavailability', nullable: true })
  teamavailability: number | null;

  @Column('integer', { name: 'teamcommitment', nullable: true })
  teamcommitment: number | null;

  @Column('integer', { name: 'teamcommunicationskills', nullable: true })
  teamcommunicationskills: number | null;

  @Column('integer', { name: 'technologicalcompetencies', nullable: true })
  technologicalcompetencies: number | null;

  @Column('integer', { name: 'timeframe', nullable: true })
  timeframe: number | null;

  @Column('integer', { name: 'valuebenefit', nullable: true })
  valuebenefit: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.pesquisasatisfacaos)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;
}
