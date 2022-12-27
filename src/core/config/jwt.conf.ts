import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.SECRET,
  refresh_token_secret: process.env.REFRESH_TOKEN,
}));
