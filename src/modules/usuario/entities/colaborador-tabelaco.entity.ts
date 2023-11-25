import { Tabelaco } from '@modules/common/entities/tabelaco.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Colaborador } from './colaborador.entity';

@Index('colaboradortabelaco_pkey', ['id'], { unique: true })
@Index('ix_colaboradortabelaco_fk_colaboradortabelaco_idcolaborador', ['idcolaborador'], {})
@Index('ix_colaboradortabelaco_fk_colaboradortabelaco_idtabelaco', ['idtabelaco'], {})
@Entity('colaboradortabelaco', { schema: 'public' })
export class Colaboradortabelaco {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idcolaborador', nullable: true })
  idcolaborador: number | null;

  @Column('integer', { name: 'idtabelaco', nullable: true })
  idtabelaco: number | null;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.colaboradortabelacos)
  @JoinColumn([{ name: 'idcolaborador', referencedColumnName: 'id' }])
  idcolaborador2: Colaborador;

  @ManyToOne(() => Tabelaco, (tabelaco) => tabelaco.colaboradortabelacos)
  @JoinColumn([{ name: 'idtabelaco', referencedColumnName: 'id' }])
  idtabelaco2: Tabelaco;
}
