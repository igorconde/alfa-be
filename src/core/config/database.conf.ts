import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  type: process.env.DATABASE_TYPE || 'postgres',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  name: process.env.DATABASE_NAME,
}));
