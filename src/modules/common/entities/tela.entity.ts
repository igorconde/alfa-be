import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grupotela } from './Grupotela';
import { Telapermitida } from './Telapermitida';

@Index('telabuscalivre', ['buscalivretela'], {})
@Index('tela_pkey', ['id'], { unique: true })
@Index('itelafkgrupotela', ['idgrupotela'], {})
@Entity('tela', { schema: 'public' })
export class Tela {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'comando', nullable: true, length: 255 })
  comando: string | null;

  @Column('character varying', { name: 'titulo', nullable: true, length: 255 })
  titulo: string | null;

  @Column('integer', { name: 'idgrupotela', nullable: true })
  idgrupotela: number | null;

  @Column('tsvector', { name: 'buscalivretela', nullable: true })
  buscalivretela: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Grupotela, (grupotela) => grupotela.telas)
  @JoinColumn([{ name: 'idgrupotela', referencedColumnName: 'id' }])
  idgrupotela2: Grupotela;

  @OneToMany(() => Telapermitida, (telapermitida) => telapermitida.idtela2)
  telapermitidas: Telapermitida[];
}
