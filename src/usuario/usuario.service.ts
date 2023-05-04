import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import getPostgresErrorMessage from 'src/infrastructure/database/postgresErrorMessages.enum';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async createUser(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const errors = await validate(createUsuarioDto);
    if (errors.length > 0) {
      throw new HttpException('Validation failed', HttpStatus.BAD_REQUEST);
    }

    try {
      return await this.usuarioRepository.save(createUsuarioDto);
    } catch (error) {
      const errorMessage = getPostgresErrorMessage(error.code);
      throw new HttpException(errorMessage, HttpStatus.BAD_REQUEST);
    }
  }

  async findBy(filter: any): Promise<Usuario[]> {
    const usuarios = await this.usuarioRepository.find(filter);

    if (!usuarios || usuarios.length === 0) {
      throw new NotFoundException('No users found');
    }

    return usuarios;
  }
}
