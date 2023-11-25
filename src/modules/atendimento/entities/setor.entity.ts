import { Itemmetaregional } from '@modules/brasil-mais/entities/itemmetaregional.entity';
import { Itemmetaregionalie } from '@modules/brasil-mais/entities/itemmetaregionalie.entity';
import { Secao } from '@modules/cliente/entities/secao.entity';
import { Apl } from '@modules/common/entities/apl.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Fatofontepagadoraatendimentobp } from './fatofontepagadoraatendimentobp.entity';
import { Fatofontepagadoraatendimentoie } from './fatofontepagadoraatendimentoie.entity';
import { Fatofontepagadoraatendimentoipea } from './fatofontepagadoraatendimentoipea.entity';
import { Fatosolicitacaoatendimentobp } from './fatosolicitacaoatendimentobp.entity';
import { Fatosolicitacaoatendimentoie } from './fatosolicitacaoatendimentoie.entity';
import { Fatosolicitacaoatendimentoipea } from './fatosolicitacaoatendimentoipea.entity';
import { Fatostatusatendimentobp } from './fatostatusatendimentobp.entity';
import { Fatostatusatendimentohistoricobp } from './fatostatusatendimentohistoricobp.entity';
import { Fatostatusatendimentohistoricoie } from './fatostatusatendimentohistoricoie.entity';
import { Fatostatusatendimentohistoricoipea } from './fatostatusatendimentohistoricoipea.entity';
import { Fatostatusatendimentoie } from './fatostatusatendimentoie.entity';
import { Fatostatusatendimentoipea } from './fatostatusatendimentoipea.entity';

@Index('setor_pkey', ['id'], { unique: true })
@Entity('setor', { schema: 'public' })
export class Setor {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', { name: 'ordem', nullable: true, length: 2 })
  ordem: string | null;

  @Column('boolean', {
    name: 'produtoie',
    nullable: true,
    default: () => 'false',
  })
  produtoie: boolean | null;

  @Column('boolean', {
    name: 'produtobp',
    nullable: true,
    default: () => 'true',
  })
  produtobp: boolean | null;

  @Column('integer', { name: 'idproduto', nullable: true })
  idproduto: number | null;

  @Column('character varying', { name: 'divisao', nullable: true })
  divisao: string | null;

  @OneToMany(() => Apl, (apl) => apl.idsetor2)
  apls: Apl[];

  @OneToMany(() => Fatofontepagadoraatendimentobp, (fatofontepagadoraatendimentobp) => fatofontepagadoraatendimentobp.idsetor2)
  fatofontepagadoraatendimentobps: Fatofontepagadoraatendimentobp[];

  @OneToMany(() => Fatofontepagadoraatendimentoie, (fatofontepagadoraatendimentoie) => fatofontepagadoraatendimentoie.idsetor)
  fatofontepagadoraatendimentoies: Fatofontepagadoraatendimentoie[];

  @OneToMany(() => Fatofontepagadoraatendimentoipea, (fatofontepagadoraatendimentoipea) => fatofontepagadoraatendimentoipea.idsetor2)
  fatofontepagadoraatendimentoipeas: Fatofontepagadoraatendimentoipea[];

  @OneToMany(() => Fatosolicitacaoatendimentobp, (fatosolicitacaoatendimentobp) => fatosolicitacaoatendimentobp.idsetor2)
  fatosolicitacaoatendimentobps: Fatosolicitacaoatendimentobp[];

  @OneToMany(() => Fatosolicitacaoatendimentoie, (fatosolicitacaoatendimentoie) => fatosolicitacaoatendimentoie.idsetor)
  fatosolicitacaoatendimentoies: Fatosolicitacaoatendimentoie[];

  @OneToMany(() => Fatosolicitacaoatendimentoipea, (fatosolicitacaoatendimentoipea) => fatosolicitacaoatendimentoipea.idsetor2)
  fatosolicitacaoatendimentoipeas: Fatosolicitacaoatendimentoipea[];

  @OneToMany(() => Fatostatusatendimentobp, (fatostatusatendimentobp) => fatostatusatendimentobp.idsetor2)
  fatostatusatendimentobps: Fatostatusatendimentobp[];

  @OneToMany(() => Fatostatusatendimentohistoricobp, (fatostatusatendimentohistoricobp) => fatostatusatendimentohistoricobp.idsetor2)
  fatostatusatendimentohistoricobps: Fatostatusatendimentohistoricobp[];

  @OneToMany(() => Fatostatusatendimentohistoricoie, (fatostatusatendimentohistoricoie) => fatostatusatendimentohistoricoie.idsetor)
  fatostatusatendimentohistoricoies: Fatostatusatendimentohistoricoie[];

  @OneToMany(() => Fatostatusatendimentohistoricoipea, (fatostatusatendimentohistoricoipea) => fatostatusatendimentohistoricoipea.idsetor2)
  fatostatusatendimentohistoricoipeas: Fatostatusatendimentohistoricoipea[];

  @OneToMany(() => Fatostatusatendimentoie, (fatostatusatendimentoie) => fatostatusatendimentoie.idsetor)
  fatostatusatendimentoies: Fatostatusatendimentoie[];

  @OneToMany(() => Fatostatusatendimentoipea, (fatostatusatendimentoipea) => fatostatusatendimentoipea.idsetor2)
  fatostatusatendimentoipeas: Fatostatusatendimentoipea[];

  @OneToMany(() => Itemmetaregional, (itemmetaregional) => itemmetaregional.idsetor2)
  itemmetaregionals: Itemmetaregional[];

  @OneToMany(() => Itemmetaregionalie, (itemmetaregionalie) => itemmetaregionalie.idsetor)
  itemmetaregionalies: Itemmetaregionalie[];

  @ManyToOne(() => Secao, (secao) => secao.setors)
  @JoinColumn([{ name: 'idsecao', referencedColumnName: 'id' }])
  idsecao: Secao;
}
