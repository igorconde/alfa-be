import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Artefatosinstalacaopraticabdigital } from './artefatosinstalacaopraticabdigital.entity';
import { Coletordigital } from './coletordigital.entity';
import { Instaladordigital } from './instaladordigital.entity';

@Index('instalacaodigital_pkey', ['id'], { unique: true })
@Index('ix_instalacaodigital_fk_instalacaodigital_idartefatosinstalacao', ['idartefatosinstalacao'], {})
@Entity('instalacaodigital', { schema: 'public' })
export class Instalacaodigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'datainstalacao',
    nullable: true,
  })
  datainstalacao: Date | null;

  @Column('integer', { name: 'horas', nullable: true })
  horas: number | null;

  @Column('integer', { name: 'numerocoletores', nullable: true })
  numerocoletores: number | null;

  @Column('integer', { name: 'numerosensores', nullable: true })
  numerosensores: number | null;

  @Column('character varying', {
    name: 'observacoesinfraestrutura',
    nullable: true,
    length: 255,
  })
  observacoesinfraestrutura: string | null;

  @Column('integer', { name: 'pontoscoleta', nullable: true })
  pontoscoleta: number | null;

  @Column('double precision', {
    name: 'valortotal',
    nullable: true,
    precision: 53,
  })
  valortotal: number | null;

  @Column('integer', { name: 'idartefatosinstalacao', nullable: true })
  idartefatosinstalacao: number | null;

  @OneToMany(() => Coletordigital, (coletordigital) => coletordigital.idinstalacao2)
  coletordigitals: Coletordigital[];

  @ManyToOne(() => Artefatosinstalacaopraticabdigital, (artefatosinstalacaopraticabdigital) => artefatosinstalacaopraticabdigital.instalacaodigitals)
  @JoinColumn([{ name: 'idartefatosinstalacao', referencedColumnName: 'id' }])
  idartefatosinstalacao2: Artefatosinstalacaopraticabdigital;

  @OneToMany(() => Instaladordigital, (instaladordigital) => instaladordigital.idinstalacao2)
  instaladordigitals: Instaladordigital[];
}
