import { UsuarioSituacao } from '@modules/usuario/enums/usuario-situacao.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AuthResponseDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  login: string;

  @ApiProperty()
  nome: string;

  @ApiPropertyOptional()
  situacao: UsuarioSituacao;

  @ApiPropertyOptional()
  criadoEm: Date;

  @ApiPropertyOptional()
  atualizadoEm: Date;
}
