import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TipoRedesCentrospesquisa } from './tipo-redes-centrospesquisa.entity';

@Entity('redes_centrospesquisa', { schema: 'public' })
export class RedesCentrospesquisa {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'sigla', nullable: true, length: 255 })
  sigla: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @ManyToOne(() => TipoRedesCentrospesquisa, (tipoRedesCentrospesquisa) => tipoRedesCentrospesquisa.redesCentrospesquisas)
  @JoinColumn([{ name: 'id_tipo_redes_centrospesquisa', referencedColumnName: 'id' }])
  idTipoRedesCentrospesquisa: TipoRedesCentrospesquisa;

  @ManyToOne(() => TipoRedesCentrospesquisa, (tipoRedesCentrospesquisa) => tipoRedesCentrospesquisa.redesCentrospesquisas2)
  @JoinColumn([{ name: 'id_tipo_redes_centrospesquisa', referencedColumnName: 'id' }])
  idTipoRedesCentrospesquisa2: TipoRedesCentrospesquisa;
}
