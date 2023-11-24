import { registerAs } from '@nestjs/config';

export default registerAs('session', () => ({
  secret: process.env.SESSION_SECRET,
  secure: JSON.parse(process.env.SESSION_COOKIE_SECURE.toLowerCase()),
  maxAge: Number(process.env.SESSION_COOKIE_MAX_AGE),
  sameSite: JSON.parse(process.env.SESSION_SAME_SITE.toLowerCase()),
  name: process.env.SESSION_NAME,
}));
