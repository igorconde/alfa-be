// seu-servico.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atendimento } from './entities/atendimento.entity';

@Injectable()
export class AtendimentoService {
  constructor(
    @InjectRepository(Atendimento)
    private atendimentoRepository: Repository<Atendimento>,
  ) {}

  async findAll(): Promise<Atendimento[]> {
    return this.atendimentoRepository.find({
      take: 5,
      relations: [
        'idAtendimentoSubetapa',
        'idapl',
        'idatendimentostatus2',
        'idcliente2',
        'idprodutolinha2',
        'idprodutoregional2',
        'idregional',
        'idsolicitacaostatus',
        'idunidade2',
        'previsaoreceitas',
      ],
    });
  }
}
