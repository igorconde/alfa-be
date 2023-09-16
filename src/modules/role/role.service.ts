import { RoleEntity } from '@modules/role/entities/role.entity';
import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionService } from '@modules/permission/permission.service';
import { PageOptionsDto } from '@/core/dto/page-options.dto';
import { PageDto } from '@/core/dto/page.dto';
import { Repository } from 'typeorm';
import { PageMetaDto } from '@/core/dto/page-meta.dto';
import {
  FilterOperator,
  FilterSuffix,
  Paginate,
  PaginateQuery,
  paginate,
  Paginated,
  PaginateConfig,
} from 'nestjs-paginate';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
    private readonly permissionsService: PermissionService,
  ) {}

  private async getPermissionByIds(ids) {
    return ids?.length ? this.permissionsService.whereInIds(ids) : [];
  }

  async create(dto: CreateRoleDto): Promise<RoleEntity> {
    const permissions = await this.getPermissionByIds(dto.permissions);
    if (!permissions.length) throw new Error('Permissões inválidas');

    const role = this.RoleEntity.create(dto);
    role.permissions = permissions;

    return this.roleRepository.save(role);
  }

  async findAllNestPaginate(query: PaginateQuery): Promise<Paginated<RoleEntity>> {
    const paginateConfig: PaginateConfig<RoleEntity> = {
      defaultLimit: 5,
      sortableColumns: ['id', 'name'],
      nullSort: 'last',
      relations: ['permission'],
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['name'],
      select: ['id', 'name', 'description', 'permission.id', 'permission.resource', 'permission.path'],
      filterableColumns: {
        name: [FilterOperator.EQ, FilterSuffix.NOT, FilterOperator.ILIKE],
        age: true,
        'permission.path': [FilterOperator.EQ, FilterSuffix.NOT, FilterOperator.ILIKE],
      },
    };

    const queryBuilder = this.roleRepository.createQueryBuilder('role');

    const result = await paginate<any>(query, queryBuilder, paginateConfig);

    return result;
  }

  async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<RoleEntity>> {
    const { order, skip, take, search, export: shouldExport, reqFields: fields, filters } = pageOptionsDto;

    const queryBuilder = this.roleRepository.createQueryBuilder('role');

    // Seleção de campos
    if (fields && fields.length) {
      queryBuilder.select(fields);
    } else {
      queryBuilder.select(['role.id', 'role.name', 'role.description']);
    }

    // Ordenação
    queryBuilder.orderBy('role.createdAt', order);

    // Filtragem de pesquisa
    if (search) {
      queryBuilder.andWhere('role.name ILIKE :search', { search: `%${search}%` });
    }

    // Filtros adicionais
    // if (filters) {
    //   Object.entries(filters).forEach(([key, value]) => {
    //     const filterValues = value.split(',');
    //     queryBuilder.andWhere(`role.${key} IN (:...filterValues)`, { filterValues });
    //   });
    // }

    // Paginação
    queryBuilder.skip(skip).take(take);

    // Obtenção de entidades e contagem
    const [entities, itemCount] = await queryBuilder.getManyAndCount();
    console.log(queryBuilder.getSql());

    // Meta-informações
    const pageMetaDto = new PageMetaDto({
      pageOptionsDto,
      itemCount,
    });

    // Caso exportação seja solicitada
    if (shouldExport) {
      // Lógica de exportação aqui
    }

    return new PageDto(entities, pageMetaDto);
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
