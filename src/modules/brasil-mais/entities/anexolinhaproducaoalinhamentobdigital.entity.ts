import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Linhadeproducaoalinhamentobdigital } from './linhadeproducaoalinhamentobdigital.entity';

@Index('anexolinhaproducaoalinhamentobdigital_pkey', ['id'], { unique: true })
@Index('nxlnhprdclnhmntbdgtlnxlnhprdclnhmntbdgtldlinhadeproducaodigital', ['idlinhadeproducaodigital'], {})
@Entity('anexolinhaproducaoalinhamentobdigital', { schema: 'public' })
export class Anexolinhaproducaoalinhamentobdigital {
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

  @Column('integer', { name: 'idlinhadeproducaodigital', nullable: true })
  idlinhadeproducaodigital: number | null;

  @ManyToOne(() => Linhadeproducaoalinhamentobdigital, (linhadeproducaoalinhamentobdigital) => linhadeproducaoalinhamentobdigital.anexolinhaproducaoalinhamentobdigitals)
  @JoinColumn([{ name: 'idlinhadeproducaodigital', referencedColumnName: 'id' }])
  idlinhadeproducaodigital2: Linhadeproducaoalinhamentobdigital;
}
