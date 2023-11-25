import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Usuario } from '@modules/usuario/entities/usuario.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Enviofaturamentoatendimento } from './Enviofaturamentoatendimento';

@Index('receitafaturamentobackup_pkey', ['id'], { unique: true })
@Index('ireceitafaturamentobackupfkatendimento', ['idatendimento'], {})
@Entity('receitafaturamentobackup', { schema: 'public' })
export class Receitafaturamentobackup {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('date', { name: 'data', nullable: true })
  data: string | null;

  @Column('timestamp without time zone', {
    name: 'dataatualizacao',
    nullable: true,
  })
  dataatualizacao: Date | null;

  @Column('double precision', { name: 'valor', nullable: true, precision: 53 })
  valor: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'codigointegracaoreceita',
    nullable: true,
    length: 45,
  })
  codigointegracaoreceita: string | null;

  @Column('character varying', {
    name: 'justificativa',
    nullable: true,
    length: 500,
  })
  justificativa: string | null;

  @Column('integer', { name: 'idprevisaoreceita', nullable: true })
  idprevisaoreceita: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.receitafaturamentobackups)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Enviofaturamentoatendimento, (enviofaturamentoatendimento) => enviofaturamentoatendimento.receitafaturamentobackups)
  @JoinColumn([{ name: 'idenviofaturamentoatendimento', referencedColumnName: 'id' }])
  idenviofaturamentoatendimento: Enviofaturamentoatendimento;

  @ManyToOne(() => Usuario, (usuario) => usuario.receitafaturamentobackups)
  @JoinColumn([{ name: 'idusuario', referencedColumnName: 'id' }])
  idusuario: Usuario;
}
