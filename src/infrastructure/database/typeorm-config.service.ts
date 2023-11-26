import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { DatabaseNamingStrategy } from './database-naming-strategy';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get('db.type'),
      host: this.configService.get('db.host'),
      port: this.configService.get('db.port'),
      username: this.configService.get('db.user'),
      password: this.configService.get('db.password'),
      database: this.configService.get('db.name'),
      synchronize: false /* process.env.NODE_ENV === 'dev' */,
      dropSchema: false,
      keepConnectionAlive: true,
      autoLoadEntities: true,
      logging: false,
      namingStrategy: new DatabaseNamingStrategy(),
      entities: [__dirname + '../../../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '../migrations/**/*{.ts,.js}'],
      cli: {
        entitiesDir: 'src',
        migrationsDir: '../database/migrations',
        subscribersDir: 'subscriber',
      },
      extra: {
        // based on https://node-postgres.com/api/pool
        // max connection pool size
        max: this.configService.get('db.maxConnections'),
        ssl: false,
      },
    } as TypeOrmModuleOptions;
  }
}
