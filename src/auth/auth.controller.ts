import { RegisterDto } from './dto/register.dto';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { LocalAuthGuard } from './guards/localauth.guard';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: LoginAuthDto): Promise<any> {
    return this.authService.authenticate(loginDto.email, loginDto.password);
  }

  @Post('register')
  async register(@Body() registerationData: RegisterDto): Promise<Usuario> {
    return this.authService.registerUser(registerationData);
  }
}
