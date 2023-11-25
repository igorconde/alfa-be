import { Atendimentopraticabdigital } from '@modules/brasil-mais/entities/atendimentopraticabdigital.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoencontropraticabdigital } from './anexoencontropraticabdigital.entity';

@Index('encontropraticabdigital_pkey', ['id'], { unique: true })
@Index('ncntrpraticabdigitalfkncntropraticabdigitalidatendimentopratica', ['idatendimentopratica'], {})
@Entity('encontropraticabdigital', { schema: 'public' })
export class Encontropraticabdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', { name: 'data', nullable: true })
  data: Date | null;

  @Column('boolean', { name: 'finalizada', nullable: true })
  finalizada: boolean | null;

  @Column('integer', { name: 'horasapropriadas', nullable: true })
  horasapropriadas: number | null;

  @Column('integer', { name: 'idmentor', nullable: true })
  idmentor: number | null;

  @Column('boolean', { name: 'isvirtual', nullable: true })
  isvirtual: boolean | null;

  @Column('integer', { name: 'ordem', nullable: true })
  ordem: number | null;

  @Column('integer', { name: 'turno', nullable: true })
  turno: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @OneToMany(() => Anexoencontropraticabdigital, (anexoencontropraticabdigital) => anexoencontropraticabdigital.idencontropratica2)
  anexoencontropraticabdigitals: Anexoencontropraticabdigital[];

  @ManyToOne(() => Atendimentopraticabdigital, (atendimentopraticabdigital) => atendimentopraticabdigital.encontropraticabdigitals)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticabdigital;
}
