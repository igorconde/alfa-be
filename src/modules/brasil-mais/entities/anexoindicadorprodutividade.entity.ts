import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimento } from './Atendimento';

@Index('anexoindicadorprodutividade_pkey', ['id'], { unique: true })
@Index('nxndicadorprodutividadefknxoindicadorprodutividadeidatendimento', ['idatendimento'], {})
@Entity('anexoindicadorprodutividade', { schema: 'public' })
export class Anexoindicadorprodutividade {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

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

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.anexoindicadorprodutividades)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;
}
