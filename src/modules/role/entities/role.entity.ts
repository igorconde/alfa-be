import { CustomBaseEntity } from '@/core/entity/custom-base.entity';
import { PermissionEntity } from '@modules/permission/entities/permission.entity';
import { Column, Entity, Index, JoinTable, ManyToMany, Unique } from 'typeorm';

@Entity({
  name: 'role',
})
@Unique(['name'])
export class RoleEntity extends CustomBaseEntity {
  @Column('varchar', { length: 100 })
  @Index({
    unique: true,
  })
  name: string;

  @Column('text')
  description: string;

  @ManyToMany(() => PermissionEntity, (permission) => permission.role)
  @JoinTable({
    name: 'role_permission',
    joinColumn: {
      name: 'roleId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'permissionId',
      referencedColumnName: 'id',
    },
  })
  permission: PermissionEntity[];
}
