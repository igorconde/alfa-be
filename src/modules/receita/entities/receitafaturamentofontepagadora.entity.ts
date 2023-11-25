import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from './Cliente';
import { Receitafaturamento } from './Receitafaturamento';

@Index('receitafaturamentofontepagadora_pkey', ['id'], { unique: true })
@Index('rctftrmntofontepagadorafkrctftrmntofontepagadoraidfontepagadora', ['idfontepagadora'], {})
@Index('rctftrmntfntpagadorafkrctftrmntfntepagadoraidreceitafaturamento', ['idreceitafaturamento'], {})
@Entity('receitafaturamentofontepagadora', { schema: 'public' })
export class Receitafaturamentofontepagadora {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('double precision', { name: 'valor', nullable: true, precision: 53 })
  valor: number | null;

  @Column('integer', { name: 'idreceitafaturamento', nullable: true })
  idreceitafaturamento: number | null;

  @Column('integer', { name: 'idfontepagadora', nullable: true })
  idfontepagadora: number | null;

  @ManyToOne(() => Cliente, (cliente) => cliente.receitafaturamentofontepagadoras)
  @JoinColumn([{ name: 'idfontepagadora', referencedColumnName: 'id' }])
  idfontepagadora2: Cliente;

  @ManyToOne(() => Receitafaturamento, (receitafaturamento) => receitafaturamento.receitafaturamentofontepagadoras)
  @JoinColumn([{ name: 'idreceitafaturamento', referencedColumnName: 'id' }])
  idreceitafaturamento2: Receitafaturamento;
}
