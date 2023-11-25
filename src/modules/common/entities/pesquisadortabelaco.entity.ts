import { Tabelaco } from '@modules/common/entities/tabelaco.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('pesquisadortabelaco_pkey', ['id'], { unique: true })
@Index('ix_pesquisadortabelaco_fk_pesquisadortabelaco_idtabelaco', ['idtabelaco'], {})
@Entity('pesquisadortabelaco', { schema: 'public' })
export class Pesquisadortabelaco {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'curriculo',
    nullable: true,
    length: 255,
  })
  curriculo: string | null;

  @Column('boolean', { name: 'isbolsista', nullable: true })
  isbolsista: boolean | null;

  @Column('boolean', { name: 'isefetivo', nullable: true })
  isefetivo: boolean | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 75 })
  nome: string | null;

  @Column('character varying', {
    name: 'titulacao',
    nullable: true,
    length: 15,
  })
  titulacao: string | null;

  @Column('integer', { name: 'idtabelaco', nullable: true })
  idtabelaco: number | null;

  @ManyToOne(() => Tabelaco, (tabelaco) => tabelaco.pesquisadortabelacos)
  @JoinColumn([{ name: 'idtabelaco', referencedColumnName: 'id' }])
  idtabelaco2: Tabelaco;
}
