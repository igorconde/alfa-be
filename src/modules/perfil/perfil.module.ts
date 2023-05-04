import { Module } from '@nestjs/common';
import { PerfilController } from './controllers/perfil.controller';
import { PerfilService } from './services/perfil.service';

@Module({
  controllers: [PerfilController],
  providers: [PerfilService]
})
export class PerfilModule {}
