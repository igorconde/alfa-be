import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Etapapraticacdigital } from './Etapapraticacdigital';
import { Indicadorespraticacdigital } from './Indicadorespraticacdigital';
import { Relatorioa3praticacdigital } from './Relatorioa3praticacdigital';
import { Encontropraticacdigital } from './encontropraticacdigital.entity';

@Index('atendimentopraticacdigital_pkey', ['id'], { unique: true })
@Index('tndmentopraticacdigitalfktndimentopraticacdigitalidetapapratica', ['idetapapratica'], {})
@Entity('atendimentopraticacdigital', { schema: 'public' })
export class Atendimentopraticacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('boolean', { name: 'cancelado', nullable: true })
  cancelado: boolean | null;

  @Column('integer', { name: 'etapa', nullable: true })
  etapa: number | null;

  @Column('boolean', { name: 'finalizado', nullable: true })
  finalizado: boolean | null;

  @Column('integer', { name: 'horasapropriadas', nullable: true })
  horasapropriadas: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idetapapratica', nullable: true })
  idetapapratica: number | null;

  @ManyToOne(() => Etapapraticacdigital, (etapapraticacdigital) => etapapraticacdigital.atendimentopraticacdigitals)
  @JoinColumn([{ name: 'idetapapratica', referencedColumnName: 'id' }])
  idetapapratica2: Etapapraticacdigital;

  @OneToMany(() => Encontropraticacdigital, (encontropraticacdigital) => encontropraticacdigital.idatendimentopratica2)
  encontropraticacdigitals: Encontropraticacdigital[];

  @OneToMany(() => Indicadorespraticacdigital, (indicadorespraticacdigital) => indicadorespraticacdigital.idatendimentopratica2)
  indicadorespraticacdigitals: Indicadorespraticacdigital[];

  @OneToMany(() => Relatorioa3praticacdigital, (relatorioa3praticacdigital) => relatorioa3praticacdigital.idatendimentopratica2)
  relatorioa3praticacdigitals: Relatorioa3praticacdigital[];
}
