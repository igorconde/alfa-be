import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Receitaapropriada } from './Receitaapropriada';

@Index('rateioreceitaapropriada_pkey', ['id'], { unique: true })
@Index('rtoreceitaapropriadafkrteioreceitaapropriadaidreceitaapropriada', ['idreceitaapropriada'], {})
@Index('ix_rateioreceitaapropriada_fk_rateioreceitaapropriada_idunidade', ['idunidade'], {})
@Entity('rateioreceitaapropriada', { schema: 'public' })
export class Rateioreceitaapropriada {
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

  @Column('integer', { name: 'idreceitaapropriada', nullable: true })
  idreceitaapropriada: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @ManyToOne(() => Receitaapropriada, (receitaapropriada) => receitaapropriada.rateioreceitaapropriadas)
  @JoinColumn([{ name: 'idreceitaapropriada', referencedColumnName: 'id' }])
  idreceitaapropriada2: Receitaapropriada;

  @ManyToOne(() => Unidade, (unidade) => unidade.rateioreceitaapropriadas)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
