import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PageOptionsDto } from '@/core/dto/page-options.dto';
import { RoleEntity } from './entities/role.entity';
import { PageDto } from '@/core/dto/page.dto';
import {
  FilterOperator,
  FilterSuffix,
  Paginate,
  PaginateConfig,
  PaginateQuery,
  Paginated,
  PaginatedSwaggerDocs,
} from 'nestjs-paginate';

const ROLE_CONFIG: PaginateConfig<RoleEntity> = {
  defaultLimit: 5,
  relations: ['permission'],
  sortableColumns: ['id', 'name'],
  nullSort: 'last',
  defaultSortBy: [['id', 'ASC']],
  searchableColumns: ['name'],
  select: ['id', 'name', 'description'],
  filterableColumns: {
    name: [FilterOperator.EQ, FilterSuffix.NOT, FilterOperator.ILIKE],
    age: true,
  },
};

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  findAll(@Query() pageOptionsDto: PageOptionsDto): Promise<PageDto<RoleEntity>> {
    return this.roleService.findAll(pageOptionsDto);
  }

  @Get('/new')
  @PaginatedSwaggerDocs(CreateRoleDto, ROLE_CONFIG)
  findAllNew(@Paginate() query: PaginateQuery): Promise<Paginated<RoleEntity>> {
    return this.roleService.findAllNestPaginate(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
