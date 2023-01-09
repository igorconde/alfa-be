import { Usuario } from 'src/usuario/entities/usuario.entity';

export class LoginResponseDto {
  token: string;
  usuario: Usuario;
}
