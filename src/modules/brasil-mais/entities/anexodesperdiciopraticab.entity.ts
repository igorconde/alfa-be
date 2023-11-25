import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Desperdiciomasterb } from './desperdiciomasterb.entity';

@Index('anexodesperdiciopraticab_pkey', ['id'], { unique: true })
@Entity('anexodesperdiciopraticab', { schema: 'public' })
export class Anexodesperdiciopraticab {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'coddesperdicio', nullable: true })
  coddesperdicio: number | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 300,
  })
  descricao: string | null;

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

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @ManyToOne(() => Desperdiciomasterb, (desperdiciomasterb) => desperdiciomasterb.anexodesperdiciopraticabs)
  @JoinColumn([{ name: 'iddesperdicio', referencedColumnName: 'id' }])
  iddesperdicio: Desperdiciomasterb;
}
