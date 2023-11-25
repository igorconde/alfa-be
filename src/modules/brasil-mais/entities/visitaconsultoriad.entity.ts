import { Producaoapropriada } from '@modules/producao/entities/producaoapropriada.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexovisitaconsultoriad } from './Anexovisitaconsultoriad';
import { Atendimentoconsultoriad } from './Atendimentoconsultoriad';

@Index('visitaconsultoriad_pkey', ['id'], { unique: true })
@Index('visitaconsultoriadfkvisitaconsultoriad_idatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Entity('visitaconsultoriad', { schema: 'public' })
export class Visitaconsultoriad {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', { name: 'data', nullable: true })
  data: Date | null;

  @Column('integer', { name: 'horasapropriadas', nullable: true })
  horasapropriadas: number | null;

  @Column('integer', { name: 'ordem', nullable: true })
  ordem: number | null;

  @Column('integer', { name: 'turno', nullable: true })
  turno: number | null;

  @Column('integer', { name: 'idatendimentoconsultoria', nullable: true })
  idatendimentoconsultoria: number | null;

  @Column('boolean', { name: 'finalizada', nullable: true })
  finalizada: boolean | null;

  @Column('boolean', { name: 'isvirtual', nullable: true })
  isvirtual: boolean | null;

  @OneToMany(() => Anexovisitaconsultoriad, (anexovisitaconsultoriad) => anexovisitaconsultoriad.idvisitaconsultoria2)
  anexovisitaconsultoriads: Anexovisitaconsultoriad[];

  @ManyToOne(() => Atendimentoconsultoriad, (atendimentoconsultoriad) => atendimentoconsultoriad.visitaconsultoriads)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriad;

  @ManyToOne(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.visitaconsultoriads)
  @JoinColumn([{ name: 'idproducaoapropriada', referencedColumnName: 'id' }])
  idproducaoapropriada: Producaoapropriada;
}
