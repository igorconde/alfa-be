import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoitema3analiseconsultoriacdigital } from './anexoitema3analiseconsultoriacdigital.entity';
import { Temaa3consultoriacdigital } from './temaa3consultoriacdigital.entity';

@Index('itema3analiseconsultoriacdigital_pkey', ['id'], { unique: true })
@Index('tm3nlseconsultoriacdigitalfktm3nliseconsultoriacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('itema3analiseconsultoriacdigital', { schema: 'public' })
export class Itema3analiseconsultoriacdigital {
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

  @OneToMany(() => Anexoitema3analiseconsultoriacdigital, (anexoitema3analiseconsultoriacdigital) => anexoitema3analiseconsultoriacdigital.iditema)
  anexoitema3analiseconsultoriacdigitals: Anexoitema3analiseconsultoriacdigital[];

  @ManyToOne(() => Temaa3consultoriacdigital, (temaa3consultoriacdigital) => temaa3consultoriacdigital.itema3analiseconsultoriacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3consultoriacdigital;
}
