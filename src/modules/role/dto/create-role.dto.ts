import { IsNotExist } from '@/core/validators/is-not-exists.validator';
import { IsArray, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength, Validate } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @IsString({ message: 'O nome deve ser uma string' })
  @MinLength(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
  @MaxLength(100, { message: 'O nome deve ter no máximo 100 caracteres' })
  @Validate(IsNotExist, ['RoleEntity'], {
    message: 'O nome informado já existe',
  })
  name: string;

  @IsString({ message: 'A descrição deve ser uma string' })
  description: string;

  @IsArray({ message: 'As permissões devem ser um array' })
  @IsNumber({}, { each: true, message: 'Cada permissão deve ser um número' })
  permissions: number[];
}
