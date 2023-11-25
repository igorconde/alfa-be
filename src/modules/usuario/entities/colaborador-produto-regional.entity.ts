import { Produtoregional } from '@modules/portfolio/entities/produtoregional.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Colaborador } from './colaborador.entity';

@Index('colaboradorprodutoregional_pkey', ['id'], { unique: true })
@Index('icolaboradorprodutoregionalfkcolaborador', ['idcolaborador'], {})
@Index('icolaboradorprodutoregionalfkprodutoregional', ['idprodutoregional'], {})
@Entity('colaboradorprodutoregional', { schema: 'public' })
export class Colaboradorprodutoregional {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idcolaborador', nullable: true })
  idcolaborador: number | null;

  @Column('integer', { name: 'idprodutoregional', nullable: true })
  idprodutoregional: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.colaboradorprodutoregionals)
  @JoinColumn([{ name: 'idcolaborador', referencedColumnName: 'id' }])
  idcolaborador2: Colaborador;

  @ManyToOne(() => Produtoregional, (produtoregional) => produtoregional.colaboradorprodutoregionals)
  @JoinColumn([{ name: 'idprodutoregional', referencedColumnName: 'id' }])
  idprodutoregional2: Produtoregional;
}
