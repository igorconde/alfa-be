import { Producaoapropriada } from '@modules/producao/entities/producaoapropriada.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexovisitaconsultoriac } from './anexovisitaconsultoriac.entity';
import { Atendimentoconsultoriac } from './atendimentoconsultoriac.entity';

@Index('visitaconsultoriac_pkey', ['id'], { unique: true })
@Index('visitaconsultoriacfkvisitaconsultoriac_idatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Entity('visitaconsultoriac', { schema: 'public' })
export class Visitaconsultoriac {
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

  @OneToMany(() => Anexovisitaconsultoriac, (anexovisitaconsultoriac) => anexovisitaconsultoriac.idvisitaconsultoria2)
  anexovisitaconsultoriacs: Anexovisitaconsultoriac[];

  @ManyToOne(() => Atendimentoconsultoriac, (atendimentoconsultoriac) => atendimentoconsultoriac.visitaconsultoriacs)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriac;

  @ManyToOne(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.visitaconsultoriacs)
  @JoinColumn([{ name: 'idproducaoapropriada', referencedColumnName: 'id' }])
  idproducaoapropriada: Producaoapropriada;
}
