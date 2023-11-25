import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Solicitacaostatus } from './solicitacaostatus.entity';

@Index('historicotrocastatusdndr_pkey', ['id'], { unique: true })
@Index('historicotrocastatusdndrfkhistoricotrocastatusdndridatendimento', ['idatendimento'], {})
@Index('hstrctrocastatusdndrfkhstricotrocastatusdndridsolicitacaostatus', ['idsolicitacaostatus'], {})
@Entity('historicotrocastatusdndr', { schema: 'public' })
export class Historicotrocastatusdndr {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('timestamp without time zone', { name: 'data', nullable: true })
  data: Date | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idsolicitacaostatus', nullable: true })
  idsolicitacaostatus: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.historicotrocastatusdndrs)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Solicitacaostatus, (solicitacaostatus) => solicitacaostatus.historicotrocastatusdndrs)
  @JoinColumn([{ name: 'idsolicitacaostatus', referencedColumnName: 'id' }])
  idsolicitacaostatus2: Solicitacaostatus;
}
