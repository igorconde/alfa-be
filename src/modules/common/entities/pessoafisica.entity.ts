import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from './Cliente';

@Index('pessoafisica_pkey', ['id'], { unique: true })
@Entity('pessoafisica', { schema: 'public' })
export class Pessoafisica {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'cpf', nullable: true, length: 255 })
  cpf: string | null;

  @Column('character varying', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('character varying', {
    name: 'nomecompleto',
    nullable: true,
    length: 255,
  })
  nomecompleto: string | null;

  @Column('character varying', {
    name: 'telefone',
    nullable: true,
    length: 255,
  })
  telefone: string | null;

  @ManyToOne(() => Cliente, (cliente) => cliente.pessoafisicas)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente: Cliente;
}
