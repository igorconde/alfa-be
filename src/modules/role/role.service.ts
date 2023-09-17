import { PermissionService } from '@modules/permission/permission.service';
import { RoleEntity } from '@modules/role/entities/role.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterOperator, FilterSuffix, PaginateConfig, PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

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

  async findAll(query: PaginateQuery): Promise<Paginated<RoleEntity>> {
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
