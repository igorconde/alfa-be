import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Visitapraticac } from './Visitapraticac';

@Index('anexovisitapraticac_pkey', ['id'], { unique: true })
@Index('ix_anexovisitapraticac_fk_anexovisitapraticac_idvisitapratica', ['idvisitapratica'], {})
@Entity('anexovisitapraticac', { schema: 'public' })
export class Anexovisitapraticac {
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

  @ManyToOne(() => Visitapraticac, (visitapraticac) => visitapraticac.anexovisitapraticacs)
  @JoinColumn([{ name: 'idvisitapratica', referencedColumnName: 'id' }])
  idvisitapratica2: Visitapraticac;
}
