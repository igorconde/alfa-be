import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Relatorioa3praticacdigital } from './Relatorioa3praticacdigital';

@Index('anexorelatorioa3praticacdigital_pkey', ['id'], { unique: true })
@Index('nxrltra3praticacdigitalfknxrltrioa3praticacdigitalidrelatorioa3', ['idrelatorioa3'], {})
@Entity('anexorelatorioa3praticacdigital', { schema: 'public' })
export class Anexorelatorioa3praticacdigital {
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

  @Column('integer', { name: 'idrelatorioa3', nullable: true })
  idrelatorioa3: number | null;

  @ManyToOne(() => Relatorioa3praticacdigital, (relatorioa3praticacdigital) => relatorioa3praticacdigital.anexorelatorioa3praticacdigitals)
  @JoinColumn([{ name: 'idrelatorioa3', referencedColumnName: 'id' }])
  idrelatorioa: Relatorioa3praticacdigital;
}
