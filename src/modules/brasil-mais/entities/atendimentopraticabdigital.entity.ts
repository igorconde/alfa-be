import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Artefatosinstalacaopraticabdigital } from './Artefatosinstalacaopraticabdigital';
import { Etapapraticabdigital } from './Etapapraticabdigital';
import { Producaoapropriada } from './Producaoapropriada';
import { Encontropraticabdigital } from './Encontropraticabdigital';
import { Indicadorespraticabdigital } from './Indicadorespraticabdigital';
import { Linhadeproducaopraticabdigital } from './Linhadeproducaopraticabdigital';
import { Processoprodutivopraticabdigital } from './Processoprodutivopraticabdigital';

@Index('atendimentopraticabdigital_pkey', ['id'], { unique: true })
@Index('tndmentopraticabdigitalfktndimentopraticabdigitalidetapapratica', ['idetapapratica'], {})
@Index('tndmntprticabdigitalfktndmntpraticabdigitalidproducaoapropriada', ['idproducaoapropriada'], {})
@Entity('atendimentopraticabdigital', { schema: 'public' })
export class Atendimentopraticabdigital {
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

  @Column('integer', { name: 'idproducaoapropriada', nullable: true })
  idproducaoapropriada: number | null;

  @OneToMany(() => Artefatosinstalacaopraticabdigital, (artefatosinstalacaopraticabdigital) => artefatosinstalacaopraticabdigital.idatendimentopratica2)
  artefatosinstalacaopraticabdigitals: Artefatosinstalacaopraticabdigital[];

  @ManyToOne(() => Etapapraticabdigital, (etapapraticabdigital) => etapapraticabdigital.atendimentopraticabdigitals)
  @JoinColumn([{ name: 'idetapapratica', referencedColumnName: 'id' }])
  idetapapratica2: Etapapraticabdigital;

  @ManyToOne(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.atendimentopraticabdigitals)
  @JoinColumn([{ name: 'idproducaoapropriada', referencedColumnName: 'id' }])
  idproducaoapropriada2: Producaoapropriada;

  @OneToMany(() => Encontropraticabdigital, (encontropraticabdigital) => encontropraticabdigital.idatendimentopratica2)
  encontropraticabdigitals: Encontropraticabdigital[];

  @OneToMany(() => Indicadorespraticabdigital, (indicadorespraticabdigital) => indicadorespraticabdigital.idatendimentopratica2)
  indicadorespraticabdigitals: Indicadorespraticabdigital[];

  @OneToMany(() => Linhadeproducaopraticabdigital, (linhadeproducaopraticabdigital) => linhadeproducaopraticabdigital.idatendimentopratica2)
  linhadeproducaopraticabdigitals: Linhadeproducaopraticabdigital[];

  @OneToMany(() => Processoprodutivopraticabdigital, (processoprodutivopraticabdigital) => processoprodutivopraticabdigital.idatendimentopratica2)
  processoprodutivopraticabdigitals: Processoprodutivopraticabdigital[];
}
