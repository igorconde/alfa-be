import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Enviofaturamentoatendimento } from './Enviofaturamentoatendimento';
import { Rateioreceitafaturamento } from './Rateioreceitafaturamento';
import { Receitafaturamentoentrega } from './Receitafaturamentoentrega';
import { Receitafaturamentofontepagadora } from './Receitafaturamentofontepagadora';
import { Usuario } from './Usuario';

@Index('receitafaturamento_pkey', ['id'], { unique: true })
@Index('ireceitafaturamentofkatendimento', ['idatendimento'], {})
@Entity('receitafaturamento', { schema: 'public' })
export class Receitafaturamento {
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

  @Column('integer', { name: 'idcondicaopagamento', nullable: true })
  idcondicaopagamento: number | null;

  @Column('character varying', { name: 'origem', nullable: true, length: 255 })
  origem: string | null;

  @OneToMany(() => Rateioreceitafaturamento, (rateioreceitafaturamento) => rateioreceitafaturamento.idreceitafaturamento2)
  rateioreceitafaturamentos: Rateioreceitafaturamento[];

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.receitafaturamentos)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Enviofaturamentoatendimento, (enviofaturamentoatendimento) => enviofaturamentoatendimento.receitafaturamentos)
  @JoinColumn([{ name: 'idenviofaturamentoatendimento', referencedColumnName: 'id' }])
  idenviofaturamentoatendimento: Enviofaturamentoatendimento;

  @ManyToOne(() => Usuario, (usuario) => usuario.receitafaturamentos)
  @JoinColumn([{ name: 'idusuario', referencedColumnName: 'id' }])
  idusuario: Usuario;

  @OneToMany(() => Receitafaturamentoentrega, (receitafaturamentoentrega) => receitafaturamentoentrega.idreceitafaturamento2)
  receitafaturamentoentregas: Receitafaturamentoentrega[];

  @OneToMany(() => Receitafaturamentofontepagadora, (receitafaturamentofontepagadora) => receitafaturamentofontepagadora.idreceitafaturamento2)
  receitafaturamentofontepagadoras: Receitafaturamentofontepagadora[];
}
