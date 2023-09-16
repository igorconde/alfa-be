import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { UsuarioFactoryServiceService } from './usuarios/usuarios-factory.service';
import { PermissionFactoryServiceService } from './permissions/permission-factory.service';
import { RoleFactoryServiceService } from './roles/role-factory.service';

const runSeed = async () => {
  const app = await NestFactory.createApplicationContext(SeedModule);

  console.log('🌱 - Iniciando o processo de Seed do Banco de dados.');

  // run

  await app.get(UsuarioFactoryServiceService).run();
  await app.get(PermissionFactoryServiceService).run();
  await app.get(RoleFactoryServiceService).run();

  await app.close();

  console.log('🌳 - Seed Finalizado.');
};

void runSeed();
