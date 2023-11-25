import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Agencianacional } from './agencia-nacional.entity';
import { Cliente } from './cliente.entity';

@Index('agenciareguladora_pkey', ['id'], { unique: true })
@Index('ix_agenciareguladora_fk_agenciareguladora_idagencianacional', ['idagencianacional'], {})
@Index('ix_agenciareguladora_fk_agenciareguladora_idcliente', ['idcliente'], {})
@Entity('agenciareguladora', { schema: 'public' })
export class Agenciareguladora {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idagencianacional', nullable: true })
  idagencianacional: number | null;

  @Column('integer', { name: 'idcliente', nullable: true })
  idcliente: number | null;

  @ManyToOne(() => Agencianacional, (agencianacional) => agencianacional.agenciareguladoras)
  @JoinColumn([{ name: 'idagencianacional', referencedColumnName: 'id' }])
  idagencianacional2: Agencianacional;

  @ManyToOne(() => Cliente, (cliente) => cliente.agenciareguladoras)
  @JoinColumn([{ name: 'idcliente', referencedColumnName: 'id' }])
  idcliente2: Cliente;
}
