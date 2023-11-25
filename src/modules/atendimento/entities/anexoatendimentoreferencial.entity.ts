import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoreferencial } from './anexoreferencial.entity';
import { Solicitacaostatus } from './solicitacaostatus.entity';

@Index('anexoatendimentoreferencial_pkey', ['id'], { unique: true })
@Index('nxtndmentoreferencialfknxtndimentoreferencialidanexoreferencial', ['idanexoreferencial'], {})
@Index('nxtendimentoreferencialfknxoatendimentoreferencialidatendimento', ['idatendimento'], {})
@Index('nxtndmntoreferencialfknxtndimentoreferencialidsolicitacaostatus', ['idsolicitacaostatus'], {})
@Entity('anexoatendimentoreferencial', { schema: 'public' })
export class Anexoatendimentoreferencial {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('double precision', { name: 'valor', nullable: true, precision: 53 })
  valor: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idanexoreferencial', nullable: true })
  idanexoreferencial: number | null;

  @Column('integer', { name: 'idsolicitacaostatus', nullable: true })
  idsolicitacaostatus: number | null;

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

  @ManyToOne(() => Anexoreferencial, (anexoreferencial) => anexoreferencial.anexoatendimentoreferencials)
  @JoinColumn([{ name: 'idanexoreferencial', referencedColumnName: 'id' }])
  idanexoreferencial2: Anexoreferencial;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.anexoatendimentoreferencials)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Solicitacaostatus, (solicitacaostatus) => solicitacaostatus.anexoatendimentoreferencials)
  @JoinColumn([{ name: 'idsolicitacaostatus', referencedColumnName: 'id' }])
  idsolicitacaostatus2: Solicitacaostatus;
}
