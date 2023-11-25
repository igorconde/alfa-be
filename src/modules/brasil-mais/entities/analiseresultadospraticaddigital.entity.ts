import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentopraticaddigital } from './Atendimentopraticaddigital';

@Index('analiseresultadospraticaddigital_pkey', ['id'], { unique: true })
@Index('nlsrsltdsprtcddgitalfknlsrsltdsprtcddigitalidatendimentopratica', ['idatendimentopratica'], {})
@Entity('analiseresultadospraticaddigital', { schema: 'public' })
export class Analiseresultadospraticaddigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'analiseretorno',
    nullable: true,
    length: 255,
  })
  analiseretorno: string | null;

  @Column('character varying', {
    name: 'calculoretorno',
    nullable: true,
    length: 255,
  })
  calculoretorno: string | null;

  @Column('character varying', {
    name: 'disponibilidade',
    nullable: true,
    length: 255,
  })
  disponibilidade: string | null;

  @Column('character varying', { name: 'oee', nullable: true, length: 255 })
  oee: string | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('character varying', {
    name: 'performance',
    nullable: true,
    length: 255,
  })
  performance: string | null;

  @Column('character varying', {
    name: 'produtividade',
    nullable: true,
    length: 255,
  })
  produtividade: string | null;

  @Column('character varying', {
    name: 'qualidade',
    nullable: true,
    length: 255,
  })
  qualidade: string | null;

  @Column('character varying', {
    name: 'resultados',
    nullable: true,
    length: 255,
  })
  resultados: string | null;

  @Column('double precision', {
    name: 'retornomensal',
    nullable: true,
    precision: 53,
  })
  retornomensal: number | null;

  @Column('double precision', {
    name: 'retornoprograma',
    nullable: true,
    precision: 53,
  })
  retornoprograma: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @ManyToOne(() => Atendimentopraticaddigital, (atendimentopraticaddigital) => atendimentopraticaddigital.analiseresultadospraticaddigitals)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticaddigital;
}
