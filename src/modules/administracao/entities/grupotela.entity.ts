import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tipounidade } from './Tipounidade';
import { Tela } from './Tela';

@Index('grupotela_pkey', ['id'], { unique: true })
@Index('igrupotelafktipounidade', ['idtipounidade'], {})
@Entity('grupotela', { schema: 'public' })
export class Grupotela {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'icone', nullable: true, length: 255 })
  icone: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('integer', { name: 'ordem', nullable: true })
  ordem: number | null;

  @Column('integer', { name: 'idtipounidade', nullable: true })
  idtipounidade: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Tipounidade, (tipounidade) => tipounidade.grupotelas)
  @JoinColumn([{ name: 'idtipounidade', referencedColumnName: 'id' }])
  idtipounidade2: Tipounidade;

  @OneToMany(() => Tela, (tela) => tela.idgrupotela2)
  telas: Tela[];
}
