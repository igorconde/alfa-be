import { Encontroconsultoriacdigital } from '@modules/brasil-mais/entities/encontroconsultoriacdigital.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Etapaconsultoriacdigital } from './etapaconsultoriacdigital.entity';
import { Ferramentaconsultoriacdigital } from './ferramentaconsultoriacdigital.entity';
import { Relatorioa3consultoriacdigital } from './relatorioa3consultoriacdigital.entity';

@Index('atendimentoconsultoriacdigital_pkey', ['id'], { unique: true })
@Index('tndmntcnsltracdigitalfktndmntcnsltriacdigitalidetapaconsultoria', ['idetapaconsultoria'], {})
@Entity('atendimentoconsultoriacdigital', { schema: 'public' })
export class Atendimentoconsultoriacdigital {
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

  @ManyToOne(() => Etapaconsultoriacdigital, (etapaconsultoriacdigital) => etapaconsultoriacdigital.atendimentoconsultoriacdigitals)
  @JoinColumn([{ name: 'idetapaconsultoria', referencedColumnName: 'id' }])
  idetapaconsultoria2: Etapaconsultoriacdigital;

  @OneToMany(() => Encontroconsultoriacdigital, (encontroconsultoriacdigital) => encontroconsultoriacdigital.idatendimentoconsultoria2)
  encontroconsultoriacdigitals: Encontroconsultoriacdigital[];

  @OneToMany(() => Ferramentaconsultoriacdigital, (ferramentaconsultoriacdigital) => ferramentaconsultoriacdigital.idatendimentoconsultoria2)
  ferramentaconsultoriacdigitals: Ferramentaconsultoriacdigital[];

  @OneToMany(() => Relatorioa3consultoriacdigital, (relatorioa3consultoriacdigital) => relatorioa3consultoriacdigital.idatendimentoconsultoria2)
  relatorioa3consultoriacdigitals: Relatorioa3consultoriacdigital[];
}
