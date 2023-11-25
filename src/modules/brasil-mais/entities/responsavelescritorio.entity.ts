import { Tabelaco } from '@modules/common/entities/tabelaco.entity';
import { Tiporesponsavelescritorio } from '@modules/common/entities/tiporesponsavelescritorio.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('responsavelescritorio_pkey', ['id'], { unique: true })
@Index('ix_responsavelescritorio_fk_responsavelescritorio_idtabelaco', ['idtabelaco'], {})
@Index('rspnsvlscritoriofkrspnsvelescritorioidtiporesponsavelescritorio', ['idtiporesponsavelescritorio'], {})
@Entity('responsavelescritorio', { schema: 'public' })
export class Responsavelescritorio {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'email', nullable: true, length: 150 })
  email: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 150 })
  nome: string | null;

  @Column('integer', { name: 'idtabelaco', nullable: true })
  idtabelaco: number | null;

  @Column('integer', { name: 'idtiporesponsavelescritorio', nullable: true })
  idtiporesponsavelescritorio: number | null;

  @ManyToOne(() => Tabelaco, (tabelaco) => tabelaco.responsavelescritorios)
  @JoinColumn([{ name: 'idtabelaco', referencedColumnName: 'id' }])
  idtabelaco2: Tabelaco;

  @ManyToOne(() => Tiporesponsavelescritorio, (tiporesponsavelescritorio) => tiporesponsavelescritorio.responsavelescritorios)
  @JoinColumn([{ name: 'idtiporesponsavelescritorio', referencedColumnName: 'id' }])
  idtiporesponsavelescritorio2: Tiporesponsavelescritorio;
}
