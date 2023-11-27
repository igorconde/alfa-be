import { Controller, Get } from '@nestjs/common';
import { AtendimentoService } from './atendimento.service';

@Controller('atendimento')
export class AtendimentoController {
  constructor(private readonly atendimentoService: AtendimentoService) {}

  @Get()
  async exportarExcel() {
    const resp = await this.atendimentoService.findAll();

    return resp;
  }
}
