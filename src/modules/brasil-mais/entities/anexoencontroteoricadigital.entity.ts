import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Encontroteoricadigital } from './encontroteoricadigital.entity';

@Index('anexoencontroteoricadigital_pkey', ['id'], { unique: true })
@Index('nxncntroteoricadigitalfknxncntroteoricadigitalidencontroteorica', ['idencontroteorica'], {})
@Entity('anexoencontroteoricadigital', { schema: 'public' })
export class Anexoencontroteoricadigital {
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

  @Column('integer', { name: 'idencontroteorica', nullable: true })
  idencontroteorica: number | null;

  @ManyToOne(() => Encontroteoricadigital, (encontroteoricadigital) => encontroteoricadigital.anexoencontroteoricadigitals)
  @JoinColumn([{ name: 'idencontroteorica', referencedColumnName: 'id' }])
  idencontroteorica2: Encontroteoricadigital;
}
