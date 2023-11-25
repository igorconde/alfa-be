import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Visitapraticad } from './visitapraticad.entity';

@Index('anexovisitapraticad_pkey', ['id'], { unique: true })
@Index('ix_anexovisitapraticad_fk_anexovisitapraticad_idvisitapratica', ['idvisitapratica'], {})
@Entity('anexovisitapraticad', { schema: 'public' })
export class Anexovisitapraticad {
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

  @ManyToOne(() => Visitapraticad, (visitapraticad) => visitapraticad.anexovisitapraticads)
  @JoinColumn([{ name: 'idvisitapratica', referencedColumnName: 'id' }])
  idvisitapratica2: Visitapraticad;
}
