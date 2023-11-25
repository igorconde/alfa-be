import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexolinhaproducaoc } from './anexolinhaproducaoc.entity';
import { Atendimentopraticac } from './atendimentopraticac.entity';
import { Tipoarranjofisicoc } from './tipoarranjofisicoc.entity';
import { Tiposistemaprodutivoc } from './tiposistemaprodutivoc.entity';

@Index('linhadeproducaoc_pkey', ['id'], { unique: true })
@Index('ix_linhadeproducaoc_fk_linhadeproducaoc_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('linhadeproducaoc', { schema: 'public' })
export class Linhadeproducaoc {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'coletaindicadorestext',
    nullable: true,
    length: 255,
  })
  coletaindicadorestext: string | null;

  @Column('character varying', {
    name: 'condicaodetrabalho',
    nullable: true,
    length: 255,
  })
  condicaodetrabalho: string | null;

  @Column('character varying', {
    name: 'graumanutencao',
    nullable: true,
    length: 255,
  })
  graumanutencao: string | null;

  @Column('character varying', {
    name: 'grauutilizacaotecnologica',
    nullable: true,
    length: 255,
  })
  grauutilizacaotecnologica: string | null;

  @Column('boolean', { name: 'ifcoletaindicadores', nullable: true })
  ifcoletaindicadores: boolean | null;

  @Column('character varying', {
    name: 'niveisacumuloestoque',
    nullable: true,
    length: 255,
  })
  niveisacumuloestoque: string | null;

  @Column('character varying', {
    name: 'organizacao5s',
    nullable: true,
    length: 255,
  })
  organizacao5s: string | null;

  @Column('character varying', {
    name: 'setupequipamentos',
    nullable: true,
    length: 255,
  })
  setupequipamentos: string | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'tipoproducao', nullable: true })
  tipoproducao: number | null;

  @Column('integer', { name: 'tipoproduto', nullable: true })
  tipoproduto: number | null;

  @Column('character varying', {
    name: 'variedadeproducao',
    nullable: true,
    length: 255,
  })
  variedadeproducao: string | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @OneToMany(() => Anexolinhaproducaoc, (anexolinhaproducaoc) => anexolinhaproducaoc.idlinhadeproducao2)
  anexolinhaproducaocs: Anexolinhaproducaoc[];

  @ManyToOne(() => Atendimentopraticac, (atendimentopraticac) => atendimentopraticac.linhadeproducaocs)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticac;

  @OneToMany(() => Tipoarranjofisicoc, (tipoarranjofisicoc) => tipoarranjofisicoc.idlinhadeproducao2)
  tipoarranjofisicocs: Tipoarranjofisicoc[];

  @OneToMany(() => Tiposistemaprodutivoc, (tiposistemaprodutivoc) => tiposistemaprodutivoc.idlinhadeproducao2)
  tiposistemaprodutivocs: Tiposistemaprodutivoc[];
}
