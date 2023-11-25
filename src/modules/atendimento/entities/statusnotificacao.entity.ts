import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentorede } from './atendimentorede.entity';

@Index('statusnotificacao_pkey', ['id'], { unique: true })
@Entity('statusnotificacao', { schema: 'public' })
export class Statusnotificacao {
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
    length: 45,
  })
  descricao: string | null;

  @OneToMany(() => Atendimentorede, (atendimentorede) => atendimentorede.idstatusnotificacao2)
  atendimentoredes: Atendimentorede[];
}
