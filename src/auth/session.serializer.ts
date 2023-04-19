import { UsuarioService } from './../usuario/usuario.service';
import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly usuarioService: UsuarioService) {
    super();
  }

  serializeUser(user: Usuario, done: (err: Error, user: any) => void): any {
    done(null, user.id);
  }

  async deserializeUser(userId: string, done: (err: Error, payload: Usuario) => void): Promise<any> {
    const user = await this.usuarioService.findById(+userId);
    if (!user) {
      done(new Error(`Não foi encontrado usuário com o ID: ${userId}`), null);
    }
    done(null, user);
  }
}