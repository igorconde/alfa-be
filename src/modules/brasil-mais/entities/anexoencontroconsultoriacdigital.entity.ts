import { Encontroconsultoriacdigital } from '@modules/brasil-mais/entities/encontroconsultoriacdigital.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('anexoencontroconsultoriacdigital_pkey', ['id'], { unique: true })
@Index('nxncntrcnsltrcdgtalfknxncntrcnsltrcdigitalidencontroconsultoria', ['idencontroconsultoria'], {})
@Entity('anexoencontroconsultoriacdigital', { schema: 'public' })
export class Anexoencontroconsultoriacdigital {
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

  @Column('integer', { name: 'idencontroconsultoria', nullable: true })
  idencontroconsultoria: number | null;

  @ManyToOne(() => Encontroconsultoriacdigital, (encontroconsultoriacdigital) => encontroconsultoriacdigital.anexoencontroconsultoriacdigitals)
  @JoinColumn([{ name: 'idencontroconsultoria', referencedColumnName: 'id' }])
  idencontroconsultoria2: Encontroconsultoriacdigital;
}
