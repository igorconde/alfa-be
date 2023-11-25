import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Encontroalinhamentobdigital } from './Encontroalinhamentobdigital';

@Index('anexoencontroalinhamentobdigital_pkey', ['id'], { unique: true })
@Index('nxncntrlnhmntbdgtalfknxncntrlnhmntbdigitalidencontroalinhamento', ['idencontroalinhamento'], {})
@Entity('anexoencontroalinhamentobdigital', { schema: 'public' })
export class Anexoencontroalinhamentobdigital {
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

  @Column('integer', { name: 'idencontroalinhamento', nullable: true })
  idencontroalinhamento: number | null;

  @ManyToOne(() => Encontroalinhamentobdigital, (encontroalinhamentobdigital) => encontroalinhamentobdigital.anexoencontroalinhamentobdigitals)
  @JoinColumn([{ name: 'idencontroalinhamento', referencedColumnName: 'id' }])
  idencontroalinhamento2: Encontroalinhamentobdigital;
}
