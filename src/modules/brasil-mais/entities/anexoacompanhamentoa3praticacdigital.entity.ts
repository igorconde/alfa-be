import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Acompanhamentoa3praticacdigital } from './acompanhamentoa3praticacdigital.entity';

@Index('anexoacompanhamentoa3praticacdigital_pkey', ['id'], { unique: true })
@Index('nxcmpnhmnt3prtccdgtalfknxcmpnhmnt3prtccdgitalidacompanhamentoa3', ['idacompanhamentoa3'], {})
@Entity('anexoacompanhamentoa3praticacdigital', { schema: 'public' })
export class Anexoacompanhamentoa3praticacdigital {
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

  @Column('integer', { name: 'idacompanhamentoa3', nullable: true })
  idacompanhamentoa3: number | null;

  @ManyToOne(() => Acompanhamentoa3praticacdigital, (acompanhamentoa3praticacdigital) => acompanhamentoa3praticacdigital.anexoacompanhamentoa3praticacdigitals)
  @JoinColumn([{ name: 'idacompanhamentoa3', referencedColumnName: 'id' }])
  idacompanhamentoa: Acompanhamentoa3praticacdigital;
}
