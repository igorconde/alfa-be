import { Bairro } from '@modules/administracao/entities/bairro.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Contatoabdidigital } from './contato-abdi-digital.entity';

@Index('clienteabdidigital_pkey', ['id'], { unique: true })
@Index('ix_clienteabdidigital_fk_clienteabdidigital_idbairro', ['idbairro'], {})
@Index('ix_clienteabdidigital_fk_clienteabdidigital_idcliente', ['idcliente'], {})
@Entity('clienteabdidigital', { schema: 'public' })
export class Clienteabdidigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'bairro', nullable: true, length: 255 })
  bairro: string | null;

  @Column('character varying', { name: 'cep', nullable: true, length: 255 })
  cep: string | null;

  @Column('character varying', { name: 'cnae', nullable: true, length: 255 })
  cnae: string | null;

  @Column('character varying', {
    name: 'comoconheceu',
    nullable: true,
    length: 255,
  })
  comoconheceu: string | null;

  @Column('character varying', {
    name: 'complemento',
    nullable: true,
    length: 255,
  })
  complemento: string | null;

  @Column('character varying', { name: 'cpfcnpj', nullable: true, length: 255 })
  cpfcnpj: string | null;

  @Column('character varying', { name: 'eixo', nullable: true, length: 255 })
  eixo: string | null;

  @Column('character varying', { name: 'error', nullable: true, length: 255 })
  error: string | null;

  @Column('character varying', {
    name: 'funcionariosrange',
    nullable: true,
    length: 255,
  })
  funcionariosrange: string | null;

  @Column('boolean', { name: 'isatendimento', nullable: true })
  isatendimento: boolean | null;

  @Column('character varying', {
    name: 'logradouro',
    nullable: true,
    length: 255,
  })
  logradouro: string | null;

  @Column('character varying', { name: 'numero', nullable: true, length: 255 })
  numero: string | null;

  @Column('character varying', {
    name: 'razaosocial',
    nullable: true,
    length: 255,
  })
  razaosocial: string | null;

  @Column('character varying', {
    name: 'receitarange',
    nullable: true,
    length: 255,
  })
  receitarange: string | null;

  @Column('integer', { name: 'regional', nullable: true })
  regional: number | null;

  @Column('integer', { name: 'idbairro', nullable: true })
  idbairro: number | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @ManyToOne(() => Bairro, (bairro) => bairro.clienteabdidigitals)
  @JoinColumn([{ name: 'idbairro', referencedColumnName: 'id' }])
  idbairro2: Bairro;

  @ManyToOne(() => Cliente, (cliente) => cliente.clienteabdidigitals)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @OneToMany(() => Contatoabdidigital, (contatoabdidigital) => contatoabdidigital.idclienteabdi2)
  contatoabdidigitals: Contatoabdidigital[];
}
