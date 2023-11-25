import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tipojustificativa } from './Tipojustificativa';

@Index('atendimentojustificativa_pkey', ['id'], { unique: true })
@Index('atendimentojustificativafkatendimentojustificativaidatendimento', ['idatendimento'], {})
@Index('tndmntojustificativafktndimentojustificativaidtipojustificativa', ['idtipojustificativa'], {})
@Entity('atendimentojustificativa', { schema: 'public' })
export class Atendimentojustificativa {
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
    name: 'detalhes',
    nullable: true,
    length: 250,
  })
  detalhes: string | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idtipojustificativa', nullable: true })
  idtipojustificativa: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.atendimentojustificativas)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Tipojustificativa, (tipojustificativa) => tipojustificativa.atendimentojustificativas)
  @JoinColumn([{ name: 'idtipojustificativa', referencedColumnName: 'id' }])
  idtipojustificativa2: Tipojustificativa;
}
