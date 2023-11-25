import { Usuario } from '@modules/usuario/entities/usuario.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioFactoryServiceService {
  constructor(
    @InjectRepository(Usuario)
    private repoUsuario: Repository<Usuario>,
  ) {}

  async run() {
    const hashedPassword = await bcrypt.hash('123456', 10);

    /* The code `await this.repoUsuario.save(this.repoUsuario.create({ nome: 'Administrador do Sistema',
 password: hashedPassword, email: 'admininistrador@teste.com', roleId: 1 }))` is saving a new user
 to the database. */
    // await this.repoUsuario.save(
    //   this.repoUsuario.create({
    //     nome: 'Administrador do Sistema',
    //     password: hashedPassword,
    //     email: 'admininistrador@teste.com',
    //     roleId: 1,
    //   }),
    // );

    //console.log(`Teste: ${faker.animal.bear()}}`);

    console.log('RUNNING USUARIOS FACTORY SERVICE');
  }
}
