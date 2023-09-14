import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PageMetaDtoParameters } from '../interfaces/page-meta-dto-parameters.interface';

export class PageMetaDto {
  @ApiProperty()
  readonly page: number;

  @ApiProperty()
  readonly take: number;

  @ApiProperty()
  readonly itemCount: number;

  @ApiProperty()
  readonly pageCount: number;

  @ApiProperty()
  readonly hasPreviousPage: boolean;

  @ApiProperty()
  readonly hasNextPage: boolean;

  @ApiPropertyOptional()
  readonly search?: string;

  @ApiPropertyOptional({ type: 'boolean' })
  readonly export?: boolean;

  @ApiPropertyOptional({ type: 'array', items: { type: 'string' } })
  readonly fields?: string[];

  @ApiPropertyOptional({ type: 'object' })
  readonly filters?: Record<string, any>;

  constructor({ pageOptionsDto, itemCount }: PageMetaDtoParameters) {
    this.page = pageOptionsDto.page;
    this.take = pageOptionsDto.take;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
    this.search = pageOptionsDto.search;
    this.export = pageOptionsDto.export;
    this.fields = pageOptionsDto.reqFields;
    this.filters = pageOptionsDto.filters;
  }
}
