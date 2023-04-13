import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as swaggerStats from 'swagger-stats';
import * as session from 'express-session';
import * as passport from 'passport';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

import * as createRedisStore from 'connect-redis';
import { createClient } from 'redis';

async function bootstrap() {
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

  const RedisStore = createRedisStore(session);
  const redisClient = createClient({
    host: configService.get('redis.host'),
    port: configService.get('redis.port'),
  });

  redisClient.on('error', (err) => console.log('❌ Não foi possível estabelecer uma conexão com o Redis. ' + err));
  redisClient.on('connect', () => console.log('✅ Conectado ao Redis com sucesso.'));

  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 15, // 15 minutos em milissegundos
      },
    }),
  );

  // Ativar posteriormente
  //app.use(helmet());

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Alfa Beta - API')
    .setDescription('API do Alfa Beta')
    .setVersion('1.0')
    .addServer('http://localhost:3001', 'Local Server') // Adiciona um servidor com a URL base da API
    .addServer('https://api.alfabeta.com', 'Production Server') // Adiciona um servidor com a URL base da API de produção
    .addTag('users', 'Operações relacionadas a usuários') // Adiciona uma tag com uma descrição para agrupar as rotas relacionadas a usuários
    .setContact(
      'Equipe Alfa Beta',
      'https://www.alfabeta.com.br',
      'contato@alfabeta.com.br', // Adiciona informações de contato para a equipe de desenvolvimento da API
    )
    .setLicense(
      'Apache 2.0',
      'https://www.apache.org/licenses/LICENSE-2.0.html', // Adiciona informações sobre a licença da API
    )
    .addApiKey({
      type: 'apiKey',
      name: 'X-API-KEY',
      in: 'header',
      description: 'API Key para autenticação',
    })
    .build();

  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Alfa Beta -  API Docs',
    customCss: '.swagger-ui .topbar { background-color: #007ACC }',
    customfavIcon: 'https://www.alfabeta.com.br/favicon.ico',
    swaggerOptions: {
      operationsSorter: 'alpha', // Ordena as operações alfabeticamente
      tagsSorter: 'alpha', // Ordena as tags alfabeticamente
      defaultModelsExpandDepth: -1, // Define o nível de profundidade em que os modelos são exibidos
      displayRequestDuration: true, // Exibe o tempo de resposta das requisições no Swagger UI
      filter: true, // Habilita a pesquisa e filtro na página do Swagger UI
      persistAuthorization: true, // Mantém as informações de autenticação ao atualizar a página
      showExtensions: true, // Exibe as extensões definidas na documentação
      showCommonExtensions: true, // Exibe as extensões comuns do Swagger
      deepLinking: true, // Habilita o deep linking na página do Swagger UI
      validatorUrl: null, // Define a URL do validador de esquema JSON para as requisições
      operationsSortKey: 'method', // Define o atributo usado para ordenar as operações
      plugins: [], // Define os plugins adicionais do Swagger UI
    },
  };

  const document = SwaggerModule.createDocument(app, config, {
    deepScanRoutes: true,
    // Ignora o prefixo global definido na aplicação
    ignoreGlobalPrefix: true,
    // Adiciona um arquivo CSS personalizado com o título da página
  });

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

  // Inicialização do Passport
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(swaggerStats.getMiddleware({ swaggerSpec: document }));

  SwaggerModule.setup('api-docs', app, document, customOptions);

  await app.listen(3001);
}
bootstrap();
