import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Maturidadepraticacdigital } from './Maturidadepraticacdigital';

@Index('anexomaturidadepraticacdigital_pkey', ['id'], { unique: true })
@Index('nxmtrdadepraticacdigitalfknxmtridadepraticacdigitalidmaturidade', ['idmaturidade'], {})
@Entity('anexomaturidadepraticacdigital', { schema: 'public' })
export class Anexomaturidadepraticacdigital {
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

  @Column('integer', { name: 'idmaturidade', nullable: true })
  idmaturidade: number | null;

  @ManyToOne(() => Maturidadepraticacdigital, (maturidadepraticacdigital) => maturidadepraticacdigital.anexomaturidadepraticacdigitals)
  @JoinColumn([{ name: 'idmaturidade', referencedColumnName: 'id' }])
  idmaturidade2: Maturidadepraticacdigital;
}
