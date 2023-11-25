import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentoconsultoriad } from './atendimentoconsultoriad.entity';

@Index('avaliacaoconsultoriad_pkey', ['id'], { unique: true })
@Index('vlacaoconsultoriadfkvliacaoconsultoriadidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Entity('avaliacaoconsultoriad', { schema: 'public' })
export class Avaliacaoconsultoriad {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'pontuacaoaplicacaometodologia', nullable: true })
  pontuacaoaplicacaometodologia: number | null;

  @Column('integer', { name: 'pontuacaoatendimento', nullable: true })
  pontuacaoatendimento: number | null;

  @Column('integer', { name: 'pontuacaocapacidadeteorica', nullable: true })
  pontuacaocapacidadeteorica: number | null;

  @Column('integer', { name: 'pontuacaocustoproduto', nullable: true })
  pontuacaocustoproduto: number | null;

  @Column('integer', { name: 'pontuacaoexpectativas', nullable: true })
  pontuacaoexpectativas: number | null;

  @Column('integer', { name: 'pontuacaoresultados', nullable: true })
  pontuacaoresultados: number | null;

  @Column('integer', { name: 'pontuacaoresultadosmantidos', nullable: true })
  pontuacaoresultadosmantidos: number | null;

  @Column('integer', {
    name: 'pontuacaotempoexecucaometodologia',
    nullable: true,
  })
  pontuacaotempoexecucaometodologia: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentoconsultoria', nullable: true })
  idatendimentoconsultoria: number | null;

  @ManyToOne(() => Atendimentoconsultoriad, (atendimentoconsultoriad) => atendimentoconsultoriad.avaliacaoconsultoriads)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriad;
}
