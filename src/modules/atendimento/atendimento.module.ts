import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtendimentoController } from './atendimento.controller';
import { AtendimentoService } from './atendimento.service';
import { Atendimento } from './entities/atendimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Atendimento])],
  controllers: [AtendimentoController],
  providers: [AtendimentoService],
})
export class AtendimentoModule {}
