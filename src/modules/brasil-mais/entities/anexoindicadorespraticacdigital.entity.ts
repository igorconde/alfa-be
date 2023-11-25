import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Indicadorespraticacdigital } from './Indicadorespraticacdigital';

@Index('anexoindicadorespraticacdigital_pkey', ['id'], { unique: true })
@Index('nxndcdrspraticacdigitalfknxndcdorespraticacdigitalidindicadores', ['idindicadores'], {})
@Entity('anexoindicadorespraticacdigital', { schema: 'public' })
export class Anexoindicadorespraticacdigital {
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

  @Column('integer', { name: 'idindicadores', nullable: true })
  idindicadores: number | null;

  @ManyToOne(() => Indicadorespraticacdigital, (indicadorespraticacdigital) => indicadorespraticacdigital.anexoindicadorespraticacdigitals)
  @JoinColumn([{ name: 'idindicadores', referencedColumnName: 'id' }])
  idindicadores2: Indicadorespraticacdigital;
}
