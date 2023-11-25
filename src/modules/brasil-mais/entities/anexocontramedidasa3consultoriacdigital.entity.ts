import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Contramedidasa3consultoriacdigital } from './contramedidasa3consultoriacdigital.entity';

@Index('anexocontramedidasa3consultoriacdigital_pkey', ['id'], { unique: true })
@Index('nxcntrmdds3cnsltrcdgtlfknxcntrmdds3cnsltrcdgtlidcontramedidasa3', ['idcontramedidasa3'], {})
@Entity('anexocontramedidasa3consultoriacdigital', { schema: 'public' })
export class Anexocontramedidasa3consultoriacdigital {
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

  @ManyToOne(() => Contramedidasa3consultoriacdigital, (contramedidasa3consultoriacdigital) => contramedidasa3consultoriacdigital.anexocontramedidasa3consultoriacdigitals)
  @JoinColumn([{ name: 'idcontramedidasa3', referencedColumnName: 'id' }])
  idcontramedidasa: Contramedidasa3consultoriacdigital;
}
