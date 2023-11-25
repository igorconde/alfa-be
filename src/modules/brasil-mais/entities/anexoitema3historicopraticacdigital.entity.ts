import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Itema3historicopraticacdigital } from './Itema3historicopraticacdigital';

@Index('anexoitema3historicopraticacdigital_pkey', ['id'], { unique: true })
@Index('nxtm3hstrcopraticacdigitalfknxtm3hstricopraticacdigitaliditema3', ['iditema3'], {})
@Entity('anexoitema3historicopraticacdigital', { schema: 'public' })
export class Anexoitema3historicopraticacdigital {
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

  @Column('integer', { name: 'iditema3', nullable: true })
  iditema3: number | null;

  @ManyToOne(() => Itema3historicopraticacdigital, (itema3historicopraticacdigital) => itema3historicopraticacdigital.anexoitema3historicopraticacdigitals)
  @JoinColumn([{ name: 'iditema3', referencedColumnName: 'id' }])
  iditema: Itema3historicopraticacdigital;
}