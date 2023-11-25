import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoitema3metasconsultoriacdigital } from './Anexoitema3metasconsultoriacdigital';
import { Temaa3consultoriacdigital } from './temaa3consultoriacdigital.entity';

@Index('itema3metasconsultoriacdigital_pkey', ['id'], { unique: true })
@Index('tm3mtasconsultoriacdigitalfktm3metasconsultoriacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('itema3metasconsultoriacdigital', { schema: 'public' })
export class Itema3metasconsultoriacdigital {
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

  @OneToMany(() => Anexoitema3metasconsultoriacdigital, (anexoitema3metasconsultoriacdigital) => anexoitema3metasconsultoriacdigital.iditema)
  anexoitema3metasconsultoriacdigitals: Anexoitema3metasconsultoriacdigital[];

  @ManyToOne(() => Temaa3consultoriacdigital, (temaa3consultoriacdigital) => temaa3consultoriacdigital.itema3metasconsultoriacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3consultoriacdigital;
}
