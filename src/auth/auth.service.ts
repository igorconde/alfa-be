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
    const userData = await this.usuarioRepository.findOne({
      where: { email: body.email },
    });

    if (userData) {
      const isValidPassword = await bcrypt.compare(body.password, userData.password);

      if (isValidPassword) {
        this.logger.log(`Credentials are matched, signing jwt for user ${userData.email}`, AuthService.name);

        const { id, email, nome, status } = userData;

        const accessToken = await this.jwtService.signAsync(
          { userId: id, email, nome, status },
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

        response.cookie('logged_in', true, { httpOnly: true, sameSite: 'lax' });
        response.cookie('access_token', accessToken, { httpOnly: true, sameSite: 'lax' });
        response.cookie('refresh_token', refreshToken, { httpOnly: true, sameSite: 'lax' });

        userData.role = 'admin';

        return {
          data: {
            accessToken,
            userData: {
              id: userData.id,
              role: userData.role,
              nome: userData.nome,
              username: userData.email,
              email: userData.email,
            },
          },
        };
      }
    }

    console.log('body', body);

    this.logger.log(`Invalid login attempt for user ${body.email}`);

    throw new HttpException('Invalid Credentials', HttpStatus.BAD_REQUEST);

    return { message: 'Invalid credentials', data: 'teste' };
  }

  async logout(request: Request, response: Response): Promise<boolean> {
    const accessToken = request.cookies['access_token'];
    if (!accessToken) {
      return false;
    }

    // Decode the JWT token to get the userId
    const decodedToken = this.jwtService.decode(accessToken) as { userId: string };
    console.log('🚀 ~ file: auth.service.ts:97 ~ AuthService ~ logout ~ decodedToken:', decodedToken);
    const userId = decodedToken.userId;

    // Clear all cookies
    response.clearCookie('logged_in');
    response.clearCookie('access_token');
    response.clearCookie('refresh_token');

    // Update the user's refresh token to null using the decoded access token
    const updated = await this.usuarioService.setRefreshToken(Number(userId), null);

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
      response.clearCookie('refresh_token');
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
      response.clearCookie('refresh_token');
      await this.usuarioService.setRefreshToken(id, null);
      throw new HttpException('Refresh token is not valid XXX', HttpStatus.FORBIDDEN);
    }
  }
}
