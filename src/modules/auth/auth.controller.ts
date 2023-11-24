import { Body, Controller, Get, InternalServerErrorException, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';

import { PublicRoute } from '@/core/decorators/public-route.decorator';
import { AuthService } from './auth.service';
import { LogInWithCredentialsGuard } from './guards/local-auth.guard';

import { Usuario } from '@modules/usuario/entities/usuario.entity';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterDto } from './dto/register.dto';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/me')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Autenticar usuário', description: 'Retorna os dados do usuário autenticado.' })
  @ApiResponse({ status: 200, description: 'Usuário autenticado com sucesso.', type: Usuario })
  async authenticate(@Req() request: any): Promise<any> {
    return { data: request.user };
  }

  @Post('login')
  @PublicRoute()
  @UseGuards(LogInWithCredentialsGuard)
  @ApiOperation({
    summary: 'Login de usuário',
    description: 'Realiza o login e retorna os dados do usuário autenticado.',
  })
  @ApiResponse({ status: 200, description: 'Login realizado com sucesso.', type: Usuario })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  async login(@Body() loginDto: LoginAuthDto): Promise<Usuario> {
    const { email, password } = loginDto;
    return await this.authService.authenticate(email, password);
  }

  @Post('logout')
  @PublicRoute()
  @ApiOperation({ summary: 'Logout de usuário', description: 'Desconecta o usuário atual.' })
  @ApiResponse({ status: 200, description: 'Logout realizado com sucesso.' })
  @ApiResponse({ status: 500, description: 'Erro interno ao realizar logout.' })
  async logout(@Req() request: Request, @Res({ passthrough: true }) response: Response): Promise<any> {
    const logoutError = await new Promise<Error | undefined>((resolve) => request.logOut({ keepSessionInfo: false }, (error) => resolve(error)));

    if (logoutError) {
      throw new InternalServerErrorException('Não foi possível realizar o logout.');
    }

    response.clearCookie('connect.sid', { path: '/' });
    return { logout: true };
  }

  @Post('register')
  @PublicRoute()
  @ApiOperation({ summary: 'Registro de usuário', description: 'Cadastra um novo usuário e retorna seus dados.' })
  @ApiResponse({ status: 201, description: 'Usuário registrado com sucesso.', type: Usuario })
  @ApiResponse({ status: 400, description: 'Dados de registro inválidos.' })
  @ApiResponse({ status: 409, description: 'E-mail já cadastrado.' })
  async register(@Body() registrationData: RegisterDto): Promise<Usuario> {
    return await this.authService.registerUser(registrationData);
  }
}
