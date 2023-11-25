import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Itemmetaregionaldigital } from './itemmetaregionaldigital.entity';

@Index('metaregionaldigital_pkey', ['id'], { unique: true })
@Index('ix_metaregionaldigital_fk_metaregionaldigital_idunidade', ['idunidade'], {})
@Entity('metaregionaldigital', { schema: 'public' })
export class Metaregionaldigital {
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

  @OneToMany(() => Itemmetaregionaldigital, (itemmetaregionaldigital) => itemmetaregionaldigital.idmetaregional2)
  itemmetaregionaldigitals: Itemmetaregionaldigital[];

  @ManyToOne(() => Unidade, (unidade) => unidade.metaregionaldigitals)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
