import appConf from '@config/app.conf';
import databaseConf from '@config/database.conf';
import mailConfig from '@config/mail.config';
import redisConf from '@config/redis.conf';
import sessionConfig from '@config/session.config';
import { AuthModule } from '@modules/auth/auth.module';
import { PermissionModule } from '@modules/permission/permission.module';
import { RoleModule } from '@modules/role/role.module';
import { UsuarioModule } from '@modules/usuario/usuario.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { TypeOrmConfigService } from './infrastructure/database/typeorm-config.service';
import { MailConfigService } from './mail/mail-config.service';
import { MailModule } from './mail/mail.module';
import { PublicRoutesGuard } from './modules/auth/guards/public-routes.guard';
import { HealthCheckerModule } from './modules/health-checker/health-checker.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConf, redisConf, appConf, mailConfig, sessionConfig],
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
    }),
    PassportModule.register({ session: true }),
    MailerModule.forRootAsync({
      useClass: MailConfigService,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return [
          {
            ttl: configService.get<number>('THROTTLE_TTL'),
            limit: configService.get<number>('THROTTLE_LIMIT'),
          },
        ];
      },
    }),
    AuthModule,
    UsuarioModule,
    PermissionModule,
    RoleModule,
    CoreModule,
    MailModule,
    HealthCheckerModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: PublicRoutesGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
