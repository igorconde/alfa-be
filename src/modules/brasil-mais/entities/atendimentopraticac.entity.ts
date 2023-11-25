import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Etapapraticac } from './Etapapraticac';
import { Linhadeproducaoc } from './Linhadeproducaoc';
import { Planodeacao } from './Planodeacao';
import { Planodeacaoc } from './Planodeacaoc';
import { Processoprodutivoc } from './Processoprodutivoc';
import { Visitapraticac } from './Visitapraticac';

@Index('atendimentopraticac_pkey', ['id'], { unique: true })
@Index('ix_atendimentopraticac_fk_atendimentopraticac_idetapapratica', ['idetapapratica'], {})
@Entity('atendimentopraticac', { schema: 'public' })
export class Atendimentopraticac {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'etapa', nullable: true })
  etapa: number | null;

  @Column('boolean', { name: 'finalizado', nullable: true })
  finalizado: boolean | null;

  @Column('integer', { name: 'horasapropriadas', nullable: true })
  horasapropriadas: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idetapapratica', nullable: true })
  idetapapratica: number | null;

  @Column('boolean', { name: 'cancelado', nullable: true })
  cancelado: boolean | null;

  @ManyToOne(() => Etapapraticac, (etapapraticac) => etapapraticac.atendimentopraticacs)
  @JoinColumn([{ name: 'idetapapratica', referencedColumnName: 'id' }])
  idetapapratica2: Etapapraticac;

  @OneToMany(() => Linhadeproducaoc, (linhadeproducaoc) => linhadeproducaoc.idatendimentopratica2)
  linhadeproducaocs: Linhadeproducaoc[];

  @OneToMany(() => Planodeacao, (planodeacao) => planodeacao.idatendimentopratica2)
  planodeacaos: Planodeacao[];

  @OneToMany(() => Planodeacaoc, (planodeacaoc) => planodeacaoc.idatendimentopratica2)
  planodeacaocs: Planodeacaoc[];

  @OneToMany(() => Processoprodutivoc, (processoprodutivoc) => processoprodutivoc.idatendimentopratica2)
  processoprodutivocs: Processoprodutivoc[];

  @OneToMany(() => Visitapraticac, (visitapraticac) => visitapraticac.idatendimentopratica2)
  visitapraticacs: Visitapraticac[];
}
