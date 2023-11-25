import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atividadementoriateorica } from './Atividadementoriateorica';

@Index('anexoatividadeteorica_pkey', ['id'], { unique: true })
@Index('anexoatividadeteoricafkanexoatividadeteorica_idatividadeteorica', ['idatividadeteorica'], {})
@Entity('anexoatividadeteorica', { schema: 'public' })
export class Anexoatividadeteorica {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

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

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @ManyToOne(() => Atividadementoriateorica, (atividadementoriateorica) => atividadementoriateorica.anexoatividadeteoricas)
  @JoinColumn([{ name: 'idatividadeteorica', referencedColumnName: 'id' }])
  idatividadeteorica2: Atividadementoriateorica;
}
