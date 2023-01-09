import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { Repository } from 'typeorm';

import { Usuario } from './../usuario/entities/usuario.entity';
import { UsuarioService } from './../usuario/usuario.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { LoginResponseDto } from './dto/refresh-token.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private jwtService: JwtService,
    private usuarioService: UsuarioService,
    private configService: ConfigService,
  ) {}

  async login(body: LoginAuthDto, response: Response) {
    const user = await this.usuarioRepository.findOne({
      where: { email: body.email },
    });

    if (user) {
      const isValidPassword = await bcrypt.compare(body.password, user.password);

      if (isValidPassword) {
        this.logger.log(`Credentials are matched, signing jwt for user ${user.email}`, AuthService.name);

        const { id, email, nome, status } = user;

        const accessToken = await this.jwtService.signAsync(
          { email, nome, status },
          {
            subject: id.toString(),
            expiresIn: '15m',
            secret: this.configService.get('JWT_SECRET'),
          },
        );

        /* Gera um refresh Token e faz o store em um Token Httponly */
        const refreshToken = await this.jwtService.signAsync(
          { email, nome, status },
          {
            subject: id.toString(),
            expiresIn: '1w',
            secret: this.configService.get('JWT_REFRESH_SECRET'),
          },
        );

        await this.usuarioService.setRefreshToken(id, refreshToken);

        response.cookie('refresh-token', refreshToken, { httpOnly: true });

        return { token: accessToken, user };
      }
    }

    this.logger.log(`Invalid login attempt for user ${body.email}`);

    return { message: 'Invalid credentials', data: 'teste' };
  }

  async logout(request: Request, response: Response): Promise<boolean> {
    const userId = request.user['userId'];
    await this.usuarioService.setRefreshToken(userId, null);
    response.clearCookie('refresh-token');
    return true;
  }

  async register(body: RegisterAuthDto) {
    const salt = await bcrypt.genSalt(10);
    const user = await this.usuarioService.createUser({
      ...body,
      password: await bcrypt.hash(body.password, salt),
    });
    this.logger.log(`User registered successfully ${body.email}`);
    this.logger.log(`Signing jwt for user ${user.email}`);

    return this.jwtService.sign({ id: user.id, email: user.email }, { secret: 'secret' });
  }

  async refresh(refreshToken: string, response: Response): Promise<LoginResponseDto> {
    if (!refreshToken) {
      throw new HttpException('Refresh token required', HttpStatus.BAD_REQUEST);
    }

    const decoded = this.jwtService.decode(refreshToken);

    const user = await this.usuarioService.findById(decoded['sub']);

    const { id, email, nome, status } = user;

    console.log('user', user);
    console.log('refreshToken', refreshToken);
    console.log('user.refreshToken', user.refreshToken);
    console.log('difference?', refreshToken != user.refreshToken);

    if (refreshToken != user.refreshToken) {
      response.clearCookie('refresh-token');
      throw new HttpException('Refresh token is not valid', HttpStatus.FORBIDDEN);
    }

    try {
      await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      });
      const accessToken = await this.jwtService.signAsync(
        { id, email, nome, status },
        {
          subject: id.toString(),
          expiresIn: '15m',
          secret: this.configService.get('JWT_SECRET'),
        },
      );

      return { token: accessToken, usuario: user };
    } catch (error) {
      this.logger.log(error);
      response.clearCookie('refresh-token');
      await this.usuarioService.setRefreshToken(id, null);
      throw new HttpException('Refresh token is not valid XXX', HttpStatus.FORBIDDEN);
    }
  }
}
