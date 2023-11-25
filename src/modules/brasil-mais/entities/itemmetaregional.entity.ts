import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Metaregional } from './Metaregional';
import { Setor } from './Setor';

@Index('itemmetaregional_pkey', ['id'], { unique: true })
@Index('ix_itemmetaregional_fk_itemmetaregional_idmetaregional', ['idmetaregional'], {})
@Index('ix_itemmetaregional_fk_itemmetaregional_idsetor', ['idsetor'], {})
@Entity('itemmetaregional', { schema: 'public' })
export class Itemmetaregional {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'metagoverno', nullable: true })
  metagoverno: number | null;

  @Column('integer', { name: 'metasenai', nullable: true })
  metasenai: number | null;

  @Column('integer', { name: 'idmetaregional', nullable: true })
  idmetaregional: number | null;

  @Column('integer', { name: 'idsetor', nullable: true })
  idsetor: number | null;

  @Column('integer', { name: 'meta', nullable: true })
  meta: number | null;

  @Column('character varying', {
    name: 'tipometa',
    nullable: true,
    length: 255,
  })
  tipometa: string | null;

  @ManyToOne(() => Metaregional, (metaregional) => metaregional.itemmetaregionals)
  @JoinColumn([{ name: 'idmetaregional', referencedColumnName: 'id' }])
  idmetaregional2: Metaregional;

  @ManyToOne(() => Setor, (setor) => setor.itemmetaregionals)
  @JoinColumn([{ name: 'idsetor', referencedColumnName: 'id' }])
  idsetor2: Setor;
}
