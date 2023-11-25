import { Atendimentopraticabdigital } from '@modules/brasil-mais/entities/atendimentopraticabdigital.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexolinhaproducaopraticabdigital } from './Anexolinhaproducaopraticabdigital';

@Index('linhadeproducaopraticabdigital_pkey', ['id'], { unique: true })
@Index('lnhdprdcprtcbdigitalfklnhdprdcprtcabdigitalidatendimentopratica', ['idatendimentopratica'], {})
@Entity('linhadeproducaopraticabdigital', { schema: 'public' })
export class Linhadeproducaopraticabdigital {
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

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @OneToMany(() => Anexolinhaproducaopraticabdigital, (anexolinhaproducaopraticabdigital) => anexolinhaproducaopraticabdigital.idlinhadeproducaodigital2)
  anexolinhaproducaopraticabdigitals: Anexolinhaproducaopraticabdigital[];

  @ManyToOne(() => Atendimentopraticabdigital, (atendimentopraticabdigital) => atendimentopraticabdigital.linhadeproducaopraticabdigitals)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticabdigital;
}
