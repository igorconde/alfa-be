import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Clusterclientementoriadigital } from './Clusterclientementoriadigital';
import { Atendimentoconsultoriad } from './atendimentoconsultoriad.entity';

@Index('tecnologiasdigitaisd_pkey', ['id'], { unique: true })
@Index('tcnlogiasdigitaisdfktcnologiasdigitaisdidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Entity('tecnologiasdigitaisd', { schema: 'public' })
export class Tecnologiasdigitaisd {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('boolean', { name: 'boawifi', nullable: true })
  boawifi: boolean | null;

  @Column('integer', { name: 'codatividade', nullable: true })
  codatividade: number | null;

  @Column('boolean', { name: 'digitalizarlinhaproducao', nullable: true })
  digitalizarlinhaproducao: boolean | null;

  @Column('boolean', { name: 'doinvestimentodigital', nullable: true })
  doinvestimentodigital: boolean | null;

  @Column('boolean', { name: 'domentoriadigital', nullable: true })
  domentoriadigital: boolean | null;

  @Column('boolean', { name: 'maturidadetecnologica', nullable: true })
  maturidadetecnologica: boolean | null;

  @Column('character varying', {
    name: 'nomeatividade',
    nullable: true,
    length: 255,
  })
  nomeatividade: string | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('boolean', { name: 'processomanufaturadiscreto', nullable: true })
  processomanufaturadiscreto: boolean | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentoconsultoria', nullable: true })
  idatendimentoconsultoria: number | null;

  @OneToMany(() => Clusterclientementoriadigital, (clusterclientementoriadigital) => clusterclientementoriadigital.idtecnologiasdigitais2)
  clusterclientementoriadigitals: Clusterclientementoriadigital[];

  @ManyToOne(() => Atendimentoconsultoriad, (atendimentoconsultoriad) => atendimentoconsultoriad.tecnologiasdigitaisds)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriad;
}
