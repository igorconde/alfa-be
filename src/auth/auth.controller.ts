import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './guards/localAuth.guard';
import { Body, Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  signIn(@Request() req): any {
    return req.user;
  }

  @Post('register')
  async register(@Body() registerationData: RegisterDto): Promise<Usuario> {
    return this.authService.registerUser(registerationData);
  }
}
