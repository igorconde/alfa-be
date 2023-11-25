import { Clienteabdidigital } from 'import { Cliente } from ';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@modules/cliente/entities/cliente.entity';-abdi-digital.entity';

@Index('contatoabdidigital_pkey', ['id'], { unique: true })
@Index('ix_contatoabdidigital_fk_contatoabdidigital_idclienteabdi', ['idclienteabdi'], {})
@Entity('contatoabdidigital', { schema: 'public' })
export class Contatoabdidigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'email', nullable: true, length: 45 })
  email: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 80 })
  nome: string | null;

  @Column('character varying', { name: 'telefone', nullable: true, length: 45 })
  telefone: string | null;

  @Column('integer', { name: 'idclienteabdi', nullable: true })
  idclienteabdi: number | null;

  @ManyToOne(() => Clienteabdidigital, (clienteabdidigital) => clienteabdidigital.contatoabdidigitals)
  @JoinColumn([{ name: 'idclienteabdi', referencedColumnName: 'id' }])
  idclienteabdi2: Clienteabdidigital;
}
