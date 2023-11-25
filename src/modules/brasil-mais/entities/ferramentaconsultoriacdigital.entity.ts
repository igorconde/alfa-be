import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoferramentaconsultoriacdigital } from './anexoferramentaconsultoriacdigital.entity';
import { Atendimentoconsultoriacdigital } from './atendimentoconsultoriacdigital.entity';

@Index('ferramentaconsultoriacdigital_pkey', ['id'], { unique: true })
@Index('frrmntcnsltrcdgtalfkfrrmntcnsltrcdgitalidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Entity('ferramentaconsultoriacdigital', { schema: 'public' })
export class Ferramentaconsultoriacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'maisinfo',
    nullable: true,
    length: 255,
  })
  maisinfo: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'turno', nullable: true })
  turno: number | null;

  @Column('integer', { name: 'idatendimentoconsultoria', nullable: true })
  idatendimentoconsultoria: number | null;

  @OneToMany(() => Anexoferramentaconsultoriacdigital, (anexoferramentaconsultoriacdigital) => anexoferramentaconsultoriacdigital.idferramenta2)
  anexoferramentaconsultoriacdigitals: Anexoferramentaconsultoriacdigital[];

  @ManyToOne(() => Atendimentoconsultoriacdigital, (atendimentoconsultoriacdigital) => atendimentoconsultoriacdigital.ferramentaconsultoriacdigitals)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriacdigital;
}
