import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Itemmetaregionalipea } from './Itemmetaregionalipea';

@Index('metaregionalipea_pkey', ['id'], { unique: true })
@Index('ix_metaregionalipea_fk_metaregionalipea_idunidade', ['idunidade'], {})
@Entity('metaregionalipea', { schema: 'public' })
export class Metaregionalipea {
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

  @OneToMany(() => Itemmetaregionalipea, (itemmetaregionalipea) => itemmetaregionalipea.idmetaregionalipea2)
  itemmetaregionalipeas: Itemmetaregionalipea[];

  @ManyToOne(() => Unidade, (unidade) => unidade.metaregionalipeas)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
