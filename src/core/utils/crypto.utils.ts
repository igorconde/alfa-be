import { Injectable } from '@nestjs/common';
import { genSalt, hash, compare as bcryptCompare } from 'bcrypt';

@Injectable()
export class CryptoUtils {
  async generateSalt(rounds = 10): Promise<string> {
    return genSalt(rounds);
  }

  async hash(data: string, salt: string): Promise<string> {
    return hash(data, salt);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return bcryptCompare(password, hashedPassword);
  }
}
