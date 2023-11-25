import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Acompanhamentoa3praticacdigital } from './acompanhamentoa3praticacdigital.entity';

@Index('medidasacompanhamentoa3praticacdigital_pkey', ['id'], { unique: true })
@Index('mddscmpnhmnt3prtccdgtlfkmddscmpnhmnt3prtccdgtldacompanhamentoa3', ['idacompanhamentoa3'], {})
@Entity('medidasacompanhamentoa3praticacdigital', { schema: 'public' })
export class Medidasacompanhamentoa3praticacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'item', nullable: true, length: 255 })
  item: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('timestamp without time zone', { name: 'prazo', nullable: true })
  prazo: Date | null;

  @Column('character varying', {
    name: 'responsavel',
    nullable: true,
    length: 255,
  })
  responsavel: string | null;

  @Column('character varying', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @Column('integer', { name: 'idacompanhamentoa3', nullable: true })
  idacompanhamentoa3: number | null;

  @ManyToOne(() => Acompanhamentoa3praticacdigital, (acompanhamentoa3praticacdigital) => acompanhamentoa3praticacdigital.medidasacompanhamentoa3praticacdigitals)
  @JoinColumn([{ name: 'idacompanhamentoa3', referencedColumnName: 'id' }])
  idacompanhamentoa: Acompanhamentoa3praticacdigital;
}
