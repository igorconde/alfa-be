import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('logalteracaodadosusuario_pkey', ['id'], { unique: true })
@Entity('logalteracaodadosusuario', { schema: 'public' })
export class Logalteracaodadosusuario {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', { name: 'dataacao', nullable: true })
  dataacao: Date | null;

  @Column('integer', { name: 'idobjeto', nullable: true })
  idobjeto: number | null;

  @Column('integer', { name: 'idusuario', nullable: true })
  idusuario: number | null;

  @Column('text', { name: 'jsessionid', nullable: true })
  jsessionid: string | null;

  @Column('character varying', {
    name: 'nomeacao',
    nullable: true,
    length: 255,
  })
  nomeacao: string | null;

  @Column('character varying', {
    name: 'nomeclasse',
    nullable: true,
    length: 255,
  })
  nomeclasse: string | null;
}
