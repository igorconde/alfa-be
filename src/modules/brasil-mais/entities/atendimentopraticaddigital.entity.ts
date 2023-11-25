import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Analiseresultadospraticaddigital } from './Analiseresultadospraticaddigital';
import { Etapapraticaddigital } from './Etapapraticaddigital';
import { Relatorioa3consultoriacdigital } from './Relatorioa3consultoriacdigital';
import { Autossuficienciapraticaddigital } from './Autossuficienciapraticaddigital';
import { Encontropraticaddigital } from './Encontropraticaddigital';
import { Indicadorespraticaddigital } from './Indicadorespraticaddigital';

@Index('atendimentopraticaddigital_pkey', ['id'], { unique: true })
@Index('tndmentopraticaddigitalfktndimentopraticaddigitalidetapapratica', ['idetapapratica'], {})
@Index('tndimentopraticaddigitalfktndimentopraticaddigitalidrelatorioa3', ['idrelatorioa3'], {})
@Entity('atendimentopraticaddigital', { schema: 'public' })
export class Atendimentopraticaddigital {
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

  @Column('integer', { name: 'idrelatorioa3', nullable: true })
  idrelatorioa3: number | null;

  @OneToMany(() => Analiseresultadospraticaddigital, (analiseresultadospraticaddigital) => analiseresultadospraticaddigital.idatendimentopratica2)
  analiseresultadospraticaddigitals: Analiseresultadospraticaddigital[];

  @ManyToOne(() => Etapapraticaddigital, (etapapraticaddigital) => etapapraticaddigital.atendimentopraticaddigitals)
  @JoinColumn([{ name: 'idetapapratica', referencedColumnName: 'id' }])
  idetapapratica2: Etapapraticaddigital;

  @ManyToOne(() => Relatorioa3consultoriacdigital, (relatorioa3consultoriacdigital) => relatorioa3consultoriacdigital.atendimentopraticaddigitals)
  @JoinColumn([{ name: 'idrelatorioa3', referencedColumnName: 'id' }])
  idrelatorioa: Relatorioa3consultoriacdigital;

  @OneToMany(() => Autossuficienciapraticaddigital, (autossuficienciapraticaddigital) => autossuficienciapraticaddigital.idatendimentopratica2)
  autossuficienciapraticaddigitals: Autossuficienciapraticaddigital[];

  @OneToMany(() => Encontropraticaddigital, (encontropraticaddigital) => encontropraticaddigital.idatendimentopratica2)
  encontropraticaddigitals: Encontropraticaddigital[];

  @OneToMany(() => Indicadorespraticaddigital, (indicadorespraticaddigital) => indicadorespraticaddigital.idatendimentopratica2)
  indicadorespraticaddigitals: Indicadorespraticaddigital[];
}
