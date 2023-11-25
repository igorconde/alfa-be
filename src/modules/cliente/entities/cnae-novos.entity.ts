import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('cnaenovos_pkey', ['id'], { unique: true })
@Entity('cnaenovos', { schema: 'public' })
export class Cnaenovos {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'classe_codigo',
    nullable: true,
    length: 255,
  })
  classeCodigo: string | null;

  @Column('character varying', {
    name: 'classe_descricao',
    nullable: true,
    length: 255,
  })
  classeDescricao: string | null;

  @Column('character varying', {
    name: 'divisao_codigo',
    nullable: true,
    length: 255,
  })
  divisaoCodigo: string | null;

  @Column('character varying', {
    name: 'divisao_descricao',
    nullable: true,
    length: 255,
  })
  divisaoDescricao: string | null;

  @Column('character varying', {
    name: 'grupo_codigo',
    nullable: true,
    length: 255,
  })
  grupoCodigo: string | null;

  @Column('character varying', {
    name: 'grupo_descricao',
    nullable: true,
    length: 255,
  })
  grupoDescricao: string | null;

  @Column('character varying', {
    name: 'secao_codigo',
    nullable: true,
    length: 255,
  })
  secaoCodigo: string | null;

  @Column('character varying', {
    name: 'secao_descricao',
    nullable: true,
    length: 255,
  })
  secaoDescricao: string | null;

  @Column('character varying', {
    name: 'subclasse_codigo',
    nullable: true,
    length: 255,
  })
  subclasseCodigo: string | null;

  @Column('character varying', {
    name: 'subclasse_descricao',
    nullable: true,
    length: 255,
  })
  subclasseDescricao: string | null;
}
