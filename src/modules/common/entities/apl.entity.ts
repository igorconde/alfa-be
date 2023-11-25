import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Fatofontepagadoraatendimentobp } from './Fatofontepagadoraatendimentobp';
import { Fatofontepagadoraatendimentoie } from './Fatofontepagadoraatendimentoie';
import { Fatofontepagadoraatendimentoipea } from './Fatofontepagadoraatendimentoipea';
import { Fatosolicitacaoatendimentobp } from './Fatosolicitacaoatendimentobp';
import { Fatosolicitacaoatendimentoie } from './Fatosolicitacaoatendimentoie';
import { Fatosolicitacaoatendimentoipea } from './Fatosolicitacaoatendimentoipea';
import { Fatostatusatendimentobp } from './Fatostatusatendimentobp';
import { Fatostatusatendimentohistoricobp } from './Fatostatusatendimentohistoricobp';
import { Fatostatusatendimentohistoricoie } from './Fatostatusatendimentohistoricoie';
import { Fatostatusatendimentohistoricoipea } from './Fatostatusatendimentohistoricoipea';
import { Fatostatusatendimentoie } from './Fatostatusatendimentoie';
import { Fatostatusatendimentoipea } from './Fatostatusatendimentoipea';
import { Setor } from './Setor';
import { Unidadefederativa } from './Unidadefederativa';

@Index('apl_pkey', ['id'], { unique: true })
@Index('ix_apl_fk_apl_idsetor', ['idsetor'], {})
@Index('ix_apl_fk_apl_idunidadefederativa', ['idunidadefederativa'], {})
@Entity('apl', { schema: 'public' })
export class Apl {
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
    length: 80,
  })
  descricao: string | null;

  @Column('integer', { name: 'idsetor', nullable: true })
  idsetor: number | null;

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @ManyToOne(() => Setor, (setor) => setor.apls)
  @JoinColumn([{ name: 'idsetor', referencedColumnName: 'id' }])
  idsetor2: Setor;

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.apls)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @OneToMany(() => Atendimento, (atendimento) => atendimento.idapl)
  atendimentos: Atendimento[];

  @OneToMany(() => Fatofontepagadoraatendimentobp, (fatofontepagadoraatendimentobp) => fatofontepagadoraatendimentobp.idapl2)
  fatofontepagadoraatendimentobps: Fatofontepagadoraatendimentobp[];

  @OneToMany(() => Fatofontepagadoraatendimentoie, (fatofontepagadoraatendimentoie) => fatofontepagadoraatendimentoie.idapl)
  fatofontepagadoraatendimentoies: Fatofontepagadoraatendimentoie[];

  @OneToMany(() => Fatofontepagadoraatendimentoipea, (fatofontepagadoraatendimentoipea) => fatofontepagadoraatendimentoipea.idapl2)
  fatofontepagadoraatendimentoipeas: Fatofontepagadoraatendimentoipea[];

  @OneToMany(() => Fatosolicitacaoatendimentobp, (fatosolicitacaoatendimentobp) => fatosolicitacaoatendimentobp.idapl2)
  fatosolicitacaoatendimentobps: Fatosolicitacaoatendimentobp[];

  @OneToMany(() => Fatosolicitacaoatendimentoie, (fatosolicitacaoatendimentoie) => fatosolicitacaoatendimentoie.idapl)
  fatosolicitacaoatendimentoies: Fatosolicitacaoatendimentoie[];

  @OneToMany(() => Fatosolicitacaoatendimentoipea, (fatosolicitacaoatendimentoipea) => fatosolicitacaoatendimentoipea.idapl2)
  fatosolicitacaoatendimentoipeas: Fatosolicitacaoatendimentoipea[];

  @OneToMany(() => Fatostatusatendimentobp, (fatostatusatendimentobp) => fatostatusatendimentobp.idapl2)
  fatostatusatendimentobps: Fatostatusatendimentobp[];

  @OneToMany(() => Fatostatusatendimentohistoricobp, (fatostatusatendimentohistoricobp) => fatostatusatendimentohistoricobp.idapl2)
  fatostatusatendimentohistoricobps: Fatostatusatendimentohistoricobp[];

  @OneToMany(() => Fatostatusatendimentohistoricoie, (fatostatusatendimentohistoricoie) => fatostatusatendimentohistoricoie.idapl)
  fatostatusatendimentohistoricoies: Fatostatusatendimentohistoricoie[];

  @OneToMany(() => Fatostatusatendimentohistoricoipea, (fatostatusatendimentohistoricoipea) => fatostatusatendimentohistoricoipea.idapl2)
  fatostatusatendimentohistoricoipeas: Fatostatusatendimentohistoricoipea[];

  @OneToMany(() => Fatostatusatendimentoie, (fatostatusatendimentoie) => fatostatusatendimentoie.idapl)
  fatostatusatendimentoies: Fatostatusatendimentoie[];

  @OneToMany(() => Fatostatusatendimentoipea, (fatostatusatendimentoipea) => fatostatusatendimentoipea.idapl2)
  fatostatusatendimentoipeas: Fatostatusatendimentoipea[];
}
