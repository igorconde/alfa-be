import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Emailfaturamento } from './Emailfaturamento';
import { Usuario } from './Usuario';
import { Enviofaturamentoatendimento } from './Enviofaturamentoatendimento';
import { Receitaapropriada } from './Receitaapropriada';

@Index('enviofaturamento_pkey', ['id'], { unique: true })
@Index('ienviofaturamentofkusuario', ['idusuario'], {})
@Entity('enviofaturamento', { schema: 'public' })
export class Enviofaturamento {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', { name: 'data', nullable: true })
  data: Date | null;

  @Column('timestamp without time zone', { name: 'dataenvio', nullable: true })
  dataenvio: Date | null;

  @Column('character varying', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('character varying', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @Column('text', { name: 'conteudo', nullable: true })
  conteudo: string | null;

  @Column('timestamp without time zone', {
    name: 'datavisualizacao',
    nullable: true,
  })
  datavisualizacao: Date | null;

  @Column('character varying', { name: 'titulo', nullable: true, length: 255 })
  titulo: string | null;

  @Column('integer', { name: 'idusuario', nullable: true })
  idusuario: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Emailfaturamento, (emailfaturamento) => emailfaturamento.idenviofaturamento2)
  emailfaturamentos: Emailfaturamento[];

  @ManyToOne(() => Usuario, (usuario) => usuario.enviofaturamentos)
  @JoinColumn([{ name: 'idusuario', referencedColumnName: 'id' }])
  idusuario2: Usuario;

  @OneToMany(() => Enviofaturamentoatendimento, (enviofaturamentoatendimento) => enviofaturamentoatendimento.idenviofaturamento2)
  enviofaturamentoatendimentos: Enviofaturamentoatendimento[];

  @OneToMany(() => Receitaapropriada, (receitaapropriada) => receitaapropriada.idenviofaturamento)
  receitaapropriadas: Receitaapropriada[];
}
