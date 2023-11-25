import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoitema3consultoriacdigital } from './Anexoitema3consultoriacdigital';
import { Temaa3consultoriacdigital } from './Temaa3consultoriacdigital';

@Index('itema3consultoriacdigital_pkey', ['id'], { unique: true })
@Index('itema3consultoriacdigital_fk_itema3consultoriacdigital_idtemaa3', ['idtemaa3'], {})
@Entity('itema3consultoriacdigital', { schema: 'public' })
export class Itema3consultoriacdigital {
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

  @OneToMany(() => Anexoitema3consultoriacdigital, (anexoitema3consultoriacdigital) => anexoitema3consultoriacdigital.iditema)
  anexoitema3consultoriacdigitals: Anexoitema3consultoriacdigital[];

  @ManyToOne(() => Temaa3consultoriacdigital, (temaa3consultoriacdigital) => temaa3consultoriacdigital.itema3consultoriacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3consultoriacdigital;
}
