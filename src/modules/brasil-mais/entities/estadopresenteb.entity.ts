import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoestadopresente } from './Anexoestadopresente';
import { Clienteestadopresente } from './Clienteestadopresente';
import { Atendimentopraticab } from './Atendimentopraticab';

@Index('estadopresenteb_pkey', ['id'], { unique: true })
@Index('ix_estadopresenteb_fk_estadopresenteb_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('estadopresenteb', { schema: 'public' })
export class Estadopresenteb {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'atuacaoempresa',
    nullable: true,
    length: 255,
  })
  atuacaoempresa: string | null;

  @Column('character varying', {
    name: 'familiaprodutoprincipal',
    nullable: true,
    length: 255,
  })
  familiaprodutoprincipal: string | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @OneToMany(() => Anexoestadopresente, (anexoestadopresente) => anexoestadopresente.idestadopresente2)
  anexoestadopresentes: Anexoestadopresente[];

  @OneToMany(() => Clienteestadopresente, (clienteestadopresente) => clienteestadopresente.idestadopresente2)
  clienteestadopresentes: Clienteestadopresente[];

  @ManyToOne(() => Atendimentopraticab, (atendimentopraticab) => atendimentopraticab.estadopresentebs)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticab;
}
