import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Etapapraticad } from './Etapapraticad';
import { Atividadepraticad } from './Atividadepraticad';
import { Desperdiciomasterd } from './Desperdiciomasterd';
import { Linhadeproducaod } from './Linhadeproducaod';
import { Mfvpraticad } from './Mfvpraticad';
import { Planodeacaod } from './Planodeacaod';
import { Processoprodutivod } from './Processoprodutivod';
import { Visitapraticad } from './Visitapraticad';

@Index('atendimentopraticad_pkey', ['id'], { unique: true })
@Index('ix_atendimentopraticad_fk_atendimentopraticad_idetapapratica', ['idetapapratica'], {})
@Entity('atendimentopraticad', { schema: 'public' })
export class Atendimentopraticad {
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

  @ManyToOne(() => Etapapraticad, (etapapraticad) => etapapraticad.atendimentopraticads)
  @JoinColumn([{ name: 'idetapapratica', referencedColumnName: 'id' }])
  idetapapratica2: Etapapraticad;

  @OneToMany(() => Atividadepraticad, (atividadepraticad) => atividadepraticad.idatendimentopratica2)
  atividadepraticads: Atividadepraticad[];

  @OneToMany(() => Desperdiciomasterd, (desperdiciomasterd) => desperdiciomasterd.idatendimentopratica2)
  desperdiciomasterds: Desperdiciomasterd[];

  @OneToMany(() => Linhadeproducaod, (linhadeproducaod) => linhadeproducaod.idatendimentopratica2)
  linhadeproducaods: Linhadeproducaod[];

  @OneToMany(() => Mfvpraticad, (mfvpraticad) => mfvpraticad.idatendimentopratica2)
  mfvpraticads: Mfvpraticad[];

  @OneToMany(() => Planodeacaod, (planodeacaod) => planodeacaod.idatendimentopratica2)
  planodeacaods: Planodeacaod[];

  @OneToMany(() => Processoprodutivod, (processoprodutivod) => processoprodutivod.idatendimentopratica2)
  processoprodutivods: Processoprodutivod[];

  @OneToMany(() => Visitapraticad, (visitapraticad) => visitapraticad.idatendimentopratica2)
  visitapraticads: Visitapraticad[];
}