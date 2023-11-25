import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Contramedidasa3praticacdigital } from './Contramedidasa3praticacdigital';

@Index('anexocontramedidasa3praticacdigital_pkey', ['id'], { unique: true })
@Index('nxcntrmdds3prtccdgtalfknxcntrmdds3prtccdigitalidcontramedidasa3', ['idcontramedidasa3'], {})
@Entity('anexocontramedidasa3praticacdigital', { schema: 'public' })
export class Anexocontramedidasa3praticacdigital {
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

  @Column('integer', { name: 'idcontramedidasa3', nullable: true })
  idcontramedidasa3: number | null;

  @ManyToOne(() => Contramedidasa3praticacdigital, (contramedidasa3praticacdigital) => contramedidasa3praticacdigital.anexocontramedidasa3praticacdigitals)
  @JoinColumn([{ name: 'idcontramedidasa3', referencedColumnName: 'id' }])
  idcontramedidasa: Contramedidasa3praticacdigital;
}
