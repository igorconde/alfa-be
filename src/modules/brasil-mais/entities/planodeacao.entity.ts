import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentopraticac } from './atendimentopraticac.entity';
import { Planodeacaochild } from './planodeacaochild.entity';

@Index('planodeacao_pkey', ['id'], { unique: true })
@Index('ix_planodeacao_fk_planodeacao_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('planodeacao', { schema: 'public' })
export class Planodeacao {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @ManyToOne(() => Atendimentopraticac, (atendimentopraticac) => atendimentopraticac.planodeacaos)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticac;

  @OneToMany(() => Planodeacaochild, (planodeacaochild) => planodeacaochild.idplanodeacao2)
  planodeacaochildren: Planodeacaochild[];
}
