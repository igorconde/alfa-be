import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexovisitapraticac } from './anexovisitapraticac.entity';
import { Atendimentopraticac } from './atendimentopraticac.entity';

@Index('visitapraticac_pkey', ['id'], { unique: true })
@Index('ix_visitapraticac_fk_visitapraticac_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('visitapraticac', { schema: 'public' })
export class Visitapraticac {
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

  @OneToMany(() => Anexovisitapraticac, (anexovisitapraticac) => anexovisitapraticac.idvisitapratica2)
  anexovisitapraticacs: Anexovisitapraticac[];

  @ManyToOne(() => Atendimentopraticac, (atendimentopraticac) => atendimentopraticac.visitapraticacs)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticac;
}
