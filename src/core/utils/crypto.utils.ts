import { Injectable } from '@nestjs/common';
import { randomBytes, timingSafeEqual } from 'crypto';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class CryptoUtils {
  async generateSalt(rounds = 10): Promise<string> {
    return await genSalt(rounds);
  }

  async hash(data: string, salt: string): Promise<string> {
    return await hash(data, salt);
  }

  async compare(data: string, hash: string): Promise<boolean> {
    const dataHash = await this.hash(data, hash.slice(0, 29));
    const bufferDataHash = Buffer.from(dataHash);
    const bufferHash = Buffer.from(hash);

    if (bufferDataHash.length !== bufferHash.length) {
      return false;
    }

    return timingSafeEqual(bufferDataHash, bufferHash);
  }
}
