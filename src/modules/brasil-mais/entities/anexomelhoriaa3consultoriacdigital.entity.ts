import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Conclusaoa3consultoriacdigital } from './Conclusaoa3consultoriacdigital';

@Index('anexomelhoriaa3consultoriacdigital_pkey', ['id'], { unique: true })
@Index('nxmlhr3cnsltoriacdigitalfknxmlhr3cnsltoriacdigitalidconclusaoa3', ['idconclusaoa3'], {})
@Entity('anexomelhoriaa3consultoriacdigital', { schema: 'public' })
export class Anexomelhoriaa3consultoriacdigital {
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

  @ManyToOne(() => Conclusaoa3consultoriacdigital, (conclusaoa3consultoriacdigital) => conclusaoa3consultoriacdigital.anexomelhoriaa3consultoriacdigitals)
  @JoinColumn([{ name: 'idconclusaoa3', referencedColumnName: 'id' }])
  idconclusaoa: Conclusaoa3consultoriacdigital;
}
