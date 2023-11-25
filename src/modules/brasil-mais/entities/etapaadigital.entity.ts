import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Turmamentoriadigital } from './turmamentoriadigital.entity';

@Index('etapaadigital_pkey', ['id'], { unique: true })
@Index('ix_etapaadigital_fk_etapaadigital_idturma', ['idturma'], {})
@Entity('etapaadigital', { schema: 'public' })
export class Etapaadigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'etapa', nullable: true })
  etapa: number | null;

  @Column('integer', { name: 'idturma', nullable: true })
  idturma: number | null;

  @ManyToOne(() => Turmamentoriadigital, (turmamentoriadigital) => turmamentoriadigital.etapaadigitals)
  @JoinColumn([{ name: 'idturma', referencedColumnName: 'id' }])
  idturma2: Turmamentoriadigital;
}
