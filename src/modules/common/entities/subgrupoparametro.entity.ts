import { Grupoparametro } from '@modules/administracao/entities/grupoparametro.entity';
import { Parametro } from '@modules/administracao/entities/parametro.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('subgrupoparametro_pkey', ['id'], { unique: true })
@Entity('subgrupoparametro', { schema: 'public' })
export class Subgrupoparametro {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'chave', nullable: true, length: 255 })
  chave: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @OneToMany(() => Parametro, (parametro) => parametro.idsubgrupoparametro)
  parametros: Parametro[];

  @ManyToOne(() => Grupoparametro, (grupoparametro) => grupoparametro.subgrupoparametros)
  @JoinColumn([{ name: 'idgrupoparametro', referencedColumnName: 'id' }])
  idgrupoparametro: Grupoparametro;
}
