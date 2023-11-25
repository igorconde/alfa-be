import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Etapaa } from './Etapaa';
import { Etapaconsultoriac } from './Etapaconsultoriac';
import { Etapapraticad } from './Etapapraticad';
import { Atendimentoturma } from './atendimentoturma.entity';
import { Etapaconsultoriad } from './etapaconsultoriad.entity';
import { Etapapraticab } from './etapapraticab.entity';
import { Etapapraticac } from './etapapraticac.entity';
import { Etapateorica } from './etapateorica.entity';

@Index('turmabuscalivre', ['buscalivreturma'], {})
@Index('turma_pkey', ['id'], { unique: true })
@Entity('turma', { schema: 'public' })
export class Turma {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('timestamp without time zone', { name: 'datainicio', nullable: true })
  datainicio: Date | null;

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

  @Column('timestamp without time zone', {
    name: 'datacriacao',
    nullable: true,
  })
  datacriacao: Date | null;

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

  @Column('timestamp without time zone', {
    name: 'datainicioexecucao',
    nullable: true,
  })
  datainicioexecucao: Date | null;

  @OneToMany(() => Atendimentoturma, (atendimentoturma) => atendimentoturma.idturma2)
  atendimentoturmas: Atendimentoturma[];

  @OneToMany(() => Etapaa, (etapaa) => etapaa.idturma2)
  etapaas: Etapaa[];

  @OneToMany(() => Etapaconsultoriac, (etapaconsultoriac) => etapaconsultoriac.idturma2)
  etapaconsultoriacs: Etapaconsultoriac[];

  @OneToMany(() => Etapaconsultoriad, (etapaconsultoriad) => etapaconsultoriad.idturma2)
  etapaconsultoriads: Etapaconsultoriad[];

  @OneToMany(() => Etapapraticab, (etapapraticab) => etapapraticab.idturma2)
  etapapraticabs: Etapapraticab[];

  @OneToMany(() => Etapapraticac, (etapapraticac) => etapapraticac.idturma2)
  etapapraticacs: Etapapraticac[];

  @OneToMany(() => Etapapraticad, (etapapraticad) => etapapraticad.idturma2)
  etapapraticads: Etapapraticad[];

  @OneToMany(() => Etapateorica, (etapateorica) => etapateorica.idturma2)
  etapateoricas: Etapateorica[];
}
