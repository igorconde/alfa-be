import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleEntity } from './entities/role.entity';
import { PermissionModule } from '@modules/permission/permission.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity]), PermissionModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
