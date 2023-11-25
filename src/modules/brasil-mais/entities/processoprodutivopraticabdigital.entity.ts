import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoprocessoprodutivopraticabdigital } from './Anexoprocessoprodutivopraticabdigital';
import { Atendimentopraticabdigital } from './Atendimentopraticabdigital';

@Index('processoprodutivopraticabdigital_pkey', ['id'], { unique: true })
@Index('prcssprdtvprtcbdgtalfkprcssprdtvprtcbdgitalidatendimentopratica', ['idatendimentopratica'], {})
@Entity('processoprodutivopraticabdigital', { schema: 'public' })
export class Processoprodutivopraticabdigital {
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
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', {
    name: 'faturamento',
    nullable: true,
    length: 255,
  })
  faturamento: string | null;

  @Column('character varying', {
    name: 'metodocontagemproducao',
    nullable: true,
    length: 255,
  })
  metodocontagemproducao: string | null;

  @Column('boolean', { name: 'metodomonitoramento', nullable: true })
  metodomonitoramento: boolean | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('double precision', {
    name: 'pontuacaomaturidade',
    nullable: true,
    precision: 53,
  })
  pontuacaomaturidade: number | null;

  @Column('boolean', { name: 'possuierp', nullable: true })
  possuierp: boolean | null;

  @Column('character varying', { name: 'qualerp', nullable: true, length: 255 })
  qualerp: string | null;

  @Column('integer', { name: 'quantidadefuncionarios', nullable: true })
  quantidadefuncionarios: number | null;

  @Column('boolean', { name: 'sabemotivosparadadelinha', nullable: true })
  sabemotivosparadadelinha: boolean | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('boolean', { name: 'tratamotivosparadadelinha', nullable: true })
  tratamotivosparadadelinha: boolean | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @OneToMany(() => Anexoprocessoprodutivopraticabdigital, (anexoprocessoprodutivopraticabdigital) => anexoprocessoprodutivopraticabdigital.idprocessoprodutivodigital2)
  anexoprocessoprodutivopraticabdigitals: Anexoprocessoprodutivopraticabdigital[];

  @ManyToOne(() => Atendimentopraticabdigital, (atendimentopraticabdigital) => atendimentopraticabdigital.processoprodutivopraticabdigitals)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticabdigital;
}
