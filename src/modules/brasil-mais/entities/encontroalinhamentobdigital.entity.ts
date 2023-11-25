import { Producaoapropriada } from '@modules/producao/entities/producaoapropriada.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoencontroalinhamentobdigital } from './anexoencontroalinhamentobdigital.entity';
import { Atendimentoalinhamentobdigital } from './atendimentoalinhamentobdigital.entity';

@Index('encontroalinhamentobdigital_pkey', ['id'], { unique: true })
@Index('ncntrlnhmntbdgitalfkncntrlnhmntbdigitalidatendimentoalinhamento', ['idatendimentoalinhamento'], {})
@Index('ncntrlnhmntobdigitalfkncntrlnhmentobdigitalidproducaoapropriada', ['idproducaoapropriada'], {})
@Entity('encontroalinhamentobdigital', { schema: 'public' })
export class Encontroalinhamentobdigital {
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

  @Column('integer', { name: 'idatendimentoalinhamento', nullable: true })
  idatendimentoalinhamento: number | null;

  @Column('integer', { name: 'idproducaoapropriada', nullable: true })
  idproducaoapropriada: number | null;

  @OneToMany(() => Anexoencontroalinhamentobdigital, (anexoencontroalinhamentobdigital) => anexoencontroalinhamentobdigital.idencontroalinhamento2)
  anexoencontroalinhamentobdigitals: Anexoencontroalinhamentobdigital[];

  @ManyToOne(() => Atendimentoalinhamentobdigital, (atendimentoalinhamentobdigital) => atendimentoalinhamentobdigital.encontroalinhamentobdigitals)
  @JoinColumn([{ name: 'idatendimentoalinhamento', referencedColumnName: 'id' }])
  idatendimentoalinhamento2: Atendimentoalinhamentobdigital;

  @ManyToOne(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.encontroalinhamentobdigitals)
  @JoinColumn([{ name: 'idproducaoapropriada', referencedColumnName: 'id' }])
  idproducaoapropriada2: Producaoapropriada;
}
