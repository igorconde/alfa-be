import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly usuarioService: UsuarioService) {
    super();
  }

  serializeUser(user: Usuario, done: (err: Error, user: any) => void): any {
    done(null, user.id);
  }

  async deserializeUser(userId: string, done: (err: Error, payload: Usuario) => void): Promise<any> {
    const [usuario] = await this.usuarioService.findBy({ id: +userId }, ['role', 'role.permission']);
    if (!usuario) {
      done(new Error(`Não foi encontrado usuário com o ID: ${userId}`), null);
    }
    done(null, usuario);
  }
}
