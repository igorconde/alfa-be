import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoitema3verificacaopraticacdigital } from './Anexoitema3verificacaopraticacdigital';
import { Temaa3praticacdigital } from './temaa3praticacdigital.entity';

@Index('itema3verificacaopraticacdigital_pkey', ['id'], { unique: true })
@Index('tm3vrfcacaopraticacdigitalfktm3vrficacaopraticacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('itema3verificacaopraticacdigital', { schema: 'public' })
export class Itema3verificacaopraticacdigital {
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

  @OneToMany(() => Anexoitema3verificacaopraticacdigital, (anexoitema3verificacaopraticacdigital) => anexoitema3verificacaopraticacdigital.iditema)
  anexoitema3verificacaopraticacdigitals: Anexoitema3verificacaopraticacdigital[];

  @ManyToOne(() => Temaa3praticacdigital, (temaa3praticacdigital) => temaa3praticacdigital.itema3verificacaopraticacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3praticacdigital;
}
