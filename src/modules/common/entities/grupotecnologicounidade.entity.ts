import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Grupotecnologico } from './Grupotecnologico';
import { Unidade } from './Unidade';

@Index('grupotecnologicounidade_pkey', ['id'], { unique: true })
@Index('grptecnologicounidadefkgrpotecnologicounidadeidgrupotecnologico', ['idgrupotecnologico'], {})
@Index('ix_grupotecnologicounidade_fk_grupotecnologicounidade_idunidade', ['idunidade'], {})
@Entity('grupotecnologicounidade', { schema: 'public' })
export class Grupotecnologicounidade {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idgrupotecnologico', nullable: true })
  idgrupotecnologico: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @ManyToOne(() => Grupotecnologico, (grupotecnologico) => grupotecnologico.grupotecnologicounidades)
  @JoinColumn([{ name: 'idgrupotecnologico', referencedColumnName: 'id' }])
  idgrupotecnologico2: Grupotecnologico;

  @ManyToOne(() => Unidade, (unidade) => unidade.grupotecnologicounidades)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
