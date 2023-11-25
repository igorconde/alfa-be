import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimento } from './Atendimento';
import { Unidade } from './Unidade';

@Index('previsaoproducao_pkey', ['id'], { unique: true })
@Entity('previsaoproducao', { schema: 'public' })
export class Previsaoproducao {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'numerodeproducaoestimada', nullable: true })
  numerodeproducaoestimada: number | null;

  @Column('integer', { name: 'numerodereceitaestimada', nullable: true })
  numerodereceitaestimada: number | null;

  @Column('integer', { name: 'percproducaoestimada', nullable: true })
  percproducaoestimada: number | null;

  @Column('integer', { name: 'percreceitaestimada', nullable: true })
  percreceitaestimada: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.previsaoproducaos)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento: Atendimento;

  @ManyToOne(() => Unidade, (unidade) => unidade.previsaoproducaos)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade: Unidade;
}
