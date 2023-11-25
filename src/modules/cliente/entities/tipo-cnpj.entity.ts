import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from './cliente.entity';

@Index('tipocnpj_pkey', ['id'], { unique: true })
@Entity('tipocnpj', { schema: 'public' })
export class Tipocnpj {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @OneToMany(() => Cliente, (cliente) => cliente.idtipocnpj)
  clientes: Cliente[];
}
