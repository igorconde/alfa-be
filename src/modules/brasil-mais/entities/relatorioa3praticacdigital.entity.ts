import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexorelatorioa3praticacdigital } from './anexorelatorioa3praticacdigital.entity';
import { Atendimentopraticacdigital } from './atendimentopraticacdigital.entity';
import { Temaa3praticacdigital } from './temaa3praticacdigital.entity';

@Index('relatorioa3praticacdigital_pkey', ['id'], { unique: true })
@Index('rltr3praticacdigitalfkrltra3praticacdigitalidatendimentopratica', ['idatendimentopratica'], {})
@Entity('relatorioa3praticacdigital', { schema: 'public' })
export class Relatorioa3praticacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @OneToMany(() => Anexorelatorioa3praticacdigital, (anexorelatorioa3praticacdigital) => anexorelatorioa3praticacdigital.idrelatorioa)
  anexorelatorioa3praticacdigitals: Anexorelatorioa3praticacdigital[];

  @ManyToOne(() => Atendimentopraticacdigital, (atendimentopraticacdigital) => atendimentopraticacdigital.relatorioa3praticacdigitals)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticacdigital;

  @OneToMany(() => Temaa3praticacdigital, (temaa3praticacdigital) => temaa3praticacdigital.idrelatorioa)
  temaa3praticacdigitals: Temaa3praticacdigital[];
}
