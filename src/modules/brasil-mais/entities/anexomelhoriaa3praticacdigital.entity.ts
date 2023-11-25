import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Conclusaoa3praticacdigital } from './conclusaoa3praticacdigital.entity';

@Index('anexomelhoriaa3praticacdigital_pkey', ['id'], { unique: true })
@Index('nxmlhra3praticacdigitalfknxmlhriaa3praticacdigitalidconclusaoa3', ['idconclusaoa3'], {})
@Entity('anexomelhoriaa3praticacdigital', { schema: 'public' })
export class Anexomelhoriaa3praticacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('boolean', { name: 'isantes', nullable: true })
  isantes: boolean | null;

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

  @Column('integer', { name: 'idconclusaoa3', nullable: true })
  idconclusaoa3: number | null;

  @ManyToOne(() => Conclusaoa3praticacdigital, (conclusaoa3praticacdigital) => conclusaoa3praticacdigital.anexomelhoriaa3praticacdigitals)
  @JoinColumn([{ name: 'idconclusaoa3', referencedColumnName: 'id' }])
  idconclusaoa: Conclusaoa3praticacdigital;
}
