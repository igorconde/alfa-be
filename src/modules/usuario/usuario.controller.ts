import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuario: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuario);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery): Promise<Paginated<Usuario>> {
    return this.usuarioService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findBy({ id: +id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuario: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuario);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.softDelete(+id);
  }
}
