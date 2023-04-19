import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(private readonly usuarioService: UsuarioService) {
    super();
  }

  serializeUser(usuario: Usuario, done: CallableFunction) {
    done(null, usuario.id);
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    const user = await this.usuarioService.findById(Number(userId));
    done(null, user);
  }
}
