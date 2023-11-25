import { Column, Entity } from 'typeorm';

@Entity('receitafaturamentobackup2', { schema: 'public' })
export class Receitafaturamentobackup2 {
  @Column('integer', { name: 'id', nullable: true })
  id: number | null;

  @Column('date', { name: 'data', nullable: true })
  data: string | null;

  @Column('timestamp without time zone', {
    name: 'dataatualizacao',
    nullable: true,
  })
  dataatualizacao: Date | null;

  @Column('double precision', { name: 'valor', nullable: true, precision: 53 })
  valor: number | null;

  @Column('integer', { name: 'idenviofaturamentoatendimento', nullable: true })
  idenviofaturamentoatendimento: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idusuario', nullable: true })
  idusuario: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'codigointegracaoreceita',
    nullable: true,
    length: 45,
  })
  codigointegracaoreceita: string | null;

  @Column('character varying', {
    name: 'justificativa',
    nullable: true,
    length: 500,
  })
  justificativa: string | null;

  @Column('integer', { name: 'idprevisaoreceita', nullable: true })
  idprevisaoreceita: number | null;
}
