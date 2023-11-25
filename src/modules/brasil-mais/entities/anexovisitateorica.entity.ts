import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Visitateorica } from './Visitateorica';

@Index('anexovisitateorica_pkey', ['id'], { unique: true })
@Index('ix_anexovisitateorica_fk_anexovisitateorica_idvisitateorica', ['idvisitateorica'], {})
@Entity('anexovisitateorica', { schema: 'public' })
export class Anexovisitateorica {
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

  @Column('integer', { name: 'idvisitateorica', nullable: true })
  idvisitateorica: number | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @ManyToOne(() => Visitateorica, (visitateorica) => visitateorica.anexovisitateoricas)
  @JoinColumn([{ name: 'idvisitateorica', referencedColumnName: 'id' }])
  idvisitateorica2: Visitateorica;
}
