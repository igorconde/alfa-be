import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoitema3historicopraticacdigital } from './anexoitema3historicopraticacdigital.entity';
import { Temaa3praticacdigital } from './temaa3praticacdigital.entity';

@Index('itema3historicopraticacdigital_pkey', ['id'], { unique: true })
@Index('tm3hstoricopraticacdigitalfktm3historicopraticacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('itema3historicopraticacdigital', { schema: 'public' })
export class Itema3historicopraticacdigital {
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

  @OneToMany(() => Anexoitema3historicopraticacdigital, (anexoitema3historicopraticacdigital) => anexoitema3historicopraticacdigital.iditema)
  anexoitema3historicopraticacdigitals: Anexoitema3historicopraticacdigital[];

  @ManyToOne(() => Temaa3praticacdigital, (temaa3praticacdigital) => temaa3praticacdigital.itema3historicopraticacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3praticacdigital;
}
