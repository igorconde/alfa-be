import * as session from 'express-session';
import * as createRedisStore from 'connect-redis';
import { createClient } from 'redis';
import { ConfigService } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';

export function setupRedis(app: INestApplication, configService: ConfigService) {
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
