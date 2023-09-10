import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SessionSerializer } from './session.serializer';
import { LocalStrategy } from './strategy/local.strategy';
import { Usuario } from '../usuario/entities/usuario.entity';
import { UsuarioService } from '../usuario/usuario.service';
import { CryptoUtils } from '@/core/utils/crypto.utils';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [AuthService, UsuarioService, ConfigService, SessionSerializer, LocalStrategy, CryptoUtils],
})
export class AuthModule {}
