import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoencontropraticaddigital } from './anexoencontropraticaddigital.entity';
import { Atendimentopraticaddigital } from './atendimentopraticaddigital.entity';

@Index('encontropraticaddigital_pkey', ['id'], { unique: true })
@Index('ncntrpraticaddigitalfkncntropraticaddigitalidatendimentopratica', ['idatendimentopratica'], {})
@Entity('encontropraticaddigital', { schema: 'public' })
export class Encontropraticaddigital {
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

  @OneToMany(() => Anexoencontropraticaddigital, (anexoencontropraticaddigital) => anexoencontropraticaddigital.idencontropratica2)
  anexoencontropraticaddigitals: Anexoencontropraticaddigital[];

  @ManyToOne(() => Atendimentopraticaddigital, (atendimentopraticaddigital) => atendimentopraticaddigital.encontropraticaddigitals)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticaddigital;
}
