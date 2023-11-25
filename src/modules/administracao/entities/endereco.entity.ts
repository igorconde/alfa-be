import { Cliente } from '@modules/cliente/entities/cliente.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Municipio } from './Municipio';
import { Tipoendereco } from './Tipoendereco';

@Index('endereco_pkey', ['id'], { unique: true })
@Index('ienderecofkcliente', ['idcliente'], {})
@Index('ienderecofkmunicipio', ['idmunicipio'], {})
@Index('ienderecofktipoendereco', ['idtipoendereco'], {})
@Index('ienderecofkunidade', ['idunidade'], {})
@Entity('endereco', { schema: 'public' })
export class Endereco {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'bairro', nullable: true, length: 255 })
  bairro: string | null;

  @Column('character varying', { name: 'cep', nullable: true, length: 255 })
  cep: string | null;

  @Column('character varying', {
    name: 'complemento',
    nullable: true,
    length: 255,
  })
  complemento: string | null;

  @Column('character varying', {
    name: 'logradouro',
    nullable: true,
    length: 255,
  })
  logradouro: string | null;

  @Column('character varying', { name: 'numero', nullable: true, length: 255 })
  numero: string | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @Column('integer', { name: 'idmunicipio', nullable: true })
  idmunicipio: number | null;

  @Column('integer', { name: 'idtipoendereco', nullable: true })
  idtipoendereco: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('boolean', { name: 'isprincipal', nullable: true })
  isprincipal: boolean | null;

  @ManyToOne(() => Cliente, (cliente) => cliente.enderecos)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;

  @ManyToOne(() => Municipio, (municipio) => municipio.enderecos)
  @JoinColumn([{ name: 'idmunicipio', referencedColumnName: 'id' }])
  idmunicipio2: Municipio;

  @ManyToOne(() => Tipoendereco, (tipoendereco) => tipoendereco.enderecos)
  @JoinColumn([{ name: 'idtipoendereco', referencedColumnName: 'id' }])
  idtipoendereco2: Tipoendereco;
}
