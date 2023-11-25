import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoitema3metaspraticacdigital } from './Anexoitema3metaspraticacdigital';
import { Temaa3praticacdigital } from './Temaa3praticacdigital';

@Index('itema3metaspraticacdigital_pkey', ['id'], { unique: true })
@Index('itema3metaspraticacdigitalfkitema3metaspraticacdigital_idtemaa3', ['idtemaa3'], {})
@Entity('itema3metaspraticacdigital', { schema: 'public' })
export class Itema3metaspraticacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'coditem', nullable: true })
  coditem: number | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idtemaa3', nullable: true })
  idtemaa3: number | null;

  @OneToMany(() => Anexoitema3metaspraticacdigital, (anexoitema3metaspraticacdigital) => anexoitema3metaspraticacdigital.iditema)
  anexoitema3metaspraticacdigitals: Anexoitema3metaspraticacdigital[];

  @ManyToOne(() => Temaa3praticacdigital, (temaa3praticacdigital) => temaa3praticacdigital.itema3metaspraticacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3praticacdigital;
}
