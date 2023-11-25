import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Itemmetaregionallean } from './Itemmetaregionallean';

@Index('metaregionallean_pkey', ['id'], { unique: true })
@Index('ix_metaregionallean_fk_metaregionallean_idunidade', ['idunidade'], {})
@Entity('metaregionallean', { schema: 'public' })
export class Metaregionallean {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @OneToMany(() => Itemmetaregionallean, (itemmetaregionallean) => itemmetaregionallean.idmetaregional2)
  itemmetaregionalleans: Itemmetaregionallean[];

  @ManyToOne(() => Unidade, (unidade) => unidade.metaregionalleans)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
