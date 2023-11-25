import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Metaregionaldigital } from './metaregionaldigital.entity';

@Index('itemmetaregionaldigital_pkey', ['id'], { unique: true })
@Index('itemmetaregionaldigitalfkitemmetaregionaldigital_idmetaregional', ['idmetaregional'], {})
@Entity('itemmetaregionaldigital', { schema: 'public' })
export class Itemmetaregionaldigital {
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

  @ManyToOne(() => Metaregionaldigital, (metaregionaldigital) => metaregionaldigital.itemmetaregionaldigitals)
  @JoinColumn([{ name: 'idmetaregional', referencedColumnName: 'id' }])
  idmetaregional2: Metaregionaldigital;
}
