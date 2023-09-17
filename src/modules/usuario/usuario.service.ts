import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Repository } from 'typeorm';

import getPostgresErrorMessage from '@/infrastructure/database/postgres-error-messages.enum';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';

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

  async findBy(filter: any, relations?: string[]): Promise<Usuario[]> {
    const usuarios = await this.usuarioRepository.find({
      where: filter,
      relations: relations,
    });

    if (!usuarios || usuarios.length === 0) {
      throw new NotFoundException('No users found');
    }

    return usuarios;
  }
}
