import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Publicacaocolaborador } from '@modules/atendimento/entities/publicacaocolaborador.entity';
import { Etapaconsultoriac } from '@modules/brasil-mais/entities/etapaconsultoriac.entity';
import { Etapaconsultoriad } from '@modules/brasil-mais/entities/etapaconsultoriad.entity';
import { Etapapraticab } from '@modules/brasil-mais/entities/etapapraticab.entity';
import { Etapapraticac } from '@modules/brasil-mais/entities/etapapraticac.entity';
import { Etapapraticad } from '@modules/brasil-mais/entities/etapapraticad.entity';
import { Etapateorica } from '@modules/brasil-mais/entities/etapateorica.entity';
import { Visitacolaborador } from '@modules/brasil-mais/entities/visitacolaborador.entity';
import { Grupousuariocolaborador } from '@modules/common/entities/grupousuariocolaborador.entity';
import { Fatoproducaoapropriada } from '@modules/producao/entities/fatoproducaoapropriada.entity';
import { Fatoproducaoapropriadametrologia } from '@modules/producao/entities/fatoproducaoapropriadametrologia.entity';
import { Producaoapropriada } from '@modules/producao/entities/producaoapropriada.entity';
import { Formacaocolaborador } from '@modules/usuario/entities/formacao-colaborador.entity';
import { Colaboradorprodutoregional } from './colaborador-produto-regional.entity';
import { Colaboradorskill } from './colaborador-skill.entity';
import { Colaboradortabelaco } from './colaborador-tabelaco.entity';
import { Colaboradorunidade } from './colaborador-unidade.entity';
import { Eventocolaborador } from './evento-colaborador.entity';
import { Funcaocolaborador } from './funcao-colabordor.entity';
import { Tipocontratocolaborador } from './tipo-contrato-colaborador.entity';
import { Treinamentocolaborador } from './treinamento-colaborador.entity';
import { Usuario } from './usuario.entity';

@Index('colaboradorbuscalivre', ['buscalivrecolaborador'], {})
@Index('colaborador_pkey', ['id'], { unique: true })
@Index('icolaboradorfkformacaocolaborador', ['idformacaocolaborador'], {})
@Index('icolaboradorfktipocontratocolaborador', ['idtipocontratocolaborador'], {})
@Index('icolaboradorfkunidadefederativa', ['idunidadefederativa'], {})
@Entity('colaborador', { schema: 'public' })
export class Colaborador {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'cpf', nullable: true, length: 255 })
  cpf: string | null;

  @Column('character varying', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('boolean', { name: 'isativo', nullable: true })
  isativo: boolean | null;

  @Column('character varying', {
    name: 'linkcurriculumvitae',
    nullable: true,
    length: 255,
  })
  linkcurriculumvitae: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 80 })
  nome: string | null;

  @Column('character varying', {
    name: 'numerocentroresponsabilidade',
    nullable: true,
  })
  numerocentroresponsabilidade: string | null;

  @Column('integer', { name: 'numerodehorasdetrabalho', nullable: true })
  numerodehorasdetrabalho: number | null;

  @Column('character varying', {
    name: 'telefone',
    nullable: true,
    length: 255,
  })
  telefone: string | null;

  @Column('character varying', { name: 'urlfoto', nullable: true, length: 255 })
  urlfoto: string | null;

  @Column('integer', { name: 'idformacaocolaborador', nullable: true })
  idformacaocolaborador: number | null;

  @Column('integer', { name: 'idtipocontratocolaborador', nullable: true })
  idtipocontratocolaborador: number | null;

  @Column('timestamp without time zone', {
    name: 'dataatualizacao',
    nullable: true,
  })
  dataatualizacao: Date | null;

  @Column('timestamp without time zone', {
    name: 'datacadastro',
    nullable: true,
  })
  datacadastro: Date | null;

  @Column('tsvector', { name: 'buscalivrecolaborador', nullable: true })
  buscalivrecolaborador: string | null;

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @Column('boolean', { name: 'islaboratorio', nullable: true })
  islaboratorio: boolean | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'emailresponsavel',
    nullable: true,
    length: 45,
  })
  emailresponsavel: string | null;

  @Column('boolean', { name: 'istransferidoparaindustria', nullable: true })
  istransferidoparaindustria: boolean | null;

  @Column('character varying', {
    name: 'linkcurriculumlinkedin',
    nullable: true,
    length: 128,
  })
  linkcurriculumlinkedin: string | null;

  @Column('boolean', { name: 'ishomologadobrasilmais', nullable: true })
  ishomologadobrasilmais: boolean | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @ManyToOne(() => Formacaocolaborador, (formacaocolaborador) => formacaocolaborador.colaboradors)
  @JoinColumn([{ name: 'idformacaocolaborador', referencedColumnName: 'id' }])
  idformacaocolaborador2: Formacaocolaborador;

  @ManyToOne(() => Funcaocolaborador, (funcaocolaborador) => funcaocolaborador.colaboradors)
  @JoinColumn([{ name: 'idfuncaocolaborador', referencedColumnName: 'id' }])
  idfuncaocolaborador: Funcaocolaborador;

  @ManyToOne(() => Tipocontratocolaborador, (tipocontratocolaborador) => tipocontratocolaborador.colaboradors)
  @JoinColumn([{ name: 'idtipocontratocolaborador', referencedColumnName: 'id' }])
  idtipocontratocolaborador2: Tipocontratocolaborador;

  @OneToMany(() => Colaboradorprodutoregional, (colaboradorprodutoregional) => colaboradorprodutoregional.idcolaborador2)
  colaboradorprodutoregionals: Colaboradorprodutoregional[];

  @OneToMany(() => Colaboradorskill, (colaboradorskill) => colaboradorskill.idcolaborador2)
  colaboradorskills: Colaboradorskill[];

  @OneToMany(() => Colaboradortabelaco, (colaboradortabelaco) => colaboradortabelaco.idcolaborador2)
  colaboradortabelacos: Colaboradortabelaco[];

  @OneToMany(() => Colaboradorunidade, (colaboradorunidade) => colaboradorunidade.idcolaborador2)
  colaboradorunidades: Colaboradorunidade[];

  @OneToMany(() => Etapaconsultoriac, (etapaconsultoriac) => etapaconsultoriac.idmentor2)
  etapaconsultoriacs: Etapaconsultoriac[];

  @OneToMany(() => Etapaconsultoriad, (etapaconsultoriad) => etapaconsultoriad.idmentor2)
  etapaconsultoriads: Etapaconsultoriad[];

  @OneToMany(() => Etapapraticab, (etapapraticab) => etapapraticab.idmentor2)
  etapapraticabs: Etapapraticab[];

  @OneToMany(() => Etapapraticac, (etapapraticac) => etapapraticac.idmentor2)
  etapapraticacs: Etapapraticac[];

  @OneToMany(() => Etapapraticad, (etapapraticad) => etapapraticad.idmentor2)
  etapapraticads: Etapapraticad[];

  @OneToMany(() => Etapateorica, (etapateorica) => etapateorica.idmentor2)
  etapateoricas: Etapateorica[];

  @OneToMany(() => Eventocolaborador, (eventocolaborador) => eventocolaborador.idcolaborador2)
  eventocolaboradors: Eventocolaborador[];

  @OneToMany(() => Fatoproducaoapropriada, (fatoproducaoapropriada) => fatoproducaoapropriada.idcolaborador2)
  fatoproducaoapropriadas: Fatoproducaoapropriada[];

  @OneToMany(() => Fatoproducaoapropriadametrologia, (fatoproducaoapropriadametrologia) => fatoproducaoapropriadametrologia.idcolaborador2)
  fatoproducaoapropriadametrologias: Fatoproducaoapropriadametrologia[];

  @OneToMany(() => Grupousuariocolaborador, (grupousuariocolaborador) => grupousuariocolaborador.idcolaborador2)
  grupousuariocolaboradors: Grupousuariocolaborador[];

  @OneToMany(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.idcolaborador2)
  producaoapropriadas: Producaoapropriada[];

  @OneToMany(() => Publicacaocolaborador, (publicacaocolaborador) => publicacaocolaborador.idcolaborador2)
  publicacaocolaboradors: Publicacaocolaborador[];

  @OneToMany(() => Treinamentocolaborador, (treinamentocolaborador) => treinamentocolaborador.idcolaborador2)
  treinamentocolaboradors: Treinamentocolaborador[];

  @OneToMany(() => Usuario, (usuario) => usuario.idcolaborador2)
  usuarios: Usuario[];

  @OneToMany(() => Visitacolaborador, (visitacolaborador) => visitacolaborador.idcolaborador2)
  visitacolaboradors: Visitacolaborador[];
}
