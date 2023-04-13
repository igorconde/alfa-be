import { RegisterDto } from './dto/register.dto';
import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerationData: RegisterDto): Promise<Usuario> {
    return this.authService.registerUser(registerationData);
  }
}
