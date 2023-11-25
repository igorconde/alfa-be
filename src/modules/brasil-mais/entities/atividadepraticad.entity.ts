import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoatividadepraticad } from './anexoatividadepraticad.entity';
import { Atendimentopraticad } from './atendimentopraticad.entity';

@Index('atividadepraticad_pkey', ['id'], { unique: true })
@Index('ix_atividadepraticad_fk_atividadepraticad_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('atividadepraticad', { schema: 'public' })
export class Atividadepraticad {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idvisita', nullable: true })
  idvisita: number | null;

  @Column('character varying', {
    name: 'nomeatividade',
    nullable: true,
    length: 255,
  })
  nomeatividade: string | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'codatividade', nullable: true })
  codatividade: number | null;

  @OneToMany(() => Anexoatividadepraticad, (anexoatividadepraticad) => anexoatividadepraticad.idatividadepratica2)
  anexoatividadepraticads: Anexoatividadepraticad[];

  @ManyToOne(() => Atendimentopraticad, (atendimentopraticad) => atendimentopraticad.atividadepraticads)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticad;
}
