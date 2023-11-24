import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Repository } from 'typeorm';

import getPostgresErrorMessage from '@/infrastructure/database/postgres-error-messages.enum';
import { FilterOperator, FilterSuffix, PaginateConfig, PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(query: PaginateQuery): Promise<Paginated<Usuario>> {
    const paginateConfig: PaginateConfig<Usuario> = {
      defaultLimit: 5,
      sortableColumns: ['id', 'email'],
      nullSort: 'last',
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['email'],
      select: ['id', 'email', 'criadoEm', 'atualizadoEm', 'desativadoEm'],
      filterableColumns: {
        email: [FilterOperator.EQ, FilterSuffix.NOT, FilterOperator.ILIKE],
      },
    };

    const queryBuilder = this.usuarioRepository.createQueryBuilder('usuario');

    const result = await paginate<Usuario>(query, queryBuilder, paginateConfig);

    return result;
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
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

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.usuarioRepository.preload({
      id,
      ...updateUsuarioDto,
    });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return await this.usuarioRepository.save(usuario);
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

  async softDelete(id: number): Promise<void> {
    const result = await this.usuarioRepository.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
  }
}
