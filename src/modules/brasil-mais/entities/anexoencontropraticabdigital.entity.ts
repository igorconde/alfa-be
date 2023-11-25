import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Encontropraticabdigital } from './Encontropraticabdigital';

@Index('anexoencontropraticabdigital_pkey', ['id'], { unique: true })
@Index('nxncntrpraticabdigitalfknxncntrpraticabdigitalidencontropratica', ['idencontropratica'], {})
@Entity('anexoencontropraticabdigital', { schema: 'public' })
export class Anexoencontropraticabdigital {
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

  @Column('integer', { name: 'idencontropratica', nullable: true })
  idencontropratica: number | null;

  @ManyToOne(() => Encontropraticabdigital, (encontropraticabdigital) => encontropraticabdigital.anexoencontropraticabdigitals)
  @JoinColumn([{ name: 'idencontropratica', referencedColumnName: 'id' }])
  idencontropratica2: Encontropraticabdigital;
}
