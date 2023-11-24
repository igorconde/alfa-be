import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'teste1@example.com',
    description: 'O endereço de e-mail do usuário.',
  })
  @Transform(({ value }) => value?.toLowerCase().trim())
  @IsString({ message: 'O e-mail deve ser uma string.' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  @IsEmail({}, { message: 'O formato do e-mail é inválido.' })
  email: string;

  @ApiProperty({
    description: 'A senha do usuário. Deve ter no mínimo 6 caracteres.',
  })
  @IsString({ message: 'A senha deve ser uma string.' })
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  password: string;

  @ApiProperty({
    example: 'João Maria',
    description: 'O nome completo do usuário.',
  })
  @IsString({ message: 'O nome deve ser uma string.' })
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @MaxLength(50, { message: 'O nome deve ter no máximo 50 caracteres.' })
  nome: string;
}
