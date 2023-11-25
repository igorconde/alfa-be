import { Encontroconsultoriaddigital } from '@modules/brasil-mais/entities/encontroconsultoriaddigital.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Avaliacaoconsultoriaddigital } from './avaliacaoconsultoriaddigital.entity';
import { Documentacaoconsultoriaddigital } from './documentacaoconsultoriaddigital.entity';
import { Etapaconsultoriaddigital } from './etapaconsultoriaddigital.entity';
import { Resultadoconsultoriaddigital } from './resultadoconsultoriaddigital.entity';

@Index('atendimentoconsultoriaddigital_pkey', ['id'], { unique: true })
@Index('tndmntcnsltraddigitalfktndmntcnsltriaddigitalidetapaconsultoria', ['idetapaconsultoria'], {})
@Entity('atendimentoconsultoriaddigital', { schema: 'public' })
export class Atendimentoconsultoriaddigital {
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

  @ManyToOne(() => Etapaconsultoriaddigital, (etapaconsultoriaddigital) => etapaconsultoriaddigital.atendimentoconsultoriaddigitals)
  @JoinColumn([{ name: 'idetapaconsultoria', referencedColumnName: 'id' }])
  idetapaconsultoria2: Etapaconsultoriaddigital;

  @OneToMany(() => Avaliacaoconsultoriaddigital, (avaliacaoconsultoriaddigital) => avaliacaoconsultoriaddigital.idatendimentoconsultoria2)
  avaliacaoconsultoriaddigitals: Avaliacaoconsultoriaddigital[];

  @OneToMany(() => Documentacaoconsultoriaddigital, (documentacaoconsultoriaddigital) => documentacaoconsultoriaddigital.idatendimentoconsultoria2)
  documentacaoconsultoriaddigitals: Documentacaoconsultoriaddigital[];

  @OneToMany(() => Encontroconsultoriaddigital, (encontroconsultoriaddigital) => encontroconsultoriaddigital.idatendimentoconsultoria2)
  encontroconsultoriaddigitals: Encontroconsultoriaddigital[];

  @OneToMany(() => Resultadoconsultoriaddigital, (resultadoconsultoriaddigital) => resultadoconsultoriaddigital.idatendimentoconsultoria2)
  resultadoconsultoriaddigitals: Resultadoconsultoriaddigital[];
}
