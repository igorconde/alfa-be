import { Usuario } from '@modules/usuario/entities/usuario.entity';
import { UsuarioService } from '@modules/usuario/usuario.service';
import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

const ERROR_EMAIL_PASSWORD_MISSING = 'E-mail e senha devem ser fornecidos';
const ERROR_USER_NOT_FOUND = 'Usuário não encontrado';
const ERROR_INVALID_CREDENTIALS = 'Credenciais inválidas';
const ERROR_INTERNAL_SERVER = 'Erro interno do servidor';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private readonly usuarioService: UsuarioService) {}

  async authenticate(email: string, password: string): Promise<Usuario | null> {
    if (!email || !password) {
      throw new BadRequestException(ERROR_EMAIL_PASSWORD_MISSING);
    }

    const [user] = await this.usuarioService.findBy({ email }, ['role', 'role.permission']);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async signIn(usernameOrEmail: string, password: string): Promise<Usuario> {
    const isEmail = usernameOrEmail.includes('@');
    let user: Usuario | null = null;

    if (isEmail) {
      [user] = await this.usuarioService.findBy({ email: usernameOrEmail }, ['role', 'role.permission']);
    }

    if (!user) {
      throw new NotFoundException(ERROR_USER_NOT_FOUND);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new ForbiddenException(ERROR_INVALID_CREDENTIALS);
    }

    return user;
  }

  async registerUser(registrationData: RegisterDto): Promise<Usuario> {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);

    const createdUser = await this.usuarioService.create({
      ...registrationData,
      password: hashedPassword,
    });

    if (!createdUser) {
      this.logger.error(ERROR_INTERNAL_SERVER);
      throw new HttpException(ERROR_INTERNAL_SERVER, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    this.logger.log(`Usuário registrado com sucesso: ${createdUser.email}`);

    return createdUser;
  }
}
