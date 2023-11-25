import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexolinhaproducaod } from './anexolinhaproducaod.entity';
import { Atendimentopraticad } from './atendimentopraticad.entity';
import { Tipoarranjofisicod } from './tipoarranjofisicod.entity';
import { Tiposistemaprodutivod } from './tiposistemaprodutivod.entity';

@Index('linhadeproducaod_pkey', ['id'], { unique: true })
@Index('ix_linhadeproducaod_fk_linhadeproducaod_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('linhadeproducaod', { schema: 'public' })
export class Linhadeproducaod {
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

  @OneToMany(() => Anexolinhaproducaod, (anexolinhaproducaod) => anexolinhaproducaod.idlinhadeproducao2)
  anexolinhaproducaods: Anexolinhaproducaod[];

  @ManyToOne(() => Atendimentopraticad, (atendimentopraticad) => atendimentopraticad.linhadeproducaods)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticad;

  @OneToMany(() => Tipoarranjofisicod, (tipoarranjofisicod) => tipoarranjofisicod.idlinhadeproducao2)
  tipoarranjofisicods: Tipoarranjofisicod[];

  @OneToMany(() => Tiposistemaprodutivod, (tiposistemaprodutivod) => tiposistemaprodutivod.idlinhadeproducao2)
  tiposistemaprodutivods: Tiposistemaprodutivod[];
}
