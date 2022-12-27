import { Controller, Post, Body, Res, HttpCode, Req, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Request, Response } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtGuard } from './guards/jwt.guard';
import { LoginResponseDto } from './dto/refresh-token.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginAuthDto: LoginAuthDto, @Res({ passthrough: true }) response: Response,) {
    return this.authService.login(loginAuthDto, response);
  }

  @UseGuards(JwtGuard)
  @Post('/logout')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  async logout(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): Promise<boolean> {
    return await this.authService.logout(request, response);
  }

  @Post('register')
  async register(@Body() registerAuthDto: RegisterAuthDto) {
    return this.authService.register(registerAuthDto);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): Promise<LoginResponseDto> {

    console.log(request.cookies);
    const refresh = request.cookies['refresh-token'];

    return await this.authService.refresh(refresh, response);
  }
}
