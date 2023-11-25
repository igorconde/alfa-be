import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grupounidade } from './Grupounidade';
import { Configuracaobrasilmais } from './configuracaobrasilmais.entity';

@Index('grupobrasilmais_pkey', ['id'], { unique: true })
@Index('ix_grupobrasilmais_fk_grupobrasilmais_idconfiguracaobrasilmais', ['idconfiguracaobrasilmais'], {})
@Entity('grupobrasilmais', { schema: 'public' })
export class Grupobrasilmais {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 100 })
  nome: string | null;

  @Column('integer', { name: 'regional', nullable: true })
  regional: number | null;

  @Column('integer', { name: 'idconfiguracaobrasilmais', nullable: true })
  idconfiguracaobrasilmais: number | null;

  @ManyToOne(() => Configuracaobrasilmais, (configuracaobrasilmais) => configuracaobrasilmais.grupobrasilmais)
  @JoinColumn([{ name: 'idconfiguracaobrasilmais', referencedColumnName: 'id' }])
  idconfiguracaobrasilmais2: Configuracaobrasilmais;

  @OneToMany(() => Grupounidade, (grupounidade) => grupounidade.idgrupobrasilmais2)
  grupounidades: Grupounidade[];
}
