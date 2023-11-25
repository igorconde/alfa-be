import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoitema3verificacaoconsultoriacdigital } from './Anexoitema3verificacaoconsultoriacdigital';
import { Temaa3consultoriacdigital } from './Temaa3consultoriacdigital';

@Index('itema3verificacaoconsultoriacdigital_pkey', ['id'], { unique: true })
@Index('tm3vrfcccnsultoriacdigitalfktm3vrfccconsultoriacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('itema3verificacaoconsultoriacdigital', { schema: 'public' })
export class Itema3verificacaoconsultoriacdigital {
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

  @OneToMany(() => Anexoitema3verificacaoconsultoriacdigital, (anexoitema3verificacaoconsultoriacdigital) => anexoitema3verificacaoconsultoriacdigital.iditema)
  anexoitema3verificacaoconsultoriacdigitals: Anexoitema3verificacaoconsultoriacdigital[];

  @ManyToOne(() => Temaa3consultoriacdigital, (temaa3consultoriacdigital) => temaa3consultoriacdigital.itema3verificacaoconsultoriacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3consultoriacdigital;
}
