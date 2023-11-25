import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Artefatosinstalacaopraticabdigital } from './Artefatosinstalacaopraticabdigital';

@Index('artefatokitdigital_pkey', ['id'], { unique: true })
@Index('artefatokitdigital_fk_artefatokitdigital_idartefatosinstalacao', ['idartefatosinstalacao'], {})
@Entity('artefatokitdigital', { schema: 'public' })
export class Artefatokitdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'coletor', nullable: true, length: 255 })
  coletor: string | null;

  @Column('timestamp without time zone', {
    name: 'datacessaocoletor',
    nullable: true,
  })
  datacessaocoletor: Date | null;

  @Column('timestamp without time zone', {
    name: 'datacessaomina',
    nullable: true,
  })
  datacessaomina: Date | null;

  @Column('timestamp without time zone', {
    name: 'datacessaosensor',
    nullable: true,
  })
  datacessaosensor: Date | null;

  @Column('character varying', {
    name: 'kitmontagem',
    nullable: true,
    length: 255,
  })
  kitmontagem: string | null;

  @Column('character varying', { name: 'local', nullable: true, length: 255 })
  local: string | null;

  @Column('character varying', { name: 'mina', nullable: true, length: 255 })
  mina: string | null;

  @Column('character varying', { name: 'sensor', nullable: true, length: 255 })
  sensor: string | null;

  @Column('integer', { name: 'idartefatosinstalacao', nullable: true })
  idartefatosinstalacao: number | null;

  @ManyToOne(() => Artefatosinstalacaopraticabdigital, (artefatosinstalacaopraticabdigital) => artefatosinstalacaopraticabdigital.artefatokitdigitals)
  @JoinColumn([{ name: 'idartefatosinstalacao', referencedColumnName: 'id' }])
  idartefatosinstalacao2: Artefatosinstalacaopraticabdigital;
}
