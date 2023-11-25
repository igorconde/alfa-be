import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Setupminaconsultoriabdigital } from './Setupminaconsultoriabdigital';

@Index('anexosetupminaconsultoriabdigital_pkey', ['id'], { unique: true })
@Index('nxstpmncnsultoriabdigitalfknxstpmncnsultoriabdigitalidsetupmina', ['idsetupmina'], {})
@Entity('anexosetupminaconsultoriabdigital', { schema: 'public' })
export class Anexosetupminaconsultoriabdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @Column('character varying', {
    name: 'nomearquivo',
    nullable: true,
    length: 255,
  })
  nomearquivo: string | null;

  @Column('bigint', { name: 'tamanho', nullable: true })
  tamanho: string | null;

  @Column('character varying', { name: 'tipo', nullable: true, length: 255 })
  tipo: string | null;

  @Column('character varying', { name: 'url', nullable: true, length: 255 })
  url: string | null;

  @Column('integer', { name: 'idsetupmina', nullable: true })
  idsetupmina: number | null;

  @ManyToOne(() => Setupminaconsultoriabdigital, (setupminaconsultoriabdigital) => setupminaconsultoriabdigital.anexosetupminaconsultoriabdigitals)
  @JoinColumn([{ name: 'idsetupmina', referencedColumnName: 'id' }])
  idsetupmina2: Setupminaconsultoriabdigital;
}
