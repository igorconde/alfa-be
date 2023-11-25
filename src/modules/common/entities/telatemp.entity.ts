import { Grupotelatemp } from '@modules/administracao/entities/grupotelatemp.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Telapermitidatemp } from './telapermitidatemp.entity';

@Index('telatempbuscalivre', ['buscalivretela'], {})
@Index('telatemp_pkey', ['id'], { unique: true })
@Index('ix_telatemp_fk_telatemp_idgrupotela', ['idgrupotela'], {})
@Entity('telatemp', { schema: 'public' })
export class Telatemp {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'comando', nullable: true, length: 128 })
  comando: string | null;

  @Column('character varying', { name: 'titulo', nullable: true, length: 64 })
  titulo: string | null;

  @Column('integer', { name: 'idgrupotela', nullable: true })
  idgrupotela: number | null;

  @Column('tsvector', { name: 'buscalivretela', nullable: true })
  buscalivretela: string | null;

  @OneToMany(() => Telapermitidatemp, (telapermitidatemp) => telapermitidatemp.idtela2)
  telapermitidatemps: Telapermitidatemp[];

  @ManyToOne(() => Grupotelatemp, (grupotelatemp) => grupotelatemp.telatemps)
  @JoinColumn([{ name: 'idgrupotela', referencedColumnName: 'id' }])
  idgrupotela2: Grupotelatemp;
}
