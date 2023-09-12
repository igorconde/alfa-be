import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from '@modules/role/entities/role.entity';

enum Roles {
  ADMIN = 'Administrador',
}

enum RoleDescriptions {
  ADMIN = 'Administrador do sistema',
}

@Injectable()
export class RoleFactoryServiceService implements OnModuleInit {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly repoRole: Repository<RoleEntity>,
  ) {}

  async onModuleInit(): Promise<void> {
    await this.run();
  }

  private async ensureRole(name: string, description: string): Promise<void> {
    const roleExists = await this.repoRole.count({ where: { name } });
    if (!roleExists) {
      const role = this.repoRole.create({ name, description });
      await this.repoRole.save(role);
      console.log(`Role Seed - ${name} created`);
    } else {
      console.log(`Role Seed - ${name} already exists`);
    }
  }

  async run(): Promise<void> {
    try {
      console.log('Role Seed - Started');

      const rolesToCreate = [{ name: Roles.ADMIN, description: RoleDescriptions.ADMIN }];

      await Promise.all(rolesToCreate.map((role) => this.ensureRole(role.name, role.description)));
    } catch (error) {
      console.error('Role Seed - Error:', error);
    }
  }
}
