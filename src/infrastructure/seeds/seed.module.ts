import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import databaseConfig from '@/core/config/database.conf';
import { join, resolve } from 'path';
import { UsuarioSeedModule } from './usuarios/usuarios.module';
import { TypeOrmConfigService } from '../database/ typeorm-config.service';

@Module({
  imports: [
    UsuarioSeedModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: join(resolve(__dirname, '../../../'), `.env.dev`),
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
  ],
})
export class SeedModule {}
