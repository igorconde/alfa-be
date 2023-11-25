import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Turma } from './Turma';

@Index('etapaa_pkey', ['id'], { unique: true })
@Index('ix_etapaa_fk_etapaa_idturma', ['idturma'], {})
@Entity('etapaa', { schema: 'public' })
export class Etapaa {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'etapa', nullable: true })
  etapa: number | null;

  @Column('integer', { name: 'idturma', nullable: true })
  idturma: number | null;

  @ManyToOne(() => Turma, (turma) => turma.etapaas)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turma;
}
