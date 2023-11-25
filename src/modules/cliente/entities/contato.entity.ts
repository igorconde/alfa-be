import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from './cliente.entity';

@Index('contato_pkey', ['id'], { unique: true })
@Index('icontatofkcliente', ['idcliente'], {})
@Index('icontatofkunidade', ['idunidade'], {})
@Entity('contato', { schema: 'public' })
export class Contato {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('character varying', { name: 'setor', nullable: true, length: 255 })
  setor: string | null;

  @Column('character varying', {
    name: 'telefone',
    nullable: true,
    length: 255,
  })
  telefone: string | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Cliente, (cliente) => cliente.contatoes)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;
}
