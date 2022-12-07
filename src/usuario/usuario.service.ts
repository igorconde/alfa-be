import { Usuario } from './entities/usuario.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async createUser(
    createUsuarioDto: CreateUsuarioDto,
  ): Promise<Usuario | null> {
    console.log(createUsuarioDto);
    try {
      return await this.usuarioRepository.save(createUsuarioDto);
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
