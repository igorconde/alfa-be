import { Usuario } from '@modules/usuario/entities/usuario.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioFactoryServiceService {
  constructor(
    @InjectRepository(Usuario)
    private repoUsuario: Repository<Usuario>,
  ) {}

  async run() {
    await this.repoUsuario.save(
      this.repoUsuario.create({
        nome: 'Administrador',
        password: '123456',
        email: 'admin@teste.com',
        roleId: 2,
        status: true,
      }),
    );

    //console.log(`Teste: ${faker.animal.bear()}}`);

    console.log('RUNNING USUARIOS FACTORY SERVICE');
  }
}
