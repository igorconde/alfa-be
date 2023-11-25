import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoprocessoprodutivoalinhamentobdigital } from './anexoprocessoprodutivoalinhamentobdigital.entity';
import { Atendimentoalinhamentobdigital } from './atendimentoalinhamentobdigital.entity';

@Index('processoprodutivoalinhamentobdigital_pkey', ['id'], { unique: true })
@Index('prcssprdtvlnhmntbdgtlprcssprdtvlnhmntbdgtldtndimentoalinhamento', ['idatendimentoalinhamento'], {})
@Entity('processoprodutivoalinhamentobdigital', { schema: 'public' })
export class Processoprodutivoalinhamentobdigital {
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

  @Column('integer', { name: 'idatendimentoalinhamento', nullable: true })
  idatendimentoalinhamento: number | null;

  @OneToMany(() => Anexoprocessoprodutivoalinhamentobdigital, (anexoprocessoprodutivoalinhamentobdigital) => anexoprocessoprodutivoalinhamentobdigital.idprocessoprodutivodigital2)
  anexoprocessoprodutivoalinhamentobdigitals: Anexoprocessoprodutivoalinhamentobdigital[];

  @ManyToOne(() => Atendimentoalinhamentobdigital, (atendimentoalinhamentobdigital) => atendimentoalinhamentobdigital.processoprodutivoalinhamentobdigitals)
  @JoinColumn([{ name: 'idatendimentoalinhamento', referencedColumnName: 'id' }])
  idatendimentoalinhamento2: Atendimentoalinhamentobdigital;
}
