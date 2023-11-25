import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Parametro } from './Parametro';
import { Unidade } from './Unidade';

@Index('parametrounidade_pkey', ['id'], { unique: true })
@Index('iparametrounidadefkparametro', ['idparametro'], {})
@Index('iparametrounidadefkunidade', ['idunidade'], {})
@Entity('parametrounidade', { schema: 'public' })
export class Parametrounidade {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('date', { name: 'valordata', nullable: true })
  valordata: string | null;

  @Column('double precision', {
    name: 'valordouble',
    nullable: true,
    precision: 53,
  })
  valordouble: number | null;

  @Column('integer', { name: 'valorinteiro', nullable: true })
  valorinteiro: number | null;

  @Column('character varying', {
    name: 'valorstring',
    nullable: true,
    length: 255,
  })
  valorstring: string | null;

  @Column('integer', { name: 'idparametro', nullable: true })
  idparametro: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Parametro, (parametro) => parametro.parametrounidades)
  @JoinColumn([{ name: 'idparametro', referencedColumnName: 'id' }])
  idparametro2: Parametro;

  @ManyToOne(() => Unidade, (unidade) => unidade.parametrounidades)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
