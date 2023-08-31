import { Permission } from 'src/modules/permission/entities/permission.entity';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { Index, Entity, Column, JoinTable, ManyToMany } from 'typeorm';

@Entity('roles')
export class Role {
  @Index('nome')
  @Column({ type: 'varchar', length: 32, unique: true })
  name!: string;

  @Index('slug')
  @Column({ type: 'varchar', length: 32, unique: true })
  slug!: string;

  @ManyToMany(() => Permission, (permission) => permission.roles)
  @JoinTable()
  permissions?: Permission[];

  @ManyToMany(() => Usuario, (usuario) => usuario.roles)
  usuario?: Usuario;
}
