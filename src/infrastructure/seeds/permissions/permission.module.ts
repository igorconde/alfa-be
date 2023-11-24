import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionFactoryServiceService } from './permission-factory.service';
import { PermissionEntity } from '@modules/permission/entities/permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PermissionEntity])],
  providers: [PermissionFactoryServiceService],
  exports: [PermissionFactoryServiceService],
})
export class PermissionSeedModule {}
