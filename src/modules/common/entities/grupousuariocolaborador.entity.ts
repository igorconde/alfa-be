import { Colaborador } from '@modules/usuario/entities/colaborador.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Grupousuario } from './Grupousuario';

@Index('grupousuariocolaborador_pkey', ['id'], { unique: true })
@Index('igrupousuariocolaboradorfkcolaborador', ['idcolaborador'], {})
@Index('igrupousuariocolaboradorfkgrupousuario', ['idgrupousuario'], {})
@Entity('grupousuariocolaborador', { schema: 'public' })
export class Grupousuariocolaborador {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idgrupousuario', nullable: true })
  idgrupousuario: number | null;

  @Column('integer', { name: 'idcolaborador', nullable: true })
  idcolaborador: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.grupousuariocolaboradors)
  @JoinColumn([{ name: 'idcolaborador', referencedColumnName: 'id' }])
  idcolaborador2: Colaborador;

  @ManyToOne(() => Grupousuario, (grupousuario) => grupousuario.grupousuariocolaboradors)
  @JoinColumn([{ name: 'idgrupousuario', referencedColumnName: 'id' }])
  idgrupousuario2: Grupousuario;
}
