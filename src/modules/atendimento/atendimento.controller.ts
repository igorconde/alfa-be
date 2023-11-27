import { Controller, Get } from '@nestjs/common';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { AtendimentoService } from './atendimento.service';
import { Atendimento } from './entities/atendimento.entity';

@Controller('atendimento')
export class AtendimentoController {
  constructor(private readonly atendimentoService: AtendimentoService) {}

  @Get()
  async findAll(@Paginate() query: PaginateQuery): Promise<Paginated<Atendimento>> {
    const resp = await this.atendimentoService.findAll(query);

    return resp;
  }
}
