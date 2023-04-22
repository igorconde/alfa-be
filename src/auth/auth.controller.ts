import { UsuarioService } from './../usuario/usuario.service';
import { RegisterDto } from './dto/register.dto';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  InternalServerErrorException,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { LogInWithCredentialsGuard } from './guards/local-auth.guard';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Request, Response } from 'express';
import { PublicRoute } from 'src/core/decorators/public-route.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Get('/me')
  async authenticate(@Req() request: any): Promise<any> {
    return { data: request.user };
  }

  @PublicRoute()
  @UseGuards(LogInWithCredentialsGuard)
  @Post('login')
  async login(@Body() loginDto: LoginAuthDto): Promise<any> {
    return this.authService.authenticate(loginDto.email, loginDto.password);
  }

  @PublicRoute()
  @HttpCode(200)
  @Post('logout')
  async logout(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
    const logoutError = await new Promise((resolve) =>
      request.logOut({ keepSessionInfo: false }, (error) => resolve(error)),
    );

    if (logoutError) {
      throw new InternalServerErrorException('Could not log out user');
    }

    response.clearCookie('connect.sid', {
      path: '/',
    });

    return {
      logout: true,
    };
  }

  @PublicRoute()
  @Post('register')
  async register(@Body() registerationData: RegisterDto): Promise<Usuario> {
    return this.authService.registerUser(registerationData);
  }
}
