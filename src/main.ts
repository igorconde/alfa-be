import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as passport from 'passport';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

import { setupSwagger } from './setup-swagger';
import { setupRedis } from './setup-redis';
// import { setupAutoInstrumenting } from './core/utils/tracing.otlp';

async function bootstrap() {
  // setupAutoInstrumenting();
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.use(compression());
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

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: true,
      stopAtFirstError: false,
      whitelist: true,
      exceptionFactory: (errors) => {
        const messages = errors.map(({ property, constraints }) => ({
          field: property,
          messages: Object.values(constraints),
        }));
        throw new BadRequestException(messages);
      },
      validationError: { target: false, value: false },
    }),
  );
  

  // Inicialização do Passport
  app.use(passport.initialize());
  app.use(passport.session());

  const port = configService.get('app.port');

  await app.listen(port);

  console.info(`🚀🌐 O servidor foi iniciado com sucesso em http://localhost:${port}`);
  console.info(`📖🔍 O Swagger está disponível e ativo em http://localhost:${port}/api-docs`);
  console.info(`📊🔗 O serviço do swagger-stats está disponível e monitorando em http://localhost:${port}/swagger-stats`);

}
bootstrap();
