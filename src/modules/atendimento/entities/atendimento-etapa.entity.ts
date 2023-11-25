import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AtendimentoSubetapa } from './AtendimentoSubetapa';

@Index('atendimento_etapa_pkey', ['id'], { unique: true })
@Entity('atendimento_etapa', { schema: 'public' })
export class AtendimentoEtapa {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @OneToMany(() => AtendimentoSubetapa, (atendimentoSubetapa) => atendimentoSubetapa.idAtendimentoEtapa2)
  atendimentoSubetapas: AtendimentoSubetapa[];
}
