import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Arquivocarga } from './Arquivocarga';
import { Atendimento } from './Atendimento';
import { Calendario } from './Calendario';
import { Unidade } from './Unidade';

@Index('atendimentosi_pkey', ['id'], { unique: true })
@Index('ix_atendimentosi_fk_atendimentosi_idatendimento', ['idatendimento'], {})
@Index('ix_atendimentosi_fk_atendimentosi_idcalendario', ['idcalendario'], {})
@Index('ix_atendimentosi_fk_atendimentosi_idunidade', ['idunidade'], {})
@Entity('atendimentosi', { schema: 'public' })
export class Atendimentosi {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idcalendario', nullable: true })
  idcalendario: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @ManyToOne(() => Arquivocarga, (arquivocarga) => arquivocarga.atendimentosis)
  @JoinColumn([{ name: 'idarquivocarga', referencedColumnName: 'id' }])
  idarquivocarga: Arquivocarga;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.atendimentosis)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Calendario, (calendario) => calendario.atendimentosis)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;

  @ManyToOne(() => Unidade, (unidade) => unidade.atendimentosis)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
