import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.use(compression());
  app.use(cookieParser());

  app.enableCors({
    origin: true,
    credentials: true,
    allowedHeaders: 'Content-Type',
  });

  // Ativar posteriormente
  //app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Alfa Beta - API')
    .setDescription('API do Alfa Beta')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: true,
      stopAtFirstError: false,
      whitelist: true,
      exceptionFactory: (errors): ValidationError[] => {
        const messages = errors.map((error) => {
          const constraint = error.constraints;
          const messages = Object.values(constraint).map((n) => n);
          return {
            key: error.property,
            messages,
          };
        });
        throw new BadRequestException(messages);
      },
      validationError: { target: false, value: false },
    }),
  );

  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3001);
}
bootstrap();
