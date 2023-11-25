import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Itemmetaregional } from './Itemmetaregional';
import { Unidade } from './Unidade';

@Index('metaregional_pkey', ['id'], { unique: true })
@Index('ix_metaregional_fk_metaregional_idunidade', ['idunidade'], {})
@Entity('metaregional', { schema: 'public' })
export class Metaregional {
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

  @Column('integer', { name: 'idproduto', nullable: true })
  idproduto: number | null;

  @OneToMany(() => Itemmetaregional, (itemmetaregional) => itemmetaregional.idmetaregional2)
  itemmetaregionals: Itemmetaregional[];

  @ManyToOne(() => Unidade, (unidade) => unidade.metaregionals)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
