import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelatorioController } from './relatorio.controller';
import { RelatorioService } from './relatorio.service';

@Module({
  imports: [TypeOrmModule.forFeature()],
  controllers: [RelatorioController],
  providers: [RelatorioService],
})
export class RelatorioModule {}
