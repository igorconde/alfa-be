import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tipounidade } from './Tipounidade';
import { Telatemp } from './telatemp.entity';

@Index('grupotelatemp_pkey', ['id'], { unique: true })
@Index('ix_grupotelatemp_fk_grupotelatemp_idtipounidade', ['idtipounidade'], {})
@Entity('grupotelatemp', { schema: 'public' })
export class Grupotelatemp {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'icone', nullable: true, length: 64 })
  icone: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 128 })
  nome: string | null;

  @Column('integer', { name: 'ordem', nullable: true })
  ordem: number | null;

  @Column('integer', { name: 'idtipounidade', nullable: true })
  idtipounidade: number | null;

  @ManyToOne(() => Tipounidade, (tipounidade) => tipounidade.grupotelatemps)
  @JoinColumn([{ name: 'idtipounidade', referencedColumnName: 'id' }])
  idtipounidade2: Tipounidade;

  @OneToMany(() => Telatemp, (telatemp) => telatemp.idgrupotela2)
  telatemps: Telatemp[];
}
