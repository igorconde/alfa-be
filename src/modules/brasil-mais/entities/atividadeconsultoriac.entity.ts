import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoatividadeconsultoriac } from './Anexoatividadeconsultoriac';
import { Atendimentoconsultoriac } from './Atendimentoconsultoriac';

@Index('atividadeconsultoriac_pkey', ['id'], { unique: true })
@Index('tvdadeconsultoriacfktvidadeconsultoriacidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Entity('atividadeconsultoriac', { schema: 'public' })
export class Atividadeconsultoriac {
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

  @OneToMany(() => Anexoatividadeconsultoriac, (anexoatividadeconsultoriac) => anexoatividadeconsultoriac.idatividadeconsultoria2)
  anexoatividadeconsultoriacs: Anexoatividadeconsultoriac[];

  @ManyToOne(() => Atendimentoconsultoriac, (atendimentoconsultoriac) => atendimentoconsultoriac.atividadeconsultoriacs)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriac;
}
