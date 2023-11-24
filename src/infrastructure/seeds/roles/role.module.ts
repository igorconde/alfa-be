import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from '@modules/role/entities/role.entity';
import { RoleFactoryServiceService } from './role-factory.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  providers: [RoleFactoryServiceService],
  exports: [RoleFactoryServiceService],
})
export class RoleSeedModule {}
