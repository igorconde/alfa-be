import { Colaborador } from '@modules/usuario/entities/colaborador.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Publicacao } from './publicacao.entity';

@Index('publicacaocolaborador_pkey', ['id'], { unique: true })
@Index('ix_publicacaocolaborador_fk_publicacaocolaborador_idcolaborador', ['idcolaborador'], {})
@Index('ix_publicacaocolaborador_fk_publicacaocolaborador_idpublicacao', ['idpublicacao'], {})
@Entity('publicacaocolaborador', { schema: 'public' })
export class Publicacaocolaborador {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idpublicacao', nullable: true })
  idpublicacao: number | null;

  @Column('integer', { name: 'idcolaborador', nullable: true })
  idcolaborador: number | null;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.publicacaocolaboradors)
  @JoinColumn([{ name: 'idcolaborador', referencedColumnName: 'id' }])
  idcolaborador2: Colaborador;

  @ManyToOne(() => Publicacao, (publicacao) => publicacao.publicacaocolaboradors)
  @JoinColumn([{ name: 'idpublicacao', referencedColumnName: 'id' }])
  idpublicacao2: Publicacao;
}
