import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Documentacaoconsultoriaddigital } from './Documentacaoconsultoriaddigital';

@Index('anexodocumentacaoconsultoriaddigital_pkey', ['id'], { unique: true })
@Index('nxdcmntccnsltraddigitalfknxdcmntccnsltriaddigitaliddocumentacao', ['iddocumentacao'], {})
@Entity('anexodocumentacaoconsultoriaddigital', { schema: 'public' })
export class Anexodocumentacaoconsultoriaddigital {
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

  @Column('integer', { name: 'iddocumentacao', nullable: true })
  iddocumentacao: number | null;

  @ManyToOne(() => Documentacaoconsultoriaddigital, (documentacaoconsultoriaddigital) => documentacaoconsultoriaddigital.anexodocumentacaoconsultoriaddigitals)
  @JoinColumn([{ name: 'iddocumentacao', referencedColumnName: 'id' }])
  iddocumentacao2: Documentacaoconsultoriaddigital;
}
