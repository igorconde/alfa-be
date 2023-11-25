import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Acompanhamentoa3consultoriacdigital } from './acompanhamentoa3consultoriacdigital.entity';

@Index('anexoacompanhamentoa3consultoriacdigital_pkey', ['id'], {
  unique: true,
})
@Index('nxcmpnhmnt3cnsltrcdgtlfknxcmpnhmnt3cnsltrcdgtldacompanhamentoa3', ['idacompanhamentoa3'], {})
@Entity('anexoacompanhamentoa3consultoriacdigital', { schema: 'public' })
export class Anexoacompanhamentoa3consultoriacdigital {
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

  @ManyToOne(() => Acompanhamentoa3consultoriacdigital, (acompanhamentoa3consultoriacdigital) => acompanhamentoa3consultoriacdigital.anexoacompanhamentoa3consultoriacdigitals)
  @JoinColumn([{ name: 'idacompanhamentoa3', referencedColumnName: 'id' }])
  idacompanhamentoa: Acompanhamentoa3consultoriacdigital;
}
