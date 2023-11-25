import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoitema3historicoconsultoriacdigital } from './Anexoitema3historicoconsultoriacdigital';
import { Temaa3consultoriacdigital } from './temaa3consultoriacdigital.entity';

@Index('itema3historicoconsultoriacdigital_pkey', ['id'], { unique: true })
@Index('tm3hstrccnsultoriacdigitalfktm3hstrcconsultoriacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('itema3historicoconsultoriacdigital', { schema: 'public' })
export class Itema3historicoconsultoriacdigital {
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

  @OneToMany(() => Anexoitema3historicoconsultoriacdigital, (anexoitema3historicoconsultoriacdigital) => anexoitema3historicoconsultoriacdigital.iditema)
  anexoitema3historicoconsultoriacdigitals: Anexoitema3historicoconsultoriacdigital[];

  @ManyToOne(() => Temaa3consultoriacdigital, (temaa3consultoriacdigital) => temaa3consultoriacdigital.itema3historicoconsultoriacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3consultoriacdigital;
}
