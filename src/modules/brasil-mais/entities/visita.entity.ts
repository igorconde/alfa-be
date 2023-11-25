import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produtonacional } from './Produtonacional';
import { Visitacolaborador } from './Visitacolaborador';

@Index('visita_pkey', ['id'], { unique: true })
@Index('ix_visita_fk_visita_idunidade', ['idunidade'], {})
@Entity('visita', { schema: 'public' })
export class Visita {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ano', nullable: true })
  ano: number | null;

  @Column('character varying', { name: 'cidade', nullable: true, length: 255 })
  cidade: string | null;

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

  @Column('character varying', { name: 'empresa', nullable: true, length: 500 })
  empresa: string | null;

  @Column('character varying', { name: 'estado', nullable: true, length: 20 })
  estado: string | null;

  @Column('boolean', { name: 'isrecebida', nullable: true })
  isrecebida: boolean | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 500 })
  nome: string | null;

  @Column('character varying', { name: 'pais', nullable: true, length: 255 })
  pais: string | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('tsvector', { name: 'buscalivrevisita', nullable: true })
  buscalivrevisita: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @ManyToOne(() => Produtonacional, (produtonacional) => produtonacional.visitas)
  @JoinColumn([{ name: 'idprodutonacional', referencedColumnName: 'id' }])
  idprodutonacional: Produtonacional;

  @ManyToOne(() => Unidade, (unidade) => unidade.visitas)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;

  @OneToMany(() => Visitacolaborador, (visitacolaborador) => visitacolaborador.idvisita2)
  visitacolaboradors: Visitacolaborador[];
}
