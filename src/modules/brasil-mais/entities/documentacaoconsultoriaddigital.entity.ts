import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexodocumentacaoconsultoriaddigital } from './anexodocumentacaoconsultoriaddigital.entity';
import { Atendimentoconsultoriaddigital } from './atendimentoconsultoriaddigital.entity';

@Index('documentacaoconsultoriaddigital_pkey', ['id'], { unique: true })
@Index('dcmntccnsltrddgtalfkdcmntccnsltrddgitalidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Entity('documentacaoconsultoriaddigital', { schema: 'public' })
export class Documentacaoconsultoriaddigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'codatividade', nullable: true })
  codatividade: number | null;

  @Column('character varying', {
    name: 'maisinfo',
    nullable: true,
    length: 255,
  })
  maisinfo: string | null;

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

  @OneToMany(() => Anexodocumentacaoconsultoriaddigital, (anexodocumentacaoconsultoriaddigital) => anexodocumentacaoconsultoriaddigital.iddocumentacao2)
  anexodocumentacaoconsultoriaddigitals: Anexodocumentacaoconsultoriaddigital[];

  @ManyToOne(() => Atendimentoconsultoriaddigital, (atendimentoconsultoriaddigital) => atendimentoconsultoriaddigital.documentacaoconsultoriaddigitals)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriaddigital;
}
