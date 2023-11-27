// seu-servico.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateConfig, PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { Atendimento } from './entities/atendimento.entity';

@Injectable()
export class AtendimentoService {
  constructor(
    @InjectRepository(Atendimento)
    private atendimentoRepository: Repository<Atendimento>,
  ) {}

  async findAll(query: PaginateQuery): Promise<Paginated<Atendimento>> {
    const paginateConfig: PaginateConfig<Atendimento> = {
      defaultLimit: 20,
      sortableColumns: ['id', 'titulo'],
      nullSort: 'last',
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['titulo', 'id'],
      select: [],
      filterableColumns: {},
    };

    const queryBuilder = this.atendimentoRepository
      .createQueryBuilder('atendimento')
      .leftJoinAndSelect('atendimento.idAtendimentoSubetapa', 'idAtendimentoSubetapa')
      .leftJoinAndSelect('atendimento.idapl', 'idapl')
      .leftJoinAndSelect('atendimento.idatendimentostatus2', 'idatendimentostatus2')
      .leftJoinAndSelect('atendimento.idcliente2', 'idcliente2')
      .leftJoinAndSelect('atendimento.idprodutolinha2', 'idprodutolinha2')
      .leftJoinAndSelect('atendimento.idprodutoregional2', 'idprodutoregional2')
      .leftJoinAndSelect('atendimento.idregional', 'idregional')
      .leftJoinAndSelect('atendimento.idsolicitacaostatus', 'idsolicitacaostatus')
      .leftJoinAndSelect('atendimento.unidade', 'unidade')
      .leftJoinAndSelect('atendimento.previsaoreceitas', 'previsaoreceitas');

    const result = await paginate<Atendimento>(query, queryBuilder, paginateConfig);

    return result;
  }
}
