import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimento } from './Atendimento';
import { Unidade } from './Unidade';

@Index('previsaoapropriacaoproducao_pkey', ['id'], { unique: true })
@Entity('previsaoapropriacaoproducao', { schema: 'public' })
export class Previsaoapropriacaoproducao {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('double precision', {
    name: 'numerodeproducaoestimada',
    nullable: true,
    precision: 53,
  })
  numerodeproducaoestimada: number | null;

  @Column('double precision', {
    name: 'numerodereceitaestimada',
    nullable: true,
    precision: 53,
  })
  numerodereceitaestimada: number | null;

  @Column('character varying', { name: 'tipo', nullable: true, length: 255 })
  tipo: string | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.previsaoapropriacaoproducaos)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento: Atendimento;

  @ManyToOne(() => Unidade, (unidade) => unidade.previsaoapropriacaoproducaos)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade: Unidade;
}
