import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Estadopresenteb } from './estadopresenteb.entity';

@Index('anexoestadopresente_pkey', ['id'], { unique: true })
@Index('ix_anexoestadopresente_fk_anexoestadopresente_idestadopresente', ['idestadopresente'], {})
@Entity('anexoestadopresente', { schema: 'public' })
export class Anexoestadopresente {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', {
    name: 'nomearquivo',
    nullable: true,
    length: 255,
  })
  nomearquivo: string | null;

  @Column('bigint', { name: 'tamanho', nullable: true })
  tamanho: string | null;

  @Column('character varying', { name: 'tipo', nullable: true, length: 255 })
  tipo: string | null;

  @Column('character varying', { name: 'url', nullable: true, length: 255 })
  url: string | null;

  @Column('integer', { name: 'idestadopresente', nullable: true })
  idestadopresente: number | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @ManyToOne(() => Estadopresenteb, (estadopresenteb) => estadopresenteb.anexoestadopresentes)
  @JoinColumn([{ name: 'idestadopresente', referencedColumnName: 'id' }])
  idestadopresente2: Estadopresenteb;
}
