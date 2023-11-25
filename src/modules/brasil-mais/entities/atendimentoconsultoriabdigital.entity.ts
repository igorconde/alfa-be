import { Encontroconsultoriabdigital } from '@modules/brasil-mais/entities/encontroconsultoriabdigital.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Etapaconsultoriabdigital } from './etapaconsultoriabdigital.entity';
import { Setupminaconsultoriabdigital } from './setupminaconsultoriabdigital.entity';

@Index('atendimentoconsultoriabdigital_pkey', ['id'], { unique: true })
@Index('tndmntcnsltrabdigitalfktndmntcnsltriabdigitalidetapaconsultoria', ['idetapaconsultoria'], {})
@Entity('atendimentoconsultoriabdigital', { schema: 'public' })
export class Atendimentoconsultoriabdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('boolean', { name: 'cancelado', nullable: true })
  cancelado: boolean | null;

  @Column('integer', { name: 'etapa', nullable: true })
  etapa: number | null;

  @Column('boolean', { name: 'finalizado', nullable: true })
  finalizado: boolean | null;

  @Column('integer', { name: 'horasapropriadas', nullable: true })
  horasapropriadas: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idetapaconsultoria', nullable: true })
  idetapaconsultoria: number | null;

  @ManyToOne(() => Etapaconsultoriabdigital, (etapaconsultoriabdigital) => etapaconsultoriabdigital.atendimentoconsultoriabdigitals)
  @JoinColumn([{ name: 'idetapaconsultoria', referencedColumnName: 'id' }])
  idetapaconsultoria2: Etapaconsultoriabdigital;

  @OneToMany(() => Encontroconsultoriabdigital, (encontroconsultoriabdigital) => encontroconsultoriabdigital.idatendimentoconsultoria2)
  encontroconsultoriabdigitals: Encontroconsultoriabdigital[];

  @OneToMany(() => Setupminaconsultoriabdigital, (setupminaconsultoriabdigital) => setupminaconsultoriabdigital.idatendimentoconsultoria2)
  setupminaconsultoriabdigitals: Setupminaconsultoriabdigital[];
}
