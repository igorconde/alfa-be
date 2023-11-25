import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from './Cliente';

@Index('pessoafisicaestrangeira_pkey', ['id'], { unique: true })
@Entity('pessoafisicaestrangeira', { schema: 'public' })
export class Pessoafisicaestrangeira {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('character varying', {
    name: 'nomecompleto',
    nullable: true,
    length: 255,
  })
  nomecompleto: string | null;

  @Column('character varying', {
    name: 'numeropassaporte',
    nullable: true,
    length: 255,
  })
  numeropassaporte: string | null;

  @Column('character varying', {
    name: 'telefone',
    nullable: true,
    length: 255,
  })
  telefone: string | null;

  @ManyToOne(() => Cliente, (cliente) => cliente.pessoafisicaestrangeiras)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente: Cliente;
}
