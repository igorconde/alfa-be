import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Estadopresenteb } from './Estadopresenteb';

@Index('clienteestadopresente_pkey', ['id'], { unique: true })
@Index('clienteestadopresente_fk_clienteestadopresente_idestadopresente', ['idestadopresente'], {})
@Entity('clienteestadopresente', { schema: 'public' })
export class Clienteestadopresente {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('integer', { name: 'idestadopresente', nullable: true })
  idestadopresente: number | null;

  @ManyToOne(() => Estadopresenteb, (estadopresenteb) => estadopresenteb.clienteestadopresentes)
  @JoinColumn([{ name: 'idestadopresente', referencedColumnName: 'id' }])
  idestadopresente2: Estadopresenteb;
}
