import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Itema3historicoconsultoriacdigital } from './Itema3historicoconsultoriacdigital';

@Index('anexoitema3historicoconsultoriacdigital_pkey', ['id'], { unique: true })
@Index('nxtm3hstrccnsltriacdigitalfknxtm3hstrccnsltoriacdigitaliditema3', ['iditema3'], {})
@Entity('anexoitema3historicoconsultoriacdigital', { schema: 'public' })
export class Anexoitema3historicoconsultoriacdigital {
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

  @ManyToOne(() => Itema3historicoconsultoriacdigital, (itema3historicoconsultoriacdigital) => itema3historicoconsultoriacdigital.anexoitema3historicoconsultoriacdigitals)
  @JoinColumn([{ name: 'iditema3', referencedColumnName: 'id' }])
  iditema: Itema3historicoconsultoriacdigital;
}
