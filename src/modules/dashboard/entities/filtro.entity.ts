import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('filtro_pkey', ['id'], { unique: true })
@Entity('filtro', { schema: 'public' })
export class Filtro {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'atendimentostatussi',
    nullable: true,
    length: 45,
  })
  atendimentostatussi: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'cliente', nullable: true })
  cliente: number | null;

  @Column('date', { name: 'datafim', nullable: true })
  datafim: string | null;

  @Column('date', { name: 'datainicio', nullable: true })
  datainicio: string | null;

  @Column('integer', { name: 'portecliente', nullable: true })
  portecliente: number | null;

  @Column('integer', { name: 'produtocategoria', nullable: true })
  produtocategoria: number | null;

  @Column('integer', { name: 'produtolinha', nullable: true })
  produtolinha: number | null;

  @Column('integer', { name: 'produtonacional', nullable: true })
  produtonacional: number | null;

  @Column('integer', { name: 'produtoregional', nullable: true })
  produtoregional: number | null;

  @Column('character varying', { name: 'status', nullable: true, length: 45 })
  status: string | null;

  @Column('character varying', {
    name: 'tipografico',
    nullable: true,
    length: 45,
  })
  tipografico: string | null;

  @Column('integer', { name: 'tipopessoa', nullable: true })
  tipopessoa: number | null;

  @Column('integer', { name: 'tipoprevisaoreceita', nullable: true })
  tipoprevisaoreceita: number | null;

  @Column('integer', { name: 'unidade', nullable: true })
  unidade: number | null;

  @Column('integer', { name: 'unidadefederativa', nullable: true })
  unidadefederativa: number | null;

  @Column('integer', { name: 'usuario', nullable: true })
  usuario: number | null;

  @Column('character varying', {
    name: 'colaborador',
    nullable: true,
    length: 255,
  })
  colaborador: string | null;

  @Column('character varying', {
    name: 'colaboradores',
    nullable: true,
    length: 255,
  })
  colaboradores: string | null;

  @Column('character varying', {
    name: 'unidades',
    nullable: true,
    length: 255,
  })
  unidades: string | null;

  @Column('boolean', {
    name: 'conforme',
    nullable: true,
    default: () => 'false',
  })
  conforme: boolean | null;

  @Column('boolean', {
    name: 'emanalise',
    nullable: true,
    default: () => 'false',
  })
  emanalise: boolean | null;

  @Column('boolean', {
    name: 'naoconforme',
    nullable: true,
    default: () => 'false',
  })
  naoconforme: boolean | null;
}
