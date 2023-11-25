import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoencontropraticacdigital } from './anexoencontropraticacdigital.entity';
import { Atendimentopraticacdigital } from './atendimentopraticacdigital.entity';

@Index('encontropraticacdigital_pkey', ['id'], { unique: true })
@Index('ncntrpraticacdigitalfkncntropraticacdigitalidatendimentopratica', ['idatendimentopratica'], {})
@Entity('encontropraticacdigital', { schema: 'public' })
export class Encontropraticacdigital {
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

  @OneToMany(() => Anexoencontropraticacdigital, (anexoencontropraticacdigital) => anexoencontropraticacdigital.idencontropratica2)
  anexoencontropraticacdigitals: Anexoencontropraticacdigital[];

  @ManyToOne(() => Atendimentopraticacdigital, (atendimentopraticacdigital) => atendimentopraticacdigital.encontropraticacdigitals)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticacdigital;
}
