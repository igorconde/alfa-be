import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoatividadeconsultoriad } from './anexoatividadeconsultoriad.entity';
import { Atendimentoconsultoriad } from './atendimentoconsultoriad.entity';

@Index('atividadeconsultoriad_pkey', ['id'], { unique: true })
@Index('tvdadeconsultoriadfktvidadeconsultoriadidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Entity('atividadeconsultoriad', { schema: 'public' })
export class Atividadeconsultoriad {
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

  @Column('integer', { name: 'idatendimentoconsultoria', nullable: true })
  idatendimentoconsultoria: number | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'codatividade', nullable: true })
  codatividade: number | null;

  @OneToMany(() => Anexoatividadeconsultoriad, (anexoatividadeconsultoriad) => anexoatividadeconsultoriad.idatividadeconsultoria2)
  anexoatividadeconsultoriads: Anexoatividadeconsultoriad[];

  @ManyToOne(() => Atendimentoconsultoriad, (atendimentoconsultoriad) => atendimentoconsultoriad.atividadeconsultoriads)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriad;
}
