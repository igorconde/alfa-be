import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { RoleEntity } from '../../role/entities/role.entity';
import { UsuarioSituacao } from '../enums/usuario-situacao.enum';

@Entity()
@Unique(['email'])
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 200,
    comment: 'Email do usuário.',
  })
  email: string | null;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 200,
    comment: 'Username',
  })
  login: string | null;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 200,
    comment: 'Nome do usuário do usuário.',
  })
  nome: string;

  @Column({ nullable: true, type: 'enum', enum: UsuarioSituacao, default: UsuarioSituacao.ATIVO })
  situacao: UsuarioSituacao;

  @Exclude({
    toPlainOnly: true,
  })
  @Column({ nullable: false, comment: 'Senha do usuário' })
  password: string;

  @OneToOne(() => RoleEntity)
  @JoinColumn()
  role: RoleEntity;

  @Column({ nullable: true })
  roleId: number;

  @Exclude({
    toPlainOnly: true,
  })
  @Column({
    nullable: true,
    type: 'varchar',
    length: 64,
    comment: 'Token em caso de esquecer a senha',
  })
  recoverToken: string;

  @CreateDateColumn({
    comment: 'Data da criação do usuário.',
  })
  criadoEm: Date;

  @UpdateDateColumn({
    comment: 'Data da atualização do usuário.',
  })
  atualizadoEm: Date;

  @DeleteDateColumn()
  desativadoEm: Date;
}
