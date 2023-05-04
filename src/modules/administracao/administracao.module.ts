import { Module } from '@nestjs/common';
import { EquipesController } from './controllers/equipes.controller';
import { EquipesService } from './services/equipes.service';
import { UsuariosController } from './controllers/usuarios.controller';
import { UsuariosService } from './services/usuarios.service';
import { GruposController } from './controllers/grupos.controller';
import { GruposService } from './services/grupos.service';
import { PermissoesController } from './controllers/permissoes.controller';
import { PermissoesService } from './services/permissoes.service';
import { ConfiguracoesController } from './controllers/configuracoes.controller';
import { ConfiguracoesService } from './services/configuracoes.service';

@Module({
  controllers: [EquipesController, UsuariosController, GruposController, PermissoesController, ConfiguracoesController],
  providers: [EquipesService, UsuariosService, GruposService, PermissoesService, ConfiguracoesService],
})
export class AdministracaoModule {}
