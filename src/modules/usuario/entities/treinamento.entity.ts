import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Treinamentocolaborador } from './treinamento-colaborador.entity';

@Index('treinamento_pkey', ['id'], { unique: true })
@Index('ix_treinamento_fk_treinamento_idunidade', ['idunidade'], {})
@Entity('treinamento', { schema: 'public' })
export class Treinamento {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'areaconhecimento',
    nullable: true,
    length: 255,
  })
  areaconhecimento: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('date', { name: 'dataconclusao', nullable: true })
  dataconclusao: string | null;

  @Column('date', { name: 'datainicio', nullable: true })
  datainicio: string | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 500,
  })
  descricao: string | null;

  @Column('double precision', {
    name: 'duration',
    nullable: true,
    precision: 53,
  })
  duration: number | null;

  @Column('character varying', { name: 'titulo', nullable: true, length: 500 })
  titulo: string | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('tsvector', { name: 'buscalivretreinamento', nullable: true })
  buscalivretreinamento: string | null;

  @Column('date', { name: 'datarealizado', nullable: true })
  datarealizado: string | null;

  @Column('double precision', {
    name: 'duracao',
    nullable: true,
    precision: 53,
  })
  duracao: number | null;

  @ManyToOne(() => Unidade, (unidade) => unidade.treinamentos)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;

  @OneToMany(() => Treinamentocolaborador, (treinamentocolaborador) => treinamentocolaborador.idtreinamento2)
  treinamentocolaboradors: Treinamentocolaborador[];
}
