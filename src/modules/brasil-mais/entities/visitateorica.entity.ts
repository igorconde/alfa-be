import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexovisitateorica } from './Anexovisitateorica';
import { Etapateorica } from './etapateorica.entity';

@Index('visitateorica_pkey', ['id'], { unique: true })
@Index('ix_visitateorica_fk_visitateorica_idetapateorica', ['idetapateorica'], {})
@Entity('visitateorica', { schema: 'public' })
export class Visitateorica {
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

  @Column('integer', { name: 'idetapateorica', nullable: true })
  idetapateorica: number | null;

  @Column('boolean', { name: 'finalizada', nullable: true })
  finalizada: boolean | null;

  @Column('boolean', { name: 'isvirtual', nullable: true })
  isvirtual: boolean | null;

  @OneToMany(() => Anexovisitateorica, (anexovisitateorica) => anexovisitateorica.idvisitateorica2)
  anexovisitateoricas: Anexovisitateorica[];

  @ManyToOne(() => Etapateorica, (etapateorica) => etapateorica.visitateoricas)
  @JoinColumn([{ name: 'idetapateorica', referencedColumnName: 'id' }])
  idetapateorica2: Etapateorica;
}
