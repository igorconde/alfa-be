import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grupoparametro } from './Grupoparametro';
import { Subgrupoparametro } from './Subgrupoparametro';
import { Tipounidade } from './Tipounidade';
import { Parametrounidade } from './Parametrounidade';

@Index('iparametros1', ['chave'], {})
@Index('iparametrou1', ['chave'], { unique: true })
@Index('parametro_pkey', ['id'], { unique: true })
@Index('iparametrofkgrupoparametro', ['idgrupoparametro'], {})
@Index('iparametrofktipounidade', ['idtipounidade'], {})
@Entity('parametro', { schema: 'public' })
export class Parametro {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'chave', nullable: true, length: 255 })
  chave: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('character varying', { name: 'opcoes', nullable: true, length: 255 })
  opcoes: string | null;

  @Column('character varying', {
    name: 'tipocampo',
    nullable: true,
    length: 255,
  })
  tipocampo: string | null;

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

  @Column('integer', { name: 'idgrupoparametro', nullable: true })
  idgrupoparametro: number | null;

  @Column('integer', { name: 'idtipounidade', nullable: true })
  idtipounidade: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Grupoparametro, (grupoparametro) => grupoparametro.parametros)
  @JoinColumn([{ name: 'idgrupoparametro', referencedColumnName: 'id' }])
  idgrupoparametro2: Grupoparametro;

  @ManyToOne(() => Subgrupoparametro, (subgrupoparametro) => subgrupoparametro.parametros)
  @JoinColumn([{ name: 'idsubgrupoparametro', referencedColumnName: 'id' }])
  idsubgrupoparametro: Subgrupoparametro;

  @ManyToOne(() => Tipounidade, (tipounidade) => tipounidade.parametros)
  @JoinColumn([{ name: 'idtipounidade', referencedColumnName: 'id' }])
  idtipounidade2: Tipounidade;

  @OneToMany(() => Parametrounidade, (parametrounidade) => parametrounidade.idparametro2)
  parametrounidades: Parametrounidade[];
}
