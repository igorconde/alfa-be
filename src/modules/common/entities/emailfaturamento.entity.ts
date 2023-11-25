import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Enviofaturamento } from './Enviofaturamento';

@Index('emailfaturamento_pkey', ['id'], { unique: true })
@Index('iemailfaturamentofkenviofaturamento', ['idenviofaturamento'], {})
@Entity('emailfaturamento', { schema: 'public' })
export class Emailfaturamento {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('integer', { name: 'idenviofaturamento', nullable: true })
  idenviofaturamento: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Enviofaturamento, (enviofaturamento) => enviofaturamento.emailfaturamentos)
  @JoinColumn([{ name: 'idenviofaturamento', referencedColumnName: 'id' }])
  idenviofaturamento2: Enviofaturamento;
}
