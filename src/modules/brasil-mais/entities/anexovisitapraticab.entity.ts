import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Visitapraticab } from './Visitapraticab';

@Index('anexovisitapraticab_pkey', ['id'], { unique: true })
@Index('ix_anexovisitapraticab_fk_anexovisitapraticab_idvisitapratica', ['idvisitapratica'], {})
@Entity('anexovisitapraticab', { schema: 'public' })
export class Anexovisitapraticab {
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

  @Column('integer', { name: 'idvisitapratica', nullable: true })
  idvisitapratica: number | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @ManyToOne(() => Visitapraticab, (visitapraticab) => visitapraticab.anexovisitapraticabs)
  @JoinColumn([{ name: 'idvisitapratica', referencedColumnName: 'id' }])
  idvisitapratica2: Visitapraticab;
}
