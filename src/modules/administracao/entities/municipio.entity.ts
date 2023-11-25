import { Bairro } from '@modules/administracao/entities/bairro.entity';
import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Unidadefederativa } from '@modules/administracao/entities/unidadefederativa.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Endereco } from './endereco.entity';

@Index('municipiobuscalivre', ['buscalivremunicipio'], {})
@Index('imunicipio01', ['codigoibge'], {})
@Index('imunicipiou1', ['codigoibge'], { unique: true })
@Index('imunicipios1', ['descricao'], {})
@Index('municipio_pkey', ['id'], { unique: true })
@Index('imunicipiofkunidadefederativa', ['idunidadefederativa'], {})
@Entity('municipio', { schema: 'public' })
export class Municipio {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('integer', { name: 'idunidadefederativa', nullable: true })
  idunidadefederativa: number | null;

  @Column('character varying', {
    name: 'codigoibge',
    nullable: true,
    length: 255,
  })
  codigoibge: string | null;

  @Column('tsvector', { name: 'buscalivremunicipio', nullable: true })
  buscalivremunicipio: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Bairro, (bairro) => bairro.idmunicipio2)
  bairros: Bairro[];

  @OneToMany(() => Endereco, (endereco) => endereco.idmunicipio2)
  enderecos: Endereco[];

  @ManyToOne(() => Unidadefederativa, (unidadefederativa) => unidadefederativa.municipios)
  @JoinColumn([{ name: 'idunidadefederativa', referencedColumnName: 'id' }])
  idunidadefederativa2: Unidadefederativa;

  @OneToMany(() => Unidade, (unidade) => unidade.idmunicipio2)
  unidades: Unidade[];
}
