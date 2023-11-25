import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atividadementoriateoricadigital } from './Atividadementoriateoricadigital';

@Index('anexoatividadeteoricadigital_pkey', ['id'], { unique: true })
@Index('nxtvddeteoricadigitalfknxtvdadeteoricadigitalidatividadeteorica', ['idatividadeteorica'], {})
@Entity('anexoatividadeteoricadigital', { schema: 'public' })
export class Anexoatividadeteoricadigital {
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

  @Column('integer', { name: 'idatividadeteorica', nullable: true })
  idatividadeteorica: number | null;

  @ManyToOne(() => Atividadementoriateoricadigital, (atividadementoriateoricadigital) => atividadementoriateoricadigital.anexoatividadeteoricadigitals)
  @JoinColumn([{ name: 'idatividadeteorica', referencedColumnName: 'id' }])
  idatividadeteorica2: Atividadementoriateoricadigital;
}
