import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import RedisStore from 'connect-redis';
import * as session from 'express-session';
import Redis from 'ioredis';

export async function setupRedis(app: INestApplication, configService: ConfigService) {
  const redisClient = new Redis(configService.get('redis.port'), configService.get('redis.host'));

  redisClient.on('error', (err) => {
    console.log('❌ Não foi possível estabelecer uma conexão com o Redis. ' + err);
  });
  redisClient.on('connect', () => {
    console.log('✅ Conectado ao Redis com sucesso.');
  });
  const redisStore = new RedisStore({ client: redisClient });

  console.log("🚀 ~ file: setup-redis.ts:19 ~ setupRedis ~ configService.get<number>('session.maxAge'):", configService.get('session.name'));
  app.use(
    session({
      store: redisStore,
      secret: configService.get('session.secret'),
      resave: false,
      rolling: true,
      saveUninitialized: false,
      cookie: {
        secure: Boolean(configService.get('session.secure')),
        sameSite: Boolean(configService.get('session.sameSite')),
        maxAge: configService.get('session.maxAge'),
      },
      name: configService.get('session.name'),
    }),
  );
}
