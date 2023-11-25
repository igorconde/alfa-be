import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Receitafaturamento } from './Receitafaturamento';

@Index('rateioreceitafaturamento_pkey', ['id'], { unique: true })
@Index('rtreceitafaturamentofkrtoreceitafaturamentoidreceitafaturamento', ['idreceitafaturamento'], {})
@Index('rateioreceitafaturamento_fk_rateioreceitafaturamento_idunidade', ['idunidade'], {})
@Entity('rateioreceitafaturamento', { schema: 'public' })
export class Rateioreceitafaturamento {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('double precision', {
    name: 'percentual',
    nullable: true,
    precision: 53,
  })
  percentual: number | null;

  @Column('integer', { name: 'idreceitafaturamento', nullable: true })
  idreceitafaturamento: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @ManyToOne(() => Receitafaturamento, (receitafaturamento) => receitafaturamento.rateioreceitafaturamentos)
  @JoinColumn([{ name: 'idreceitafaturamento', referencedColumnName: 'id' }])
  idreceitafaturamento2: Receitafaturamento;

  @ManyToOne(() => Unidade, (unidade) => unidade.rateioreceitafaturamentos)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
