import { Cliente } from 'import { Cliente } from ';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@modules/cliente/entities/cliente.entity';.entity';

@Index('cnaesecundariocliente_pkey', ['id'], { unique: true })
@Index('ix_cnaesecundariocliente_fk_cnaesecundariocliente_idcliente', ['idcliente'], {})
@Entity('cnaesecundariocliente', { schema: 'public' })
export class Cnaesecundariocliente {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'cnae', nullable: true, length: 50 })
  cnae: string | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @ManyToOne(() => Cliente, (cliente) => cliente.cnaesecundarioclientes)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;
}
