import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Metaregionalipea } from './metaregionalipea.entity';

@Index('itemmetaregionalipea_pkey', ['id'], { unique: true })
@Index('itemmetaregionalipea_fk_itemmetaregionalipea_idmetaregionalipea', ['idmetaregionalipea'], {})
@Entity('itemmetaregionalipea', { schema: 'public' })
export class Itemmetaregionalipea {
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

  @Column('integer', { name: 'idmetaregionalipea', nullable: true })
  idmetaregionalipea: number | null;

  @ManyToOne(() => Metaregionalipea, (metaregionalipea) => metaregionalipea.itemmetaregionalipeas)
  @JoinColumn([{ name: 'idmetaregionalipea', referencedColumnName: 'id' }])
  idmetaregionalipea2: Metaregionalipea;
}
