import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Metaregionalie } from './Metaregionalie';
import { Setor } from './Setor';

@Index('itemmetaregionalie_pkey', ['id'], { unique: true })
@Entity('itemmetaregionalie', { schema: 'public' })
export class Itemmetaregionalie {
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

  @ManyToOne(() => Metaregionalie, (metaregionalie) => metaregionalie.itemmetaregionalies)
  @JoinColumn([{ name: 'idmetaregionalie', referencedColumnName: 'id' }])
  idmetaregionalie: Metaregionalie;

  @ManyToOne(() => Setor, (setor) => setor.itemmetaregionalies)
  @JoinColumn([{ name: 'idsetor', referencedColumnName: 'id' }])
  idsetor: Setor;
}
