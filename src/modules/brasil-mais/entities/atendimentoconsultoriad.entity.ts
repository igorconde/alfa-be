import { Visitaconsultoriad } from '@modules/brasil-mais/entities/visitaconsultoriad.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Assinaturaconsultoriad } from './Assinaturaconsultoriad';
import { Atividadeconsultoriad } from './Atividadeconsultoriad';
import { Avaliacaoconsultoriad } from './Avaliacaoconsultoriad';
import { Etapaconsultoriad } from './Etapaconsultoriad';
import { Resultadoconsultoriad } from './Resultadoconsultoriad';
import { Tecnologiasdigitaisd } from './Tecnologiasdigitaisd';


@Index('atendimentoconsultoriad_pkey', ['id'], { unique: true })
@Index('tndimentoconsultoriadfktendimentoconsultoriadidetapaconsultoria', ['idetapaconsultoria'], {})
@Entity('atendimentoconsultoriad', { schema: 'public' })
export class Atendimentoconsultoriad {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

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

  @Column('boolean', { name: 'cancelado', nullable: true })
  cancelado: boolean | null;

  @OneToMany(() => Assinaturaconsultoriad, (assinaturaconsultoriad) => assinaturaconsultoriad.idatendimentoconsultoria2)
  assinaturaconsultoriads: Assinaturaconsultoriad[];

  @ManyToOne(() => Etapaconsultoriad, (etapaconsultoriad) => etapaconsultoriad.atendimentoconsultoriads)
  @JoinColumn([{ name: 'idetapaconsultoria', referencedColumnName: 'id' }])
  idetapaconsultoria2: Etapaconsultoriad;

  @OneToMany(() => Atividadeconsultoriad, (atividadeconsultoriad) => atividadeconsultoriad.idatendimentoconsultoria2)
  atividadeconsultoriads: Atividadeconsultoriad[];

  @OneToMany(() => Avaliacaoconsultoriad, (avaliacaoconsultoriad) => avaliacaoconsultoriad.idatendimentoconsultoria2)
  avaliacaoconsultoriads: Avaliacaoconsultoriad[];

  @OneToMany(() => Resultadoconsultoriad, (resultadoconsultoriad) => resultadoconsultoriad.idatendimentoconsultoria2)
  resultadoconsultoriads: Resultadoconsultoriad[];

  @OneToMany(() => Tecnologiasdigitaisd, (tecnologiasdigitaisd) => tecnologiasdigitaisd.idatendimentoconsultoria2)
  tecnologiasdigitaisds: Tecnologiasdigitaisd[];

  @OneToMany(() => Visitaconsultoriad, (visitaconsultoriad) => visitaconsultoriad.idatendimentoconsultoria2)
  visitaconsultoriads: Visitaconsultoriad[];
}
