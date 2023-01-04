import { Usuario } from './entities/usuario.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

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

  async findById(id: number): Promise<Usuario> {
    const user = await this.usuarioRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new HttpException(
        `Could not find user with matching id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }

    return user;
  }

  /* Hash the refresh token and save it to the database */
  async setRefreshToken(id: number, refreshToken: string): Promise<void> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
    });

    console.log('setRefreshToken', usuario);

    if (!usuario) {
      throw new Error(`Usuário com id ${id} não foi encontrado`);
    }

    usuario.refreshToken = refreshToken;
    await this.usuarioRepository.save(usuario);
  }
}
