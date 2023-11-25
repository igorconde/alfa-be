import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoatividadeteorica } from './Anexoatividadeteorica';
import { Etapateorica } from './Etapateorica';

@Index('atividadementoriateorica_pkey', ['id'], { unique: true })
@Index('tividadementoriateoricafkatividadementoriateoricaidetapateorica', ['idetapateorica'], {})
@Entity('atividadementoriateorica', { schema: 'public' })
export class Atividadementoriateorica {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idvisita', nullable: true })
  idvisita: number | null;

  @Column('character varying', {
    name: 'nomeatividade',
    nullable: true,
    length: 255,
  })
  nomeatividade: string | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idetapateorica', nullable: true })
  idetapateorica: number | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'codatividade', nullable: true })
  codatividade: number | null;

  @OneToMany(() => Anexoatividadeteorica, (anexoatividadeteorica) => anexoatividadeteorica.idatividadeteorica2)
  anexoatividadeteoricas: Anexoatividadeteorica[];

  @ManyToOne(() => Etapateorica, (etapateorica) => etapateorica.atividadementoriateoricas)
  @JoinColumn([{ name: 'idetapateorica', referencedColumnName: 'id' }])
  idetapateorica2: Etapateorica;
}
