import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Termoaceite } from './Termoaceite';

@Index('tipotermo_pkey', ['id'], { unique: true })
@Entity('tipotermo', { schema: 'public' })
export class Tipotermo {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 50,
  })
  descricao: string | null;

  @OneToMany(() => Termoaceite, (termoaceite) => termoaceite.idtipotermo2)
  termoaceites: Termoaceite[];
}
