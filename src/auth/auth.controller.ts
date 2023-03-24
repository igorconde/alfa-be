import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Request, Response } from 'express';

import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { LoginResponseDto } from './dto/refresh-token.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { JwtGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('me')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  async me(@Req() request: Request) {
    return {
      data: {
        user: {
          _id: '6418fc34e42c60fec7fc9464',
          name: 'Igor Gabriel',
          email: 'igorgconde@gmail.com',
          role: 'user',
          photo: 'default.png',
          verified: true,
          provider: 'local',
          createdAt: '2023-03-21T00:37:08.024Z',
          updatedAt: '2023-03-21T00:38:18.325Z',
          id: '6418fc34e42c60fec7fc9464',
          __v: 0,
        },
        logged_in: true,
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imlnb3JAZ21haWwuY29tIiwibm9tZSI6Iklnb3IgR2FicmllbCIsInN0YXR1cyI6dHJ1ZSwiaWF0IjoxNjczNjU3MTkzLCJleHAiOjE2NzM2NTgwOTMsInN1YiI6IjEifQ.zj7JojjjCCXhPOTSFUcVhR0TdzgwFrlY9ArPQ7YUXPo',
        userData: {
          id: 1,
          role: 'admin',
          nome: 'Administrador',
          username: 'admin@gmail.com',
          email: 'admin@gmail.com',
        },
      },
    };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginAuthDto: LoginAuthDto, @Res({ passthrough: true }) response: Response) {
    return this.authService.login(loginAuthDto, response);
  }

  @Get('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Req() request: Request, @Res({ passthrough: true }) response: Response): Promise<boolean> {
    return await this.authService.logout(request, response);
  }

  @Post('register')
  async register(@Body() registerAuthDto: RegisterAuthDto) {
    return this.authService.register(registerAuthDto);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Req() request: Request, @Res({ passthrough: true }) response: Response): Promise<LoginResponseDto> {
    console.log(request.cookies);
    const refresh = request.cookies['refresh_token'];

    return await this.authService.refresh(refresh, response);
  }
}
