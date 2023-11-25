import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Contramedidasa3praticacdigital } from './Contramedidasa3praticacdigital';

@Index('planodeacaopraticacdigital_pkey', ['id'], { unique: true })
@Index('plndcopraticacdigitalfkplndacaopraticacdigitalidcontramedidasa3', ['idcontramedidasa3'], {})
@Entity('planodeacaopraticacdigital', { schema: 'public' })
export class Planodeacaopraticacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'achados', nullable: true, length: 255 })
  achados: string | null;

  @Column('character varying', {
    name: 'causasuspeita',
    nullable: true,
    length: 255,
  })
  causasuspeita: string | null;

  @Column('character varying', {
    name: 'itemacao',
    nullable: true,
    length: 255,
  })
  itemacao: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('timestamp without time zone', { name: 'prazo', nullable: true })
  prazo: Date | null;

  @Column('character varying', {
    name: 'responsavelacao',
    nullable: true,
    length: 255,
  })
  responsavelacao: string | null;

  @Column('integer', { name: 'idcontramedidasa3', nullable: true })
  idcontramedidasa3: number | null;

  @ManyToOne(() => Contramedidasa3praticacdigital, (contramedidasa3praticacdigital) => contramedidasa3praticacdigital.planodeacaopraticacdigitals)
  @JoinColumn([{ name: 'idcontramedidasa3', referencedColumnName: 'id' }])
  idcontramedidasa: Contramedidasa3praticacdigital;
}
