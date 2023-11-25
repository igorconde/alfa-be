import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Resultadoconsultoriaddigital } from './Resultadoconsultoriaddigital';

@Index('assinaturaconsultoriaddigital_pkey', ['id'], { unique: true })
@Index('ssntrcnsltrddigitalfkssntrcnsltraddigitalidresultadoconsultoria', ['idresultadoconsultoria'], {})
@Entity('assinaturaconsultoriaddigital', { schema: 'public' })
export class Assinaturaconsultoriaddigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('integer', { name: 'idmentor', nullable: true })
  idmentor: number | null;

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

  @Column('integer', { name: 'idresultadoconsultoria', nullable: true })
  idresultadoconsultoria: number | null;

  @ManyToOne(() => Resultadoconsultoriaddigital, (resultadoconsultoriaddigital) => resultadoconsultoriaddigital.assinaturaconsultoriaddigitals)
  @JoinColumn([{ name: 'idresultadoconsultoria', referencedColumnName: 'id' }])
  idresultadoconsultoria2: Resultadoconsultoriaddigital;
}
