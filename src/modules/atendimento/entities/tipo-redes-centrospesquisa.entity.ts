import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RedesCentrospesquisa } from './RedesCentrospesquisa';

@Index('tipo_redes_centrospesquisa_pkey', ['id'], { unique: true })
@Entity('tipo_redes_centrospesquisa', { schema: 'public' })
export class TipoRedesCentrospesquisa {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'tipo', nullable: true, length: 255 })
  tipo: string | null;

  @OneToMany(() => RedesCentrospesquisa, (redesCentrospesquisa) => redesCentrospesquisa.idTipoRedesCentrospesquisa)
  redesCentrospesquisas: RedesCentrospesquisa[];

  @OneToMany(() => RedesCentrospesquisa, (redesCentrospesquisa) => redesCentrospesquisa.idTipoRedesCentrospesquisa2)
  redesCentrospesquisas2: RedesCentrospesquisa[];
}
