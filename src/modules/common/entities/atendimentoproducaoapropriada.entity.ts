import { Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimento } from './Atendimento';
import { Producaoapropriada } from './Producaoapropriada';

@Index('atendimentoproducaoapropriada_pkey', ['id'], { unique: true })
@Entity('atendimentoproducaoapropriada', { schema: 'public' })
export class Atendimentoproducaoapropriada {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.atendimentoproducaoapropriadas)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento: Atendimento;

  @ManyToOne(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.atendimentoproducaoapropriadas)
  @JoinColumn([{ name: 'idproducaoapropriada', referencedColumnName: 'id' }])
  idproducaoapropriada: Producaoapropriada;
}
