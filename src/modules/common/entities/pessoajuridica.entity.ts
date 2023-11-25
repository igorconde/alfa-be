import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('pessoajuridica_pkey', ['id'], { unique: true })
@Entity('pessoajuridica', { schema: 'public' })
export class Pessoajuridica {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'cnae', nullable: true, length: 255 })
  cnae: string | null;

  @Column('character varying', { name: 'cnpj', nullable: true, length: 255 })
  cnpj: string | null;

  @Column('character varying', {
    name: 'enderecocobranca',
    nullable: true,
    length: 255,
  })
  enderecocobranca: string | null;

  @Column('character varying', {
    name: 'enderecofaturamento',
    nullable: true,
    length: 255,
  })
  enderecofaturamento: string | null;

  @Column('character varying', {
    name: 'inscricaoestadual',
    nullable: true,
    length: 255,
  })
  inscricaoestadual: string | null;

  @Column('character varying', {
    name: 'nomefantasia',
    nullable: true,
    length: 255,
  })
  nomefantasia: string | null;

  @Column('character varying', {
    name: 'numerodefuncionarios',
    nullable: true,
    length: 255,
  })
  numerodefuncionarios: string | null;

  @Column('character varying', {
    name: 'razaosocial',
    nullable: true,
    length: 255,
  })
  razaosocial: string | null;

  @ManyToOne(() => Cliente, (cliente) => cliente.pessoajuridicas)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente: Cliente;
}
