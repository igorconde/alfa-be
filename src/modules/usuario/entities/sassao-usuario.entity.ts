import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Index('sessaousuario_pkey', ['id'], { unique: true })
@Index('isessaousuariofkusuario', ['idusuario'], {})
@Index('ix_sessaousuario_fk_sessaousuario_idusuario', ['idusuario'], {})
@Entity('sessaousuario', { schema: 'public' })
export class Sessaousuario {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', { name: 'datalogin', nullable: true })
  datalogin: Date | null;

  @Column('timestamp without time zone', { name: 'datalogout', nullable: true })
  datalogout: Date | null;

  @Column('character varying', {
    name: 'iporigem',
    nullable: true,
    length: 255,
  })
  iporigem: string | null;

  @Column('text', { name: 'jsessionid', nullable: true })
  jsessionid: string | null;

  @Column('integer', { name: 'idusuario', nullable: true })
  idusuario: number | null;

  @Column('character varying', {
    name: 'loginsuporte',
    nullable: true,
    length: 255,
  })
  loginsuporte: string | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.sessaousuarios)
  @JoinColumn([{ name: 'idusuario', referencedColumnName: 'id' }])
  idusuario2: Usuario;
}
