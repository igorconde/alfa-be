import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Processoprodutivoc } from './processoprodutivoc.entity';

@Index('anexoprocessoprodutivoc_pkey', ['id'], { unique: true })
@Index('nxprocessoprodutivocfknexoprocessoprodutivocidprocessoprodutivo', ['idprocessoprodutivo'], {})
@Entity('anexoprocessoprodutivoc', { schema: 'public' })
export class Anexoprocessoprodutivoc {
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

  @Column('integer', { name: 'idprocessoprodutivo', nullable: true })
  idprocessoprodutivo: number | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @ManyToOne(() => Processoprodutivoc, (processoprodutivoc) => processoprodutivoc.anexoprocessoprodutivocs)
  @JoinColumn([{ name: 'idprocessoprodutivo', referencedColumnName: 'id' }])
  idprocessoprodutivo2: Processoprodutivoc;
}
