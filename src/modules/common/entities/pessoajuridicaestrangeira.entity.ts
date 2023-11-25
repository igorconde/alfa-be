import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from './Cliente';

@Index('pessoajuridicaestrangeira_pkey', ['id'], { unique: true })
@Entity('pessoajuridicaestrangeira', { schema: 'public' })
export class Pessoajuridicaestrangeira {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'ducumentoempresaestrangeira',
    nullable: true,
    length: 255,
  })
  ducumentoempresaestrangeira: string | null;

  @Column('character varying', {
    name: 'endereco',
    nullable: true,
    length: 255,
  })
  endereco: string | null;

  @Column('character varying', {
    name: 'equivalenterazaosocial',
    nullable: true,
    length: 255,
  })
  equivalenterazaosocial: string | null;

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

  @ManyToOne(() => Cliente, (cliente) => cliente.pessoajuridicaestrangeiras)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente: Cliente;
}
