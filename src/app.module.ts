import { TypeOrmConfigService } from './infrastructure/database/typeorm-config.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './core/interceptors/transform.interceptor';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { PublicRoutesGuard } from './modules/auth/guards/public-routes.guard';
import { AuthModule } from '@modules/auth/auth.module';
import { UsuarioModule } from '@modules/usuario/usuario.module';
import { PermissionModule } from '@modules/permission/permission.module';
import { RoleModule } from '@modules/role/role.module';
import databaseConf from '@config/database.conf';
import redisConf from '@config/redis.conf';
import appConf from '@config/app.conf';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConf, redisConf, appConf],
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
    }),
    PassportModule.register({ session: true }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    AuthModule,
    UsuarioModule,
    PermissionModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: PublicRoutesGuard,
    },
  ],
})
export class AppModule {}
