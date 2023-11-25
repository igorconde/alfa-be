import { Usuario } from '@modules/usuario/entities/usuario.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('deparaloginsgtsi_pkey', ['id'], { unique: true })
@Index('ix_deparaloginsgtsi_fk_deparaloginsgtsi_user_id_sgt', ['userIdSgt'], {})
@Entity('deparaloginsgtsi', { schema: 'public' })
export class Deparaloginsgtsi {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'user_id_si', nullable: true })
  userIdSi: number | null;

  @Column('character varying', {
    name: 'user_login',
    nullable: true,
    length: 255,
  })
  userLogin: string | null;

  @Column('integer', { name: 'user_id_sgt', nullable: true })
  userIdSgt: number | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.deparaloginsgtsis)
  @JoinColumn([{ name: 'user_id_sgt', referencedColumnName: 'id' }])
  userIdSgt2: Usuario;
}
