import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('previsaoproducaocompartilhada_pkey', ['id'], { unique: true })
@Index('iprevisaoproducaocompartilhadafkatendimento', ['idatendimento'], {})
@Index('iprevisaoproducaocompartilhadafkunidade', ['idunidade'], {})
@Entity('previsaoproducaocompartilhada', { schema: 'public' })
export class Previsaoproducaocompartilhada {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'numerodeproducaoestimada', nullable: true })
  numerodeproducaoestimada: number | null;

  @Column('double precision', {
    name: 'numerodereceitaestimada',
    nullable: true,
    precision: 53,
  })
  numerodereceitaestimada: number | null;

  @Column('double precision', {
    name: 'percproducaoestimada',
    nullable: true,
    precision: 53,
  })
  percproducaoestimada: number | null;

  @Column('double precision', {
    name: 'percreceitaestimada',
    nullable: true,
    precision: 53,
  })
  percreceitaestimada: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.previsaoproducaocompartilhadas)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Unidade, (unidade) => unidade.previsaoproducaocompartilhadas)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}