import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexolinhaproducaoalinhamentobdigital } from './Anexolinhaproducaoalinhamentobdigital';
import { Atendimentoalinhamentobdigital } from './Atendimentoalinhamentobdigital';

@Index('linhadeproducaoalinhamentobdigital_pkey', ['id'], { unique: true })
@Index('lnhdprdclnhmntbdgtlfklnhdprdclnhmntbdgtldatendimentoalinhamento', ['idatendimentoalinhamento'], {})
@Entity('linhadeproducaoalinhamentobdigital', { schema: 'public' })
export class Linhadeproducaoalinhamentobdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'acompanhamentoproducao',
    nullable: true,
    length: 255,
  })
  acompanhamentoproducao: string | null;

  @Column('character varying', {
    name: 'acompanhamentoprodutividade',
    nullable: true,
    length: 255,
  })
  acompanhamentoprodutividade: string | null;

  @Column('character varying', {
    name: 'linhamonitorada',
    nullable: true,
    length: 255,
  })
  linhamonitorada: string | null;

  @Column('character varying', {
    name: 'linhaproducaointervencao',
    nullable: true,
    length: 255,
  })
  linhaproducaointervencao: string | null;

  @Column('character varying', {
    name: 'linhaproducaolean',
    nullable: true,
    length: 255,
  })
  linhaproducaolean: string | null;

  @Column('boolean', { name: 'metodomonitoramento', nullable: true })
  metodomonitoramento: boolean | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('character varying', {
    name: 'processomanufatura',
    nullable: true,
    length: 255,
  })
  processomanufatura: string | null;

  @Column('boolean', { name: 'producaoseriada', nullable: true })
  producaoseriada: boolean | null;

  @Column('boolean', { name: 'sabemotivosparadadelinha', nullable: true })
  sabemotivosparadadelinha: boolean | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('boolean', { name: 'temaparelhomina', nullable: true })
  temaparelhomina: boolean | null;

  @Column('boolean', { name: 'temresponsavelmina', nullable: true })
  temresponsavelmina: boolean | null;

  @Column('boolean', { name: 'tratamotivosparadadelinha', nullable: true })
  tratamotivosparadadelinha: boolean | null;

  @Column('boolean', { name: 'wifiestavel', nullable: true })
  wifiestavel: boolean | null;

  @Column('integer', { name: 'idatendimentoalinhamento', nullable: true })
  idatendimentoalinhamento: number | null;

  @OneToMany(() => Anexolinhaproducaoalinhamentobdigital, (anexolinhaproducaoalinhamentobdigital) => anexolinhaproducaoalinhamentobdigital.idlinhadeproducaodigital2)
  anexolinhaproducaoalinhamentobdigitals: Anexolinhaproducaoalinhamentobdigital[];

  @ManyToOne(() => Atendimentoalinhamentobdigital, (atendimentoalinhamentobdigital) => atendimentoalinhamentobdigital.linhadeproducaoalinhamentobdigitals)
  @JoinColumn([{ name: 'idatendimentoalinhamento', referencedColumnName: 'id' }])
  idatendimentoalinhamento2: Atendimentoalinhamentobdigital;
}
