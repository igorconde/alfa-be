import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentopraticac } from './Atendimentopraticac';

@Index('planodeacaoc_pkey', ['id'], { unique: true })
@Index('ix_planodeacaoc_fk_planodeacaoc_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('planodeacaoc', { schema: 'public' })
export class Planodeacaoc {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'como', nullable: true, length: 255 })
  como: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('character varying', { name: 'oque', nullable: true, length: 255 })
  oque: string | null;

  @Column('character varying', { name: 'onde', nullable: true, length: 255 })
  onde: string | null;

  @Column('character varying', { name: 'porque', nullable: true, length: 255 })
  porque: string | null;

  @Column('character varying', { name: 'quando', nullable: true, length: 255 })
  quando: string | null;

  @Column('character varying', { name: 'quanto', nullable: true, length: 255 })
  quanto: string | null;

  @Column('character varying', { name: 'quem', nullable: true, length: 255 })
  quem: string | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @ManyToOne(() => Atendimentopraticac, (atendimentopraticac) => atendimentopraticac.planodeacaocs)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticac;
}
