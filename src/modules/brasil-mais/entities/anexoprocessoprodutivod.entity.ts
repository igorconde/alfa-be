import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Processoprodutivod } from './Processoprodutivod';

@Index('anexoprocessoprodutivod_pkey', ['id'], { unique: true })
@Index('nxprocessoprodutivodfknexoprocessoprodutivodidprocessoprodutivo', ['idprocessoprodutivo'], {})
@Entity('anexoprocessoprodutivod', { schema: 'public' })
export class Anexoprocessoprodutivod {
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

  @ManyToOne(() => Processoprodutivod, (processoprodutivod) => processoprodutivod.anexoprocessoprodutivods)
  @JoinColumn([{ name: 'idprocessoprodutivo', referencedColumnName: 'id' }])
  idprocessoprodutivo2: Processoprodutivod;
}
