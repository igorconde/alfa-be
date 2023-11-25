import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexovisitapraticad } from './Anexovisitapraticad';
import { Atendimentopraticad } from './atendimentopraticad.entity';

@Index('visitapraticad_pkey', ['id'], { unique: true })
@Index('ix_visitapraticad_fk_visitapraticad_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('visitapraticad', { schema: 'public' })
export class Visitapraticad {
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

  @OneToMany(() => Anexovisitapraticad, (anexovisitapraticad) => anexovisitapraticad.idvisitapratica2)
  anexovisitapraticads: Anexovisitapraticad[];

  @ManyToOne(() => Atendimentopraticad, (atendimentopraticad) => atendimentopraticad.visitapraticads)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticad;
}
