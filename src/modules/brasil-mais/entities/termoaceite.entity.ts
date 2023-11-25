import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tipotermo } from './tipotermo.entity';

@Index('termoaceite_pkey', ['id'], { unique: true })
@Index('ix_termoaceite_fk_termoaceite_idatendimento', ['idatendimento'], {})
@Index('ix_termoaceite_fk_termoaceite_idtipotermo', ['idtipotermo'], {})
@Entity('termoaceite', { schema: 'public' })
export class Termoaceite {
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
    name: 'nomearquivo',
    nullable: true,
    length: 255,
  })
  nomearquivo: string | null;

  @Column('bigint', { name: 'tamanho', nullable: true })
  tamanho: string | null;

  @Column('character varying', { name: 'tipo', nullable: true, length: 255 })
  tipo: string | null;

  @Column('character varying', { name: 'url', nullable: true, length: 255 })
  url: string | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idtipotermo', nullable: true })
  idtipotermo: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.termoaceites)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Tipotermo, (tipotermo) => tipotermo.termoaceites)
  @JoinColumn([{ name: 'idtipotermo', referencedColumnName: 'id' }])
  idtipotermo2: Tipotermo;
}
