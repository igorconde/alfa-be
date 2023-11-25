import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoitema3praticacdigital } from './Anexoitema3praticacdigital';
import { Temaa3praticacdigital } from './temaa3praticacdigital.entity';

@Index('itema3praticacdigital_pkey', ['id'], { unique: true })
@Index('ix_itema3praticacdigital_fk_itema3praticacdigital_idtemaa3', ['idtemaa3'], {})
@Entity('itema3praticacdigital', { schema: 'public' })
export class Itema3praticacdigital {
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

  @OneToMany(() => Anexoitema3praticacdigital, (anexoitema3praticacdigital) => anexoitema3praticacdigital.iditema)
  anexoitema3praticacdigitals: Anexoitema3praticacdigital[];

  @ManyToOne(() => Temaa3praticacdigital, (temaa3praticacdigital) => temaa3praticacdigital.itema3praticacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3praticacdigital;
}
