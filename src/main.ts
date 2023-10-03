import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as passport from 'passport';

import { AppModule } from './app.module';

import { Logger, NestApplicationOptions, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { WinstonModule } from 'nest-winston';
import { winstonOptions } from './app-logging';
import { TimeoutInterceptor } from './core/interceptors/timeout.interceptor';
import { CustomValidationPipe } from './core/pipes/custom-validation.pipe';
import { setupRedis } from './setup-redis';
import { setupSwagger } from './setup-swagger';

// import { setupAutoInstrumenting } from './core/utils/tracing.otlp';

async function bootstrap() {
  const logger = process.env.NODE_ENV === 'production' ? WinstonModule.createLogger(winstonOptions) : new Logger('Bootstrap Logger');
  const nestAppOptions: NestApplicationOptions = {
    logger: logger,
  };
  // setupAutoInstrumenting();
  const app = await NestFactory.create<NestExpressApplication>(AppModule, nestAppOptions);
  const configService = app.get(ConfigService);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // gzpip compression
  app.use(compression());

  // For parsing application/json
  // For parsing application/x-www-form-urlencoded
  app.useBodyParser('json', { limit: '50mb' });
  app.useBodyParser('urlencoded', { limit: '50mb', extended: true });

  app.use(cookieParser());

  app.enableCors({
    origin: true,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Ativar posteriormente
  //app.use(helmet());

  // Inicia o Redis
  setupRedis(app, configService);

  // Inicia o Swagger
  setupSwagger(app, configService);

  app.useGlobalPipes(new CustomValidationPipe(), new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }));

  app.useGlobalInterceptors(new TimeoutInterceptor(configService));

  // Inicialização do Passport
  app.use(passport.initialize());
  app.use(passport.session());

  const port = configService.get('app.port');

  await app.listen(port);

  console.info(`🚀🌐 O servidor foi iniciado com sucesso em http://localhost:${port}`);
  console.info(`📖🔍 O Swagger está disponível e ativo em http://localhost:${port}/api-docs`);
  console.info(`📊🔗 O serviço do swagger-stats está disponível e monitorando em http://localhost:${port}/swagger-stats`);
}
bootstrap().catch((error) => {
  console.error('❌ Ocorreu um erro ao iniciar a aplicação:', error);
});
