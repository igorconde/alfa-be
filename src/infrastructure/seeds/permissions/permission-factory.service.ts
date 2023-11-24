import { ModulesPayloadInterface, PermissionConfiguration, PermissionPayload, RoutePayloadInterface, SubModulePayloadInterface } from '@config/permission-config';
import { PermissionEntity } from '@modules/permission/entities/permission.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PermissionFactoryServiceService {
  constructor(
    @InjectRepository(PermissionEntity)
    private repoPermission: Repository<PermissionEntity>,
  ) {}

  assignResourceAndConcatPermission(modules: ModulesPayloadInterface | SubModulePayloadInterface, permissionsList: RoutePayloadInterface[], resource: string, isDefault?: false) {
    if (modules.permissions) {
      for (const permission of modules.permissions) {
        permissionsList = this.concatPermissions(permission, permissionsList, resource, isDefault);
      }
    }
    return permissionsList;
  }

  concatPermissions(permission: PermissionPayload, permissionsList: RoutePayloadInterface[], resource: string, isDefault: boolean) {
    const description = permission.name;
    for (const data of permission.route) {
      data.resource = data.resource || resource;
      data.description = data.description || description;
      data.isDefault = isDefault || false;
    }
    return permissionsList.concat(permission.route);
  }

  async run() {
    console.log('Permission Seed - Started');
    const modules = PermissionConfiguration.modules;
    let permissionsList: RoutePayloadInterface[] = [];

    for (const moduleData of modules) {
      let resource = moduleData.resource;
      permissionsList = this.assignResourceAndConcatPermission(moduleData, permissionsList, resource);

      if (moduleData.hasSubmodules) {
        for (const submodule of moduleData.submodules) {
          resource = submodule.resource || resource;
          permissionsList = this.assignResourceAndConcatPermission(submodule, permissionsList, resource);
        }
      }
    }

    await this.repoPermission.save(permissionsList);
    console.log('🚀 ~ file: permission-factory.service.ts:67 ~ PermissionFactoryServiceService ~ run ~ permissionsList:', permissionsList);
  }
}
