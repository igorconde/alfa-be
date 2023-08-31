import { Role } from 'src/modules/role/entities/role.entity';
import { Index, Entity, Column, ManyToMany } from 'typeorm';

@Entity('permissions')
export class Permission {
  @Index('name')
  @Column({ type: 'varchar', length: 64, unique: true })
  name!: string;

  @Index('slug')
  @Column({ type: 'varchar', length: 64, unique: true })
  slug!: string;

  slugGroup!: string;

  @ManyToMany(() => Role, (role) => role.permissions)
  roles?: Role[];
}
