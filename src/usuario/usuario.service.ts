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

  async findByEmail(email: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { email },
      select: ['id', 'nome', 'email', 'password', 'refreshToken'],
    });

    if (usuario) return usuario;

    throw new NotFoundException('User not found');
  }
}
