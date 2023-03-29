import { ForbiddenException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { Usuario } from './../usuario/entities/usuario.entity';
import { UsuarioService } from './../usuario/usuario.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private usuarioService: UsuarioService,
  ) {}

  async signIn(usernameOrEmail: string, password: string): Promise<Usuario> {
    const isEmail = usernameOrEmail.includes('@');
    const isUsername = !isEmail;

    if (isEmail) {
      const user = await this.usuarioRepository.findOne({
        where: { email: usernameOrEmail },
      });

      if (user) {
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) throw new ForbiddenException('Invalid Credentials');

        return await this.usuarioService.getByEmail(user.email);
      }

      throw new NotFoundException("User doesn't exist");
    }

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
  }
}
