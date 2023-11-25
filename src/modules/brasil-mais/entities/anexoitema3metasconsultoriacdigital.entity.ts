import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Itema3metasconsultoriacdigital } from './Itema3metasconsultoriacdigital';

@Index('anexoitema3metasconsultoriacdigital_pkey', ['id'], { unique: true })
@Index('nxtm3mtscnsultoriacdigitalfknxtm3mtsconsultoriacdigitaliditema3', ['iditema3'], {})
@Entity('anexoitema3metasconsultoriacdigital', { schema: 'public' })
export class Anexoitema3metasconsultoriacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @Column('character varying', {
    name: 'nomearquivo',
    nullable: true,
    length: 255,
  })
  nomearquivo: string | null;

  @Column('bigint', { name: 'tamanho', nullable: true })
  tamanho: string | null;

  @Column('character varying', { name: 'tipo', nullable: true, length: 255 })
  tipo: string | null;

  @Column('character varying', { name: 'url', nullable: true, length: 255 })
  url: string | null;

  @Column('integer', { name: 'iditema3', nullable: true })
  iditema3: number | null;

  @ManyToOne(() => Itema3metasconsultoriacdigital, (itema3metasconsultoriacdigital) => itema3metasconsultoriacdigital.anexoitema3metasconsultoriacdigitals)
  @JoinColumn([{ name: 'iditema3', referencedColumnName: 'id' }])
  iditema: Itema3metasconsultoriacdigital;
}
