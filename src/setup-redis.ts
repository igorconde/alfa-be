import * as session from 'express-session';
import { ConfigService } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';
import Redis from 'ioredis';
import RedisStore from 'connect-redis';

export async function setupRedis(app: INestApplication, configService: ConfigService) {
  const redisClient = new Redis(configService.get('redis.port'), configService.get('redis.host'));

  redisClient.on('error', (err) => {
    console.log('❌ Não foi possível estabelecer uma conexão com o Redis. ' + err);
  });
  redisClient.on('connect', () => {
    console.log('✅ Conectado ao Redis com sucesso.');
  });
  const redisStore = new RedisStore({ client: redisClient });

  app.use(
    session({
      store: redisStore,
      secret: 'secret',
      resave: false,
      rolling: true,
      saveUninitialized: false,
      cookie: {
        secure: false,
        sameSite: true,
        maxAge: 1000 * 60 * 30, // 30 minutos em milissegundos
      },
      name: 'connect.sid',
    }),
  );
}
