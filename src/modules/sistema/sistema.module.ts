import { Module } from '@nestjs/common';
import { ModulosController } from './controllers/modulos.controller';
import { ModulosService } from './services/modulos.service';
import { ControladoresController } from './controllers/controladores.controller';
import { ControladoresService } from './services/controladores.service';
import { FuncionalidadesController } from './controllers/funcionalidades.controller';
import { FuncionalidadesService } from './services/funcionalidades.service';
import { AuditoriaController } from './controllers/auditoria.controller';
import { AuditoriaService } from './services/auditoria.service';
import { CategoriaController } from './controllers/categoria.controller';
import { CategoriaService } from './services/categoria.service';
import { SistemaController } from './controllers/sistema.controller';
import { SistemaService } from './services/sistema.service';

@Module({
  controllers: [ModulosController, ControladoresController, FuncionalidadesController, AuditoriaController, CategoriaController, SistemaController],
  providers: [ModulosService, ControladoresService, FuncionalidadesService, AuditoriaService, CategoriaService, SistemaService]
})
export class SistemaModule {}
