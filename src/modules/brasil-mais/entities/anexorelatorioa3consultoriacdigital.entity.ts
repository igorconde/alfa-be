import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Relatorioa3consultoriacdigital } from './Relatorioa3consultoriacdigital';

@Index('anexorelatorioa3consultoriacdigital_pkey', ['id'], { unique: true })
@Index('nxrltr3cnsltoriacdigitalfknxrltr3cnsltoriacdigitalidrelatorioa3', ['idrelatorioa3'], {})
@Entity('anexorelatorioa3consultoriacdigital', { schema: 'public' })
export class Anexorelatorioa3consultoriacdigital {
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

  @ManyToOne(() => Relatorioa3consultoriacdigital, (relatorioa3consultoriacdigital) => relatorioa3consultoriacdigital.anexorelatorioa3consultoriacdigitals)
  @JoinColumn([{ name: 'idrelatorioa3', referencedColumnName: 'id' }])
  idrelatorioa: Relatorioa3consultoriacdigital;
}
