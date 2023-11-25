import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Unidade } from './Unidade';
import { Eventocolaborador } from './Eventocolaborador';

@Index('evento_pkey', ['id'], { unique: true })
@Index('ix_evento_fk_evento_idunidade', ['idunidade'], {})
@Entity('evento', { schema: 'public' })
export class Evento {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ano', nullable: true })
  ano: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'cidade', nullable: true, length: 255 })
  cidade: string | null;

  @Column('character varying', {
    name: 'classificacao',
    nullable: true,
    length: 255,
  })
  classificacao: string | null;

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

  @Column('character varying', { name: 'estado', nullable: true, length: 20 })
  estado: string | null;

  @Column('boolean', { name: 'isorganizado', nullable: true })
  isorganizado: boolean | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 500 })
  nome: string | null;

  @Column('character varying', { name: 'pais', nullable: true, length: 255 })
  pais: string | null;

  @Column('character varying', {
    name: 'tipoevento',
    nullable: true,
    length: 255,
  })
  tipoevento: string | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('tsvector', { name: 'buscalivreevento', nullable: true })
  buscalivreevento: string | null;

  @Column('boolean', { name: 'isatendido', nullable: true })
  isatendido: boolean | null;

  @ManyToOne(() => Unidade, (unidade) => unidade.eventos)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;

  @OneToMany(() => Eventocolaborador, (eventocolaborador) => eventocolaborador.idevento2)
  eventocolaboradors: Eventocolaborador[];
}
