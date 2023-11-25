import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from './Cliente';
import { Tipoprevisaoreceita } from './Tipoprevisaoreceita';

@Index('previsaoreceita_pkey', ['id'], { unique: true })
@Index('iprevisaoreceitafkatendimento', ['idatendimento'], {})
@Index('iprevisaoreceitafkfontepagadora', ['idfontepagadora'], {})
@Index('iprevisaoreceitafktipoprevisaoreceita', ['idtipoprevisaoreceita'], {})
@Entity('previsaoreceita', { schema: 'public' })
export class Previsaoreceita {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('double precision', { name: 'valor', nullable: true, precision: 53 })
  valor: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idfontepagadora', nullable: true })
  idfontepagadora: number | null;

  @Column('integer', { name: 'idtipoprevisaoreceita', nullable: true })
  idtipoprevisaoreceita: number | null;

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
    length: 255,
  })
  detalhes: string | null;

  @Column('double precision', {
    name: 'receitarepassada',
    nullable: true,
    precision: 53,
  })
  receitarepassada: number | null;

  @Column('double precision', {
    name: 'vlreconomico',
    nullable: true,
    precision: 53,
  })
  vlreconomico: number | null;

  @Column('double precision', {
    name: 'vlrfinanceiro',
    nullable: true,
    precision: 53,
  })
  vlrfinanceiro: number | null;

  @Column('integer', { name: 'idagenciabolsa', nullable: true })
  idagenciabolsa: number | null;

  @Column('integer', { name: 'idagenciafomento', nullable: true })
  idagenciafomento: number | null;

  @Column('integer', { name: 'idagencianacional', nullable: true })
  idagencianacional: number | null;

  @Column('integer', { name: 'idictparceiro', nullable: true })
  idictparceiro: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('integer', { name: 'idsistemaindustria', nullable: true })
  idsistemaindustria: number | null;

  @Column('double precision', {
    name: 'economico',
    nullable: true,
    precision: 53,
  })
  economico: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.previsaoreceitas)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Cliente, (cliente) => cliente.previsaoreceitas)
  @JoinColumn([{ name: 'idfontepagadora', referencedColumnName: 'id' }])
  idfontepagadora2: Cliente;

  @ManyToOne(() => Tipoprevisaoreceita, (tipoprevisaoreceita) => tipoprevisaoreceita.previsaoreceitas)
  @JoinColumn([{ name: 'idtipoprevisaoreceita', referencedColumnName: 'id' }])
  idtipoprevisaoreceita2: Tipoprevisaoreceita;
}
