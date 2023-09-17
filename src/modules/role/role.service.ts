import { PermissionService } from '@modules/permission/permission.service';
import { RoleEntity } from '@modules/role/entities/role.entity';
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterOperator, FilterSuffix, PaginateConfig, PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { INVALID_PERMISSIONS_MESSAGE, TRANSACTION_FAILED_MESSAGE } from './role.message';

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

    if (!permissions.length) throw new BadRequestException(INVALID_PERMISSIONS_MESSAGE);

    const role = this.roleRepository.create({ ...dto, permission: permissions });

    return this.roleRepository.manager
      .transaction(async (manager) => manager.save(RoleEntity, role))
      .catch(() => {
        throw new InternalServerErrorException(TRANSACTION_FAILED_MESSAGE);
      });
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

  async findOne(id: number): Promise<RoleEntity> {
    try {
      return await this.roleRepository.findOneOrFail({ where: { id }, relations: ['permission'] });
    } catch (error) {
      throw new NotFoundException(`Role com ID ${id} não encontrado`);
    }
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
    try {
      const role = await this.roleRepository.findOneOrFail({ where: { id }, relations: ['permission'] });
      console.log('🚀 ~ file: role.service.ts:74 ~ RoleService ~ update ~ role:', role);
      if (updateRoleDto.permissions) {
        role.permission = await this.getPermissionByIds(updateRoleDto.permissions);
      }
      return await this.roleRepository.save({ ...role, ...updateRoleDto });
    } catch {
      throw new NotFoundException(`Role com ID ${id} não encontrado`);
    }
  }

  async remove(id: number): Promise<void> {
    const result = await this.roleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Role com ID ${id} não encontrado`);
    }
  }
}
