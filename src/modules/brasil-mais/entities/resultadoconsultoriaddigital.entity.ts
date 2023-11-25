import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Assinaturaconsultoriaddigital } from './assinaturaconsultoriaddigital.entity';
import { Atendimentoconsultoriaddigital } from './atendimentoconsultoriaddigital.entity';

@Index('resultadoconsultoriaddigital_pkey', ['id'], { unique: true })
@Index('rsltdcnsltrddgitalfkrsltdcnsltrddigitalidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Entity('resultadoconsultoriaddigital', { schema: 'public' })
export class Resultadoconsultoriaddigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'codatividade', nullable: true })
  codatividade: number | null;

  @Column('character varying', {
    name: 'nomeatividade',
    nullable: true,
    length: 255,
  })
  nomeatividade: string | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentoconsultoria', nullable: true })
  idatendimentoconsultoria: number | null;

  @OneToMany(() => Assinaturaconsultoriaddigital, (assinaturaconsultoriaddigital) => assinaturaconsultoriaddigital.idresultadoconsultoria2)
  assinaturaconsultoriaddigitals: Assinaturaconsultoriaddigital[];

  @ManyToOne(() => Atendimentoconsultoriaddigital, (atendimentoconsultoriaddigital) => atendimentoconsultoriaddigital.resultadoconsultoriaddigitals)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriaddigital;
}
