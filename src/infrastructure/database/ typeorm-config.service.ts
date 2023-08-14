import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

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
      synchronize: true /* process.env.NODE_ENV === 'dev' */,
      dropSchema: false,
      keepConnectionAlive: true,
      autoLoadEntities: true,
      logging: true, //process.env.NODE_ENV !== 'production',
      entities: [__dirname + '../../**/*.entity{.ts,.js}'],
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
        ssl: this.configService.get('db.sslEnabled')
          ? {
              rejectUnauthorized: this.configService.get('database.rejectUnauthorized'),
              ca: this.configService.get('db.ca') ?? undefined,
              key: this.configService.get('db.key') ?? undefined,
              cert: this.configService.get('db.cert') ?? undefined,
            }
          : undefined,
      },
    } as TypeOrmModuleOptions;
  }
}
