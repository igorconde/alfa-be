import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexovisitapraticab } from './anexovisitapraticab.entity';
import { Atendimentopraticab } from './atendimentopraticab.entity';

@Index('visitapraticab_pkey', ['id'], { unique: true })
@Index('ix_visitapraticab_fk_visitapraticab_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('visitapraticab', { schema: 'public' })
export class Visitapraticab {
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

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @Column('boolean', { name: 'finalizada', nullable: true })
  finalizada: boolean | null;

  @Column('boolean', { name: 'isvirtual', nullable: true })
  isvirtual: boolean | null;

  @OneToMany(() => Anexovisitapraticab, (anexovisitapraticab) => anexovisitapraticab.idvisitapratica2)
  anexovisitapraticabs: Anexovisitapraticab[];

  @ManyToOne(() => Atendimentopraticab, (atendimentopraticab) => atendimentopraticab.visitapraticabs)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticab;
}
