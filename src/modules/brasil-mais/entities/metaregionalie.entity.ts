import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Itemmetaregionalie } from './Itemmetaregionalie';
import { Unidade } from './Unidade';

@Index('metaregionalie_pkey', ['id'], { unique: true })
@Entity('metaregionalie', { schema: 'public' })
export class Metaregionalie {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Itemmetaregionalie, (itemmetaregionalie) => itemmetaregionalie.idmetaregionalie)
  itemmetaregionalies: Itemmetaregionalie[];

  @ManyToOne(() => Unidade, (unidade) => unidade.metaregionalies)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade: Unidade;
}
