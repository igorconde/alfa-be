import { Usuario } from '@modules/usuario/entities/usuario.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grupousuariocolaborador } from './grupousuariocolaborador.entity';

@Index('grupousuario_pkey', ['id'], { unique: true })
@Index('igrupousuariofkusuario', ['idusuario'], {})
@Entity('grupousuario', { schema: 'public' })
export class Grupousuario {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('integer', { name: 'idusuario', nullable: true })
  idusuario: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.grupousuarios)
  @JoinColumn([{ name: 'idusuario', referencedColumnName: 'id' }])
  idusuario2: Usuario;

  @OneToMany(() => Grupousuariocolaborador, (grupousuariocolaborador) => grupousuariocolaborador.idgrupousuario2)
  grupousuariocolaboradors: Grupousuariocolaborador[];
}
