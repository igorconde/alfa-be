import { Tomcatuserrole } from '@modules/administracao/entities/tomcatuserrole.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Enviofaturamento } from '@modules/common/entities/enviofaturamento.entity';
import { Grupousuario } from '@modules/common/entities/grupousuario.entity';
import { Dashboardusuario } from '@modules/dashboard/entities/dashboardusuario.entity';
import { Producaoapropriada } from '@modules/producao/entities/producaoapropriada.entity';
import { Receitaapropriada } from '@modules/receita/entities/receitaapropriada.entity';
import { Receitafaturamento } from '@modules/receita/entities/receitafaturamento.entity';
import { Deparaloginsgtsi } from '@modules/solucao-integradora/entities/deparaloginsgtsi.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Colaborador } from './colaborador.entity';
import { Perfilusuario } from './perfil-usuario.entity';
import { Sessaousuario } from './sassao-usuario.entity';
import { Usuarioprodutolinha } from './usuario-produto-linha.entity';

@Index('usuariobuscalivre', ['buscalivreusuario'], {})
@Index('usuario_pkey', ['id'], { unique: true })
@Index('iusuariofkcolaborador', ['idcolaborador'], {})
@Index('iusuariofkperfilusuario', ['idperfilusuario'], {})
@Index('iusuariofkunidade', ['idunidade'], {})
@Index('iusuarios1', ['idunidade', 'nome'], {})
@Index('iusuariou1', ['login'], { unique: true })
@Entity('usuario', { schema: 'public' })
export class Usuario {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('boolean', { name: 'isadministrador', nullable: true })
  isadministrador: boolean | null;

  @Column('boolean', { name: 'isativo', nullable: true })
  isativo: boolean | null;

  @Column('character varying', { name: 'login', nullable: true, length: 255 })
  login: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 80 })
  nome: string | null;

  @Column('character varying', { name: 'senha', nullable: true, length: 255 })
  senha: string | null;

  @Column('character varying', { name: 'urlfoto', nullable: true, length: 255 })
  urlfoto: string | null;

  @Column('integer', { name: 'idcolaborador', nullable: true })
  idcolaborador: number | null;

  @Column('integer', { name: 'idperfilusuario', nullable: true })
  idperfilusuario: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

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

  @Column('tsvector', { name: 'buscalivreusuario', nullable: true })
  buscalivreusuario: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('text', { name: 'imagebase64', nullable: true })
  imagebase64: string | null;

  @Column('integer', { name: 'idultimodashboardacessado', nullable: true })
  idultimodashboardacessado: number | null;

  @Column('text', { name: 'filtrodescritivo', nullable: true })
  filtrodescritivo: string | null;

  @Column('character varying', {
    name: 'perfilusosistema',
    nullable: true,
    length: 10,
  })
  perfilusosistema: string | null;

  @Column('boolean', { name: 'isintegracao', default: () => 'false' })
  isintegracao: boolean;

  @OneToMany(() => Cliente, (cliente) => cliente.idusuario)
  clientes: Cliente[];

  @OneToMany(() => Dashboardusuario, (dashboardusuario) => dashboardusuario.idusuario2)
  dashboardusuarios: Dashboardusuario[];

  @OneToMany(() => Deparaloginsgtsi, (deparaloginsgtsi) => deparaloginsgtsi.userIdSgt2)
  deparaloginsgtsis: Deparaloginsgtsi[];

  @OneToMany(() => Enviofaturamento, (enviofaturamento) => enviofaturamento.idusuario2)
  enviofaturamentos: Enviofaturamento[];

  @OneToMany(() => Grupousuario, (grupousuario) => grupousuario.idusuario2)
  grupousuarios: Grupousuario[];

  @OneToMany(() => Producaoapropriada, (producaoapropriada) => producaoapropriada.idusuario2)
  producaoapropriadas: Producaoapropriada[];

  @OneToMany(() => Receitaapropriada, (receitaapropriada) => receitaapropriada.idusuario2)
  receitaapropriadas: Receitaapropriada[];

  @OneToMany(() => Receitafaturamento, (receitafaturamento) => receitafaturamento.idusuario)
  receitafaturamentos: Receitafaturamento[];

  @OneToMany(() => Sessaousuario, (sessaousuario) => sessaousuario.idusuario2)
  sessaousuarios: Sessaousuario[];

  @OneToMany(() => Tomcatuserrole, (tomcatuserrole) => tomcatuserrole.idusuario2)
  tomcatuserroles: Tomcatuserrole[];

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.usuarios)
  @JoinColumn([{ name: 'idcolaborador', referencedColumnName: 'id' }])
  idcolaborador2: Colaborador;

  @ManyToOne(() => Perfilusuario, (perfilusuario) => perfilusuario.usuarios)
  @JoinColumn([{ name: 'idperfilusuario', referencedColumnName: 'id' }])
  idperfilusuario2: Perfilusuario;

  @ManyToOne(() => Unidade, (unidade) => unidade.usuarios)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;

  @OneToMany(() => Usuarioprodutolinha, (usuarioprodutolinha) => usuarioprodutolinha.idusuario2)
  usuarioprodutolinhas: Usuarioprodutolinha[];
}
