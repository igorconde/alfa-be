import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoprocessoprodutivoc } from './Anexoprocessoprodutivoc';
import { Atendimentopraticac } from './Atendimentopraticac';

@Index('processoprodutivoc_pkey', ['id'], { unique: true })
@Index('processoprodutivoc_fk_processoprodutivoc_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('processoprodutivoc', { schema: 'public' })
export class Processoprodutivoc {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('double precision', {
    name: 'capacidadeprodutiva',
    nullable: true,
    precision: 53,
  })
  capacidadeprodutiva: number | null;

  @Column('double precision', {
    name: 'horasporturno',
    nullable: true,
    precision: 53,
  })
  horasporturno: number | null;

  @Column('double precision', {
    name: 'insumos',
    nullable: true,
    precision: 53,
  })
  insumos: number | null;

  @Column('double precision', {
    name: 'materiaprima',
    nullable: true,
    precision: 53,
  })
  materiaprima: number | null;

  @Column('double precision', {
    name: 'movimentacao',
    nullable: true,
    precision: 53,
  })
  movimentacao: number | null;

  @Column('double precision', {
    name: 'numerodeturnos',
    nullable: true,
    precision: 53,
  })
  numerodeturnos: number | null;

  @Column('double precision', {
    name: 'operadoresporturno',
    nullable: true,
    precision: 53,
  })
  operadoresporturno: number | null;

  @Column('double precision', {
    name: 'produtividade',
    nullable: true,
    precision: 53,
  })
  produtividade: number | null;

  @Column('double precision', {
    name: 'qualidade',
    nullable: true,
    precision: 53,
  })
  qualidade: number | null;

  @Column('double precision', {
    name: 'retrabalho',
    nullable: true,
    precision: 53,
  })
  retrabalho: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @Column('double precision', {
    name: 'descarte',
    nullable: true,
    precision: 53,
  })
  descarte: number | null;

  @Column('double precision', {
    name: 'horasporoperador',
    nullable: true,
    precision: 53,
  })
  horasporoperador: number | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('double precision', {
    name: 'producaoporturno',
    nullable: true,
    precision: 53,
  })
  producaoporturno: number | null;

  @Column('double precision', {
    name: 'superproducao',
    nullable: true,
    precision: 53,
  })
  superproducao: number | null;

  @Column('double precision', {
    name: 'retrabalhoporturno',
    nullable: true,
    precision: 53,
  })
  retrabalhoporturno: number | null;

  @OneToMany(() => Anexoprocessoprodutivoc, (anexoprocessoprodutivoc) => anexoprocessoprodutivoc.idprocessoprodutivo2)
  anexoprocessoprodutivocs: Anexoprocessoprodutivoc[];

  @ManyToOne(() => Atendimentopraticac, (atendimentopraticac) => atendimentopraticac.processoprodutivocs)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticac;
}
