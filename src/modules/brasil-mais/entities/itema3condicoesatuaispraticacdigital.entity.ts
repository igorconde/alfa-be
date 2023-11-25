import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoitema3condicoesatuaispraticacdigital } from './Anexoitema3condicoesatuaispraticacdigital';
import { Temaa3praticacdigital } from './Temaa3praticacdigital';

@Index('itema3condicoesatuaispraticacdigital_pkey', ['id'], { unique: true })
@Index('tm3cndcstspraticacdigitalfktm3cndcstuaispraticacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('itema3condicoesatuaispraticacdigital', { schema: 'public' })
export class Itema3condicoesatuaispraticacdigital {
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

  @OneToMany(() => Anexoitema3condicoesatuaispraticacdigital, (anexoitema3condicoesatuaispraticacdigital) => anexoitema3condicoesatuaispraticacdigital.iditema)
  anexoitema3condicoesatuaispraticacdigitals: Anexoitema3condicoesatuaispraticacdigital[];

  @ManyToOne(() => Temaa3praticacdigital, (temaa3praticacdigital) => temaa3praticacdigital.itema3condicoesatuaispraticacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3praticacdigital;
}
