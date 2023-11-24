import { Usuario } from '@modules/usuario/entities/usuario.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioFactoryServiceService } from './usuarios-factory.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsuarioFactoryServiceService],
  exports: [UsuarioFactoryServiceService],
})
export class UsuarioSeedModule {}
