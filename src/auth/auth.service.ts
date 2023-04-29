import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import postgresErrorMessages from 'src/database/postgresErrorMessages.enum';
import { Repository } from 'typeorm';

import { Usuario } from './../usuario/entities/usuario.entity';
import { UsuarioService } from './../usuario/usuario.service';
import { RegisterDto } from './dto/register.dto';
import { CryptoUtils } from 'src/core/utils/crypto.utils';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private usuarioService: UsuarioService,
    private cryptoUtils: CryptoUtils,
  ) {}

  async authenticate(email: string, password: string): Promise<Usuario | null> {
    if (!email || !password) {
      throw new BadRequestException('Email and password must be provided');
    }

    const user = await this.usuarioService.findByEmail(email);
    if (user && (await this.cryptoUtils.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async signIn(usernameOrEmail: string, password: string): Promise<Usuario> {
    const isEmail = usernameOrEmail.includes('@');
    const isUsername = !isEmail;

    if (isEmail) {
      const user = await this.usuarioRepository.findOne({
        where: { email: usernameOrEmail },
      });

      if (user) {
        const isValidPassword = await this.cryptoUtils.compare(password, user.password);

        if (!isValidPassword) throw new ForbiddenException('Invalid Credentials');

        return await this.usuarioService.findByEmail(user.email);
      }

      throw new NotFoundException("User doesn't exist");
    }
    /*
    if (isUsername) {
      const user = await this.usuarioRepository.findOne({
        where: { email: usernameOrEmail },
      });

      if (user) {
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) throw new ForbiddenException('Invalid Credentials');

        return await this.usuarioService.getByUsername(user.username);
      }

      throw new NotFoundException("User doesn't exist");
    }
*/
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
