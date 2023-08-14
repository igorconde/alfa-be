import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { Usuario } from './../usuario/entities/usuario.entity';
import { UsuarioService } from './../usuario/usuario.service';
import { RegisterDto } from './dto/register.dto';
import { CryptoUtils } from '../core/utils/crypto.utils';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private usuarioService: UsuarioService, private cryptoUtils: CryptoUtils) {}

  async authenticate(email: string, password: string): Promise<Usuario | null> {
    if (!email || !password) {
      throw new BadRequestException('Email and password must be provided');
    }

    const [user] = await this.usuarioService.findBy({ email });
    if (user && (await this.cryptoUtils.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async signIn(usernameOrEmail: string, password: string): Promise<Usuario> {
    const isEmail = usernameOrEmail.includes('@');

    if (isEmail) {
      const [user] = await this.usuarioService.findBy({ email: usernameOrEmail });

      if (!user) {
        throw new NotFoundException("User doesn't exist");
      }

      const isValidPassword = await this.cryptoUtils.compare(password, user.password);

      if (!isValidPassword) {
        throw new ForbiddenException('Invalid Credentials');
      }

      return user;
    }
  }

  async registerUser(registrationData: RegisterDto): Promise<Usuario> {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);

    const createdUser = await this.usuarioService.createUser({
      ...registrationData,
      password: hashedPassword,
    });

    if (!createdUser) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    this.logger.log(`User registered successfully: ${createdUser.email}`);

    return createdUser;
  }
}
