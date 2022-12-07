import { UsuarioService } from './../usuario/usuario.service';
import { TypeOrmConfigService } from './../database/ typeorm-config.service';
import { Usuario } from './../usuario/entities/usuario.entity';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Injectable, Logger } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private jwtService: JwtService,
    private usuarioService: UsuarioService,
  ) {}

  async login(body: LoginAuthDto) {
    const user = await this.usuarioRepository.findOne({
      where: { email: body.email },
    });

    if (user) {
      const isValidPassword = await bcrypt.compare(
        body.password,
        user.password,
      );

      if (isValidPassword) {
        this.logger.log(
          `Credentials are matched, signing jwt for user ${user.email}`,
        );
        return this.jwtService.sign(
          { id: user.id, email: user.email },
          { secret: 'secret' },
        );
      }
    }

    this.logger.log(`Invalid login attempt for user ${body.email}`);

    throw new Error('WRONG_CREDENTIALS');
  }

  async register(body: RegisterAuthDto) {
    const salt = await bcrypt.genSalt(10);
    const user = await this.usuarioService.createUser({
      ...body,
      password: await bcrypt.hash(body.password, salt),
    });
    this.logger.log(`User registered successfully ${body.email}`);
    this.logger.log(`Signing jwt for user ${user.email}`);

    return this.jwtService.sign(
      { id: user.id, email: user.email },
      { secret: 'secret' },
    );
  }
}
