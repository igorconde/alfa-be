import { Responsavelescritorio } from '@modules/brasil-mais/entities/responsavelescritorio.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('tiporesponsavelescritorio_pkey', ['id'], { unique: true })
@Entity('tiporesponsavelescritorio', { schema: 'public' })
export class Tiporesponsavelescritorio {
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

  @OneToMany(() => Responsavelescritorio, (responsavelescritorio) => responsavelescritorio.idtiporesponsavelescritorio2)
  responsavelescritorios: Responsavelescritorio[];
}
