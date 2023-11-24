import { IsIn, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { MethodList } from '../../../core/config/permission-config';

const methodListArray = [MethodList.GET, MethodList.POST, MethodList.ANY, MethodList.DELETE, MethodList.OPTIONS, MethodList.OPTIONS];

export class CreatePermissionDto {
  @IsNotEmpty({ message: 'O campo "resource" é obrigatório.' })
  @IsString({ message: 'O campo "resource" deve ser uma string.' })
  @MaxLength(50, { message: 'O campo "resource" deve ter no máximo 50 caracteres.' })
  resource: string;

  @IsNotEmpty({ message: 'O campo "description" é obrigatório.' })
  @IsString({ message: 'O campo "description" deve ser uma string.' })
  description: string;

  @IsNotEmpty({ message: 'O campo "path" é obrigatório.' })
  @IsString({ message: 'O campo "path" deve ser uma string.' })
  @MaxLength(50, { message: 'O campo "path" deve ter no máximo 50 caracteres.' })
  path: string;

  @IsNotEmpty({ message: 'O campo "method" é obrigatório.' })
  @IsIn(methodListArray, {
    message: `O campo "method" deve ser um dos seguintes valores: ${methodListArray.join(', ')}.`,
  })
  method: MethodList;
}
