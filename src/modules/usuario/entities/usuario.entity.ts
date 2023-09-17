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
  username: string | null;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 200,
    comment: 'Nome do usuário do usuário.',
  })
  nome: string;

  @Column({
    nullable: false,
    default: true,
    comment: 'Situacao do usuário.',
  })
  status: boolean;

  @Column({ nullable: false, comment: 'Senha do usuário' })
  password: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 64,
    comment: 'Token de confirmação de acesso do usuário.',
  })
  confirmationToken: string;

  @OneToOne(() => RoleEntity)
  @JoinColumn()
  role: RoleEntity;

  @Column({ nullable: true })
  roleId: number;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 500,
    comment: 'refreshToken para renovar o acesso do Token.',
  })
  refreshToken: string;

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
