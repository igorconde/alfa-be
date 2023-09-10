import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { UsuarioFactoryServiceService } from './usuarios/usuarios-factory.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  console.log('🌱 - Iniciando o processo de Seed do Banco de dados.');

  // run

  await app.get(UsuarioFactoryServiceService).run();

  await app.close();

  console.log('🌳 - Seed Finalizado.');
};

void runSeed();
