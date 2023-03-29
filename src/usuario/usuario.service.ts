import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async createUser(createUsuarioDto: CreateUsuarioDto): Promise<Usuario | null> {
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
      throw new HttpException(`Could not find user with matching id ${id}`, HttpStatus.NOT_FOUND);
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

  async getByEmail(email: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { email },
      select: ['id', 'nome', 'email', 'password', 'refreshToken'],
    });

    if (usuario) return usuario;

    throw new NotFoundException('User not found');
  }

  async getByUsername(username: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { username },
      select: ['id', 'nome', 'email', 'password', 'refreshToken'],
    });

    if (usuario) return usuario;

    throw new NotFoundException('User not found');
  }
}
