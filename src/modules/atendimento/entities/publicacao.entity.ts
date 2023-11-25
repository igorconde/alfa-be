import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Publicacaocolaborador } from './Publicacaocolaborador';

@Index('publicacao_pkey', ['id'], { unique: true })
@Index('ix_publicacao_fk_publicacao_idunidade', ['idunidade'], {})
@Entity('publicacao', { schema: 'public' })
export class Publicacao {
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

  @Column('character varying', {
    name: 'autores',
    nullable: true,
    length: 1000,
  })
  autores: string | null;

  @Column('character varying', { name: 'cidade', nullable: true, length: 255 })
  cidade: string | null;

  @Column('character varying', {
    name: 'detalhes',
    nullable: true,
    length: 255,
  })
  detalhes: string | null;

  @Column('boolean', { name: 'iscomercial', nullable: true })
  iscomercial: boolean | null;

  @Column('character varying', {
    name: 'nomemeiopublicacao',
    nullable: true,
    length: 500,
  })
  nomemeiopublicacao: string | null;

  @Column('character varying', { name: 'pais', nullable: true, length: 50 })
  pais: string | null;

  @Column('character varying', {
    name: 'tipopublicacao',
    nullable: true,
    length: 255,
  })
  tipopublicacao: string | null;

  @Column('character varying', { name: 'titulo', nullable: true, length: 500 })
  titulo: string | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('tsvector', { name: 'buscalivrepublicacao', nullable: true })
  buscalivrepublicacao: string | null;

  @Column('boolean', { name: 'iscientifica', nullable: true })
  iscientifica: boolean | null;

  @ManyToOne(() => Unidade, (unidade) => unidade.publicacaos)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;

  @OneToMany(() => Publicacaocolaborador, (publicacaocolaborador) => publicacaocolaborador.idpublicacao2)
  publicacaocolaboradors: Publicacaocolaborador[];
}
