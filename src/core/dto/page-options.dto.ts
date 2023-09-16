import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsInt, IsObject, IsOptional, IsString, Max, Min } from 'class-validator';
import { Order } from '../constants/order.constant';

export class PageOptionsDto {
  @ApiPropertyOptional({ enum: Order, default: Order.ASC })
  @IsEnum(Order)
  @IsOptional()
  readonly order?: Order = Order.ASC;

  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly page?: number = 1;

  @ApiPropertyOptional({
    minimum: 1,
    maximum: 50,
    default: 10,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  readonly take?: number = 10;

  @ApiPropertyOptional()
  readonly search?: string;

  @ApiPropertyOptional({ type: 'boolean' })
  @IsBoolean()
  @IsOptional()
  readonly export?: boolean;

  @ApiPropertyOptional({ type: 'string' })
  @IsString()
  @IsOptional()
  readonly fields?: string;

  @ApiPropertyOptional({ type: 'object' })
  @IsObject()
  @IsOptional()
  readonly filters?: Record<string, any>;

  get reqFields(): string[] {
    return this.fields ? this.fields.split(',').map((field) => field.trim()) : [];
  }

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
