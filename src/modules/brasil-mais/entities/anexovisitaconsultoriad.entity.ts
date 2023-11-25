import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Visitaconsultoriad } from './Visitaconsultoriad';

@Index('anexovisitaconsultoriad_pkey', ['id'], { unique: true })
@Index('nxvisitaconsultoriadfknexovisitaconsultoriadidvisitaconsultoria', ['idvisitaconsultoria'], {})
@Entity('anexovisitaconsultoriad', { schema: 'public' })
export class Anexovisitaconsultoriad {
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

  @Column('integer', { name: 'idvisitaconsultoria', nullable: true })
  idvisitaconsultoria: number | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @ManyToOne(() => Visitaconsultoriad, (visitaconsultoriad) => visitaconsultoriad.anexovisitaconsultoriads)
  @JoinColumn([{ name: 'idvisitaconsultoria', referencedColumnName: 'id' }])
  idvisitaconsultoria2: Visitaconsultoriad;
}