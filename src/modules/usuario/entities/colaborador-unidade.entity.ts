import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Colaborador } from './colaborador.entity';

@Index('colaboradorunidade_pkey', ['id'], { unique: true })
@Index('ix_colaboradorunidade_fk_colaboradorunidade_idcolaborador', ['idcolaborador'], {})
@Index('ix_colaboradorunidade_fk_colaboradorunidade_idunidade', ['idunidade'], {})
@Entity('colaboradorunidade', { schema: 'public' })
export class Colaboradorunidade {
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

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.colaboradorunidades)
  @JoinColumn([{ name: 'idcolaborador', referencedColumnName: 'id' }])
  idcolaborador2: Colaborador;

  @ManyToOne(() => Unidade, (unidade) => unidade.colaboradorunidades)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
