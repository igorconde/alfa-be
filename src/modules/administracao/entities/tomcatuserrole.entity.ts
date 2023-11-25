import { Usuario } from '@modules/usuario/entities/usuario.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('tomcatuserrole_pkey', ['id'], { unique: true })
@Index('itomcatuserrolefkusuario', ['idusuario'], {})
@Entity('tomcatuserrole', { schema: 'public' })
export class Tomcatuserrole {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'login', nullable: true, length: 255 })
  login: string | null;

  @Column('character varying', {
    name: 'rolename',
    nullable: true,
    length: 255,
  })
  rolename: string | null;

  @Column('integer', { name: 'idusuario', nullable: true })
  idusuario: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.tomcatuserroles)
  @JoinColumn([{ name: 'idusuario', referencedColumnName: 'id' }])
  idusuario2: Usuario;
}
