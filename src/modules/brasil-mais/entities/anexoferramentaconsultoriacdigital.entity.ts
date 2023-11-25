import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ferramentaconsultoriacdigital } from './Ferramentaconsultoriacdigital';

@Index('anexoferramentaconsultoriacdigital_pkey', ['id'], { unique: true })
@Index('nxfrrmntcnsltriacdigitalfknxfrrmntcnsltoriacdigitalidferramenta', ['idferramenta'], {})
@Entity('anexoferramentaconsultoriacdigital', { schema: 'public' })
export class Anexoferramentaconsultoriacdigital {
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

  @Column('integer', { name: 'idferramenta', nullable: true })
  idferramenta: number | null;

  @ManyToOne(() => Ferramentaconsultoriacdigital, (ferramentaconsultoriacdigital) => ferramentaconsultoriacdigital.anexoferramentaconsultoriacdigitals)
  @JoinColumn([{ name: 'idferramenta', referencedColumnName: 'id' }])
  idferramenta2: Ferramentaconsultoriacdigital;
}
