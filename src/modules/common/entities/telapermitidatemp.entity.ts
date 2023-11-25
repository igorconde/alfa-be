import { Perfilusuario } from '@modules/usuario/entities/perfil-usuario.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Telatemp } from './telatemp.entity';

@Index('telapermitidatemp_pkey', ['id'], { unique: true })
@Index('ix_telapermitidatemp_fk_telapermitidatemp_idperfilusuario', ['idperfilusuario'], {})
@Index('ix_telapermitidatemp_fk_telapermitidatemp_idtela', ['idtela'], {})
@Entity('telapermitidatemp', { schema: 'public' })
export class Telapermitidatemp {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idperfilusuario', nullable: true })
  idperfilusuario: number | null;

  @Column('integer', { name: 'idtela', nullable: true })
  idtela: number | null;

  @ManyToOne(() => Perfilusuario, (perfilusuario) => perfilusuario.telapermitidatemps)
  @JoinColumn([{ name: 'idperfilusuario', referencedColumnName: 'id' }])
  idperfilusuario2: Perfilusuario;

  @ManyToOne(() => Telatemp, (telatemp) => telatemp.telapermitidatemps)
  @JoinColumn([{ name: 'idtela', referencedColumnName: 'id' }])
  idtela2: Telatemp;
}
