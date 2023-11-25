import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bairro } from './Bairro';
import { Clusterclienteabdi } from './Clusterclienteabdi';
import { Contatoabdi } from './Contatoabdi';
import { Cliente } from './cliente.entity';

@Index('clienteabdi_pkey', ['id'], { unique: true })
@Index('ix_clienteabdi_fk_clienteabdi_idbairro', ['idbairro'], {})
@Index('ix_clienteabdi_fk_clienteabdi_idcliente', ['idcliente'], {})
@Entity('clienteabdi', { schema: 'public' })
export class Clienteabdi {
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

  @ManyToOne(() => Bairro, (bairro) => bairro.clienteabdis)
  @JoinColumn([{ name: 'idbairro', referencedColumnName: 'id' }])
  idbairro2: Bairro;

  @ManyToOne(() => Cliente, (cliente) => cliente.clienteabdis)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @OneToMany(() => Clusterclienteabdi, (clusterclienteabdi) => clusterclienteabdi.idclienteabdi2)
  clusterclienteabdis: Clusterclienteabdi[];

  @OneToMany(() => Contatoabdi, (contatoabdi) => contatoabdi.idclienteabdi2)
  contatoabdis: Contatoabdi[];
}
