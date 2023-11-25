import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Parametro } from './Parametro';
import { Subgrupoparametro } from './Subgrupoparametro';

@Index('igrupoparametros1', ['chave', 'nome'], {})
@Index('igrupoparametrou1', ['chave'], { unique: true })
@Index('grupoparametro_pkey', ['id'], { unique: true })
@Entity('grupoparametro', { schema: 'public' })
export class Grupoparametro {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'chave', nullable: true, length: 255 })
  chave: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Parametro, (parametro) => parametro.idgrupoparametro2)
  parametros: Parametro[];

  @OneToMany(() => Subgrupoparametro, (subgrupoparametro) => subgrupoparametro.idgrupoparametro)
  subgrupoparametros: Subgrupoparametro[];
}
