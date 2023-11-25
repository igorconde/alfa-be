import { Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Producaoapropriada } from './Producaoapropriada';
import { Receitaapropriada } from './Receitaapropriada';

@Index('receitaapropriadaproducaoapropriada_pkey', ['id'], { unique: true })
@Entity('receitaapropriadaproducaoapropriada', { schema: 'public' })
export class Receitaapropriadaproducaoapropriada {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @ManyToOne(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.receitaapropriadaproducaoapropriadas)
  @JoinColumn([{ name: 'idproducaoapropriada', referencedColumnName: 'id' }])
  idproducaoapropriada: Producaoapropriada;

  @ManyToOne(() => Receitaapropriada, (receitaapropriada) => receitaapropriada.receitaapropriadaproducaoapropriadas)
  @JoinColumn([{ name: 'idreceitaapropriada', referencedColumnName: 'id' }])
  idreceitaapropriada: Receitaapropriada;
}
