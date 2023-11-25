import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Encontroconsultoriabdigital } from './Encontroconsultoriabdigital';

@Index('anexoencontroconsultoriabdigital_pkey', ['id'], { unique: true })
@Index('nxncntrcnsltrbdgtalfknxncntrcnsltrbdigitalidencontroconsultoria', ['idencontroconsultoria'], {})
@Entity('anexoencontroconsultoriabdigital', { schema: 'public' })
export class Anexoencontroconsultoriabdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

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

  @Column('integer', { name: 'idencontroconsultoria', nullable: true })
  idencontroconsultoria: number | null;

  @ManyToOne(() => Encontroconsultoriabdigital, (encontroconsultoriabdigital) => encontroconsultoriabdigital.anexoencontroconsultoriabdigitals)
  @JoinColumn([{ name: 'idencontroconsultoria', referencedColumnName: 'id' }])
  idencontroconsultoria2: Encontroconsultoriabdigital;
}
