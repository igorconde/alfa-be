import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Planodeacaochildd } from './Planodeacaochildd';
import { Atendimentopraticad } from './Atendimentopraticad';

@Index('planodeacaod_pkey', ['id'], { unique: true })
@Index('ix_planodeacaod_fk_planodeacaod_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('planodeacaod', { schema: 'public' })
export class Planodeacaod {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @OneToMany(() => Planodeacaochildd, (planodeacaochildd) => planodeacaochildd.idplanodeacao2)
  planodeacaochildds: Planodeacaochildd[];

  @ManyToOne(() => Atendimentopraticad, (atendimentopraticad) => atendimentopraticad.planodeacaods)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticad;
}
