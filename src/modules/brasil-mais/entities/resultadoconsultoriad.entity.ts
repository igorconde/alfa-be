import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Assinaturaconsultoriad } from './assinaturaconsultoriad.entity';
import { Atendimentoconsultoriad } from './atendimentoconsultoriad.entity';

@Index('resultadoconsultoriad_pkey', ['id'], { unique: true })
@Index('rsltdoconsultoriadfkrsltadoconsultoriadidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Entity('resultadoconsultoriad', { schema: 'public' })
export class Resultadoconsultoriad {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

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

  @Column('integer', { name: 'codatividade', nullable: true })
  codatividade: number | null;

  @OneToMany(() => Assinaturaconsultoriad, (assinaturaconsultoriad) => assinaturaconsultoriad.idresultadoconsultoria)
  assinaturaconsultoriads: Assinaturaconsultoriad[];

  @ManyToOne(() => Atendimentoconsultoriad, (atendimentoconsultoriad) => atendimentoconsultoriad.resultadoconsultoriads)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriad;
}
