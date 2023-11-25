import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Metaregionallean } from './metaregionallean.entity';

@Index('itemmetaregionallean_pkey', ['id'], { unique: true })
@Index('ix_itemmetaregionallean_fk_itemmetaregionallean_idmetaregional', ['idmetaregional'], {})
@Entity('itemmetaregionallean', { schema: 'public' })
export class Itemmetaregionallean {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'meta', nullable: true })
  meta: number | null;

  @Column('character varying', {
    name: 'tipometa',
    nullable: true,
    length: 255,
  })
  tipometa: string | null;

  @Column('integer', { name: 'idmetaregional', nullable: true })
  idmetaregional: number | null;

  @ManyToOne(() => Metaregionallean, (metaregionallean) => metaregionallean.itemmetaregionalleans)
  @JoinColumn([{ name: 'idmetaregional', referencedColumnName: 'id' }])
  idmetaregional2: Metaregionallean;
}
