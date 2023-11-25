import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoitema3analisepraticacdigital } from './anexoitema3analisepraticacdigital.entity';
import { Temaa3praticacdigital } from './temaa3praticacdigital.entity';

@Index('itema3analisepraticacdigital_pkey', ['id'], { unique: true })
@Index('tma3analisepraticacdigitalfktema3analisepraticacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('itema3analisepraticacdigital', { schema: 'public' })
export class Itema3analisepraticacdigital {
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

  @OneToMany(() => Anexoitema3analisepraticacdigital, (anexoitema3analisepraticacdigital) => anexoitema3analisepraticacdigital.iditema)
  anexoitema3analisepraticacdigitals: Anexoitema3analisepraticacdigital[];

  @ManyToOne(() => Temaa3praticacdigital, (temaa3praticacdigital) => temaa3praticacdigital.itema3analisepraticacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3praticacdigital;
}
