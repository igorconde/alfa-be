import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentoturmadigital } from './Atendimentoturmadigital';
import { Etapaadigital } from './Etapaadigital';
import { Etapaalinhamentob } from './Etapaalinhamentob';
import { Etapaconsultoriabdigital } from './Etapaconsultoriabdigital';
import { Etapaconsultoriacdigital } from './Etapaconsultoriacdigital';
import { Etapaconsultoriaddigital } from './Etapaconsultoriaddigital';
import { Etapapraticabdigital } from './Etapapraticabdigital';
import { Etapapraticacdigital } from './Etapapraticacdigital';
import { Etapapraticaddigital } from './Etapapraticaddigital';
import { Etapateoricadigital } from './Etapateoricadigital';

@Index('turmamentoriadigital_pkey', ['id'], { unique: true })
@Entity('turmamentoriadigital', { schema: 'public' })
export class Turmamentoriadigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('timestamp without time zone', {
    name: 'datacriacao',
    nullable: true,
  })
  datacriacao: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataetapabalinhamento',
    nullable: true,
  })
  dataetapabalinhamento: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataetapabconsultoria',
    nullable: true,
  })
  dataetapabconsultoria: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataetapabpratica',
    nullable: true,
  })
  dataetapabpratica: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataetapabteorica',
    nullable: true,
  })
  dataetapabteorica: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataetapacconsultoria',
    nullable: true,
  })
  dataetapacconsultoria: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataetapacpratica',
    nullable: true,
  })
  dataetapacpratica: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataetapacteorica',
    nullable: true,
  })
  dataetapacteorica: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataetapadconsultoria',
    nullable: true,
  })
  dataetapadconsultoria: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataetapadpratica',
    nullable: true,
  })
  dataetapadpratica: Date | null;

  @Column('timestamp without time zone', {
    name: 'dataetapadteorica',
    nullable: true,
  })
  dataetapadteorica: Date | null;

  @Column('timestamp without time zone', {
    name: 'datafinalizacao',
    nullable: true,
  })
  datafinalizacao: Date | null;

  @Column('timestamp without time zone', { name: 'datainicio', nullable: true })
  datainicio: Date | null;

  @Column('timestamp without time zone', {
    name: 'datainicioexecucao',
    nullable: true,
  })
  datainicioexecucao: Date | null;

  @Column('timestamp without time zone', {
    name: 'datatermino',
    nullable: true,
  })
  datatermino: Date | null;

  @Column('boolean', { name: 'emprogresso', nullable: true })
  emprogresso: boolean | null;

  @Column('integer', { name: 'etapaatual', nullable: true })
  etapaatual: number | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 500 })
  nome: string | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'unidade', nullable: true })
  unidade: number | null;

  @Column('tsvector', { name: 'buscalivreturma', nullable: true })
  buscalivreturma: string | null;

  @OneToMany(() => Atendimentoturmadigital, (atendimentoturmadigital) => atendimentoturmadigital.idturma2)
  atendimentoturmadigitals: Atendimentoturmadigital[];

  @OneToMany(() => Etapaadigital, (etapaadigital) => etapaadigital.idturma2)
  etapaadigitals: Etapaadigital[];

  @OneToMany(() => Etapaalinhamentob, (etapaalinhamentob) => etapaalinhamentob.idturma2)
  etapaalinhamentobs: Etapaalinhamentob[];

  @OneToMany(() => Etapaconsultoriabdigital, (etapaconsultoriabdigital) => etapaconsultoriabdigital.idturma2)
  etapaconsultoriabdigitals: Etapaconsultoriabdigital[];

  @OneToMany(() => Etapaconsultoriacdigital, (etapaconsultoriacdigital) => etapaconsultoriacdigital.idturma2)
  etapaconsultoriacdigitals: Etapaconsultoriacdigital[];

  @OneToMany(() => Etapaconsultoriaddigital, (etapaconsultoriaddigital) => etapaconsultoriaddigital.idturma2)
  etapaconsultoriaddigitals: Etapaconsultoriaddigital[];

  @OneToMany(() => Etapapraticabdigital, (etapapraticabdigital) => etapapraticabdigital.idturma2)
  etapapraticabdigitals: Etapapraticabdigital[];

  @OneToMany(() => Etapapraticacdigital, (etapapraticacdigital) => etapapraticacdigital.idturma2)
  etapapraticacdigitals: Etapapraticacdigital[];

  @OneToMany(() => Etapapraticaddigital, (etapapraticaddigital) => etapapraticaddigital.idturma2)
  etapapraticaddigitals: Etapapraticaddigital[];

  @OneToMany(() => Etapateoricadigital, (etapateoricadigital) => etapateoricadigital.idturma2)
  etapateoricadigitals: Etapateoricadigital[];
}
