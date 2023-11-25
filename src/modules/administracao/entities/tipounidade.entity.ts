import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Configuracaograficodashboard } from './Configuracaograficodashboard';
import { Grupotela } from './Grupotela';
import { Grupotelatemp } from './Grupotelatemp';
import { Parametro } from './Parametro';

@Index('tipounidade_pkey', ['id'], { unique: true })
@Entity('tipounidade', { schema: 'public' })
export class Tipounidade {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', { name: 'sigla', nullable: true, length: 255 })
  sigla: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Configuracaograficodashboard, (configuracaograficodashboard) => configuracaograficodashboard.idtipounidade)
  configuracaograficodashboards: Configuracaograficodashboard[];

  @OneToMany(() => Grupotela, (grupotela) => grupotela.idtipounidade2)
  grupotelas: Grupotela[];

  @OneToMany(() => Grupotelatemp, (grupotelatemp) => grupotelatemp.idtipounidade2)
  grupotelatemps: Grupotelatemp[];

  @OneToMany(() => Parametro, (parametro) => parametro.idtipounidade2)
  parametros: Parametro[];

  @OneToMany(() => Unidade, (unidade) => unidade.idtipounidade2)
  unidades: Unidade[];
}
