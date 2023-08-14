import { RegisterDto } from './dto/register.dto';
import { Body, Controller, Get, InternalServerErrorException, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Usuario } from '../usuario/entities/usuario.entity';
import { LogInWithCredentialsGuard } from './guards/local-auth.guard';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Request, Response } from 'express';
import { PublicRoute } from '../core/decorators/public-route.decorator';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Autenticar usuário', description: 'Retorna o objeto de usuário autenticado' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Objeto de usuário autenticado', type: Usuario })
  @Get('/me')
  async authenticate(@Req() request: any): Promise<any> {
    return { data: request.user };
  }

  @ApiOperation({
    summary: 'Login de usuário',
    description: 'Faz login do usuário e retorna o objeto de usuário autenticado',
  })
  @PublicRoute()
  @UseGuards(LogInWithCredentialsGuard)
  @ApiResponse({ status: 200, description: 'Objeto de usuário autenticado', type: Usuario })
  @ApiResponse({ status: 401, description: 'Não autorizado' })
  @Post('login')
  async login(@Body() loginDto: LoginAuthDto): Promise<Usuario> {
    const { email, password } = loginDto;
    return await this.authService.authenticate(email, password);
  }

  @ApiOperation({ summary: 'Logout de usuário', description: 'Faz logout do usuário autenticado' })
  @PublicRoute()
  @ApiResponse({ status: 200, description: 'Logout bem-sucedido' })
  @ApiResponse({ status: 500, description: 'Não foi possível fazer logout do usuário' })
  @Post('logout')
  async logout(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
    const logoutError = await new Promise<Error | undefined>((resolve) =>
      request.logOut({ keepSessionInfo: false }, (error) => resolve(error)),
    );

    if (logoutError) {
      throw new InternalServerErrorException('Não foi possível fazer logout do usuário');
    }

    response.clearCookie('connect.sid', {
      path: '/',
    });

    return {
      logout: true,
    };
  }

  @ApiOperation({
    summary: 'Registro de usuário',
    description: 'Registra um novo usuário e retorna o objeto de usuário registrado',
  })
  @PublicRoute()
  @ApiResponse({ status: 201, description: 'Objeto de usuário registrado', type: Usuario })
  @ApiResponse({ status: 400, description: 'Solicitação inválida' })
  @ApiResponse({ status: 409, description: 'Conflito' })
  @Post('register')
  async register(@Body() registrationData: Readonly<RegisterDto>): Promise<Usuario> {
    return await this.authService.registerUser(registrationData);
  }
}
