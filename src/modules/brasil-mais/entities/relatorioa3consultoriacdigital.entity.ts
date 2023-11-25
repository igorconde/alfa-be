import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexorelatorioa3consultoriacdigital } from './anexorelatorioa3consultoriacdigital.entity';
import { Atendimentoconsultoriacdigital } from './atendimentoconsultoriacdigital.entity';
import { Atendimentopraticaddigital } from './atendimentopraticaddigital.entity';
import { Temaa3consultoriacdigital } from './temaa3consultoriacdigital.entity';

@Index('relatorioa3consultoriacdigital_pkey', ['id'], { unique: true })
@Index('rltr3cnsltrcdgitalfkrltr3cnsltrcdigitalidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Entity('relatorioa3consultoriacdigital', { schema: 'public' })
export class Relatorioa3consultoriacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentoconsultoria', nullable: true })
  idatendimentoconsultoria: number | null;

  @OneToMany(() => Anexorelatorioa3consultoriacdigital, (anexorelatorioa3consultoriacdigital) => anexorelatorioa3consultoriacdigital.idrelatorioa)
  anexorelatorioa3consultoriacdigitals: Anexorelatorioa3consultoriacdigital[];

  @OneToMany(() => Atendimentopraticaddigital, (atendimentopraticaddigital) => atendimentopraticaddigital.idrelatorioa)
  atendimentopraticaddigitals: Atendimentopraticaddigital[];

  @ManyToOne(() => Atendimentoconsultoriacdigital, (atendimentoconsultoriacdigital) => atendimentoconsultoriacdigital.relatorioa3consultoriacdigitals)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriacdigital;

  @OneToMany(() => Temaa3consultoriacdigital, (temaa3consultoriacdigital) => temaa3consultoriacdigital.idrelatorioa)
  temaa3consultoriacdigitals: Temaa3consultoriacdigital[];
}
