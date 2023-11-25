import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Itema3analisepraticacdigital } from './Itema3analisepraticacdigital';

@Index('anexoitema3analisepraticacdigital_pkey', ['id'], { unique: true })
@Index('nxtm3nalisepraticacdigitalfknxtm3analisepraticacdigitaliditema3', ['iditema3'], {})
@Entity('anexoitema3analisepraticacdigital', { schema: 'public' })
export class Anexoitema3analisepraticacdigital {
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

  @ManyToOne(() => Itema3analisepraticacdigital, (itema3analisepraticacdigital) => itema3analisepraticacdigital.anexoitema3analisepraticacdigitals)
  @JoinColumn([{ name: 'iditema3', referencedColumnName: 'id' }])
  iditema: Itema3analisepraticacdigital;
}