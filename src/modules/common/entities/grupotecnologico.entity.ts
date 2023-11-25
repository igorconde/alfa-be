import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grupotecnologicounidade } from './Grupotecnologicounidade';

@Index('buscalivregrupotecnologico', ['buscalivregrupotecnologico'], {})
@Index('grupotecnologico_pkey', ['id'], { unique: true })
@Entity('grupotecnologico', { schema: 'public' })
export class Grupotecnologico {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 45 })
  nome: string | null;

  @Column('tsvector', { name: 'buscalivregrupotecnologico', nullable: true })
  buscalivregrupotecnologico: string | null;

  @Column('integer', { name: 'unidade', nullable: true })
  unidade: number | null;

  @OneToMany(() => Grupotecnologicounidade, (grupotecnologicounidade) => grupotecnologicounidade.idgrupotecnologico2)
  grupotecnologicounidades: Grupotecnologicounidade[];
}
