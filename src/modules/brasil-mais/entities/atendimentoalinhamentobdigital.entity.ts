import { Encontroalinhamentobdigital } from '@modules/brasil-mais/entities/encontroalinhamentobdigital.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Etapaalinhamentob } from './etapaalinhamentob.entity';
import { Linhadeproducaoalinhamentobdigital } from './linhadeproducaoalinhamentobdigital.entity';
import { Processoprodutivoalinhamentobdigital } from './processoprodutivoalinhamentobdigital.entity';

@Index('atendimentoalinhamentobdigital_pkey', ['id'], { unique: true })
@Index('tndmntlnhmntobdigitalfktndmntlnhmentobdigitalidetapaalinhamento', ['idetapaalinhamento'], {})
@Entity('atendimentoalinhamentobdigital', { schema: 'public' })
export class Atendimentoalinhamentobdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('boolean', { name: 'cancelado', nullable: true })
  cancelado: boolean | null;

  @Column('integer', { name: 'etapa', nullable: true })
  etapa: number | null;

  @Column('boolean', { name: 'finalizado', nullable: true })
  finalizado: boolean | null;

  @Column('integer', { name: 'horasapropriadas', nullable: true })
  horasapropriadas: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idetapaalinhamento', nullable: true })
  idetapaalinhamento: number | null;

  @ManyToOne(() => Etapaalinhamentob, (etapaalinhamentob) => etapaalinhamentob.atendimentoalinhamentobdigitals)
  @JoinColumn([{ name: 'idetapaalinhamento', referencedColumnName: 'id' }])
  idetapaalinhamento2: Etapaalinhamentob;

  @OneToMany(() => Encontroalinhamentobdigital, (encontroalinhamentobdigital) => encontroalinhamentobdigital.idatendimentoalinhamento2)
  encontroalinhamentobdigitals: Encontroalinhamentobdigital[];

  @OneToMany(() => Linhadeproducaoalinhamentobdigital, (linhadeproducaoalinhamentobdigital) => linhadeproducaoalinhamentobdigital.idatendimentoalinhamento2)
  linhadeproducaoalinhamentobdigitals: Linhadeproducaoalinhamentobdigital[];

  @OneToMany(() => Processoprodutivoalinhamentobdigital, (processoprodutivoalinhamentobdigital) => processoprodutivoalinhamentobdigital.idatendimentoalinhamento2)
  processoprodutivoalinhamentobdigitals: Processoprodutivoalinhamentobdigital[];
}
