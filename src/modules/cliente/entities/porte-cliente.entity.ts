import { Cliente, Clientebackup } from 'import { Cliente } from ';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Fatoproducaoapropriada } from './Fatoproducaoapropriada';
import { Fatoproducaoapropriadametrologia } from './Fatoproducaoapropriadametrologia';
import { Fatoreceitaapropriada } from './Fatoreceitaapropriada';
import { Fatoreceitacompetencia } from './Fatoreceitacompetencia';
@modules/cliente/entities/cliente.entity';backup';
@modules/cliente/entities/cliente.entity';.entity';

@Index('portecliente_pkey', ['id'], { unique: true })
@Entity('portecliente', { schema: 'public' })
export class Portecliente {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('integer', { name: 'numeromaximofuncionarios', nullable: true })
  numeromaximofuncionarios: number | null;

  @Column('integer', { name: 'numerominimofuncionarios', nullable: true })
  numerominimofuncionarios: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Cliente, (cliente) => cliente.idportecliente)
  clientes: Cliente[];

  @OneToMany(() => Clientebackup, (clientebackup) => clientebackup.idportecliente2)
  clientebackups: Clientebackup[];

  @OneToMany(() => Fatoproducaoapropriada, (fatoproducaoapropriada) => fatoproducaoapropriada.idportecliente2)
  fatoproducaoapropriadas: Fatoproducaoapropriada[];

  @OneToMany(() => Fatoproducaoapropriadametrologia, (fatoproducaoapropriadametrologia) => fatoproducaoapropriadametrologia.idportecliente2)
  fatoproducaoapropriadametrologias: Fatoproducaoapropriadametrologia[];

  @OneToMany(() => Fatoreceitaapropriada, (fatoreceitaapropriada) => fatoreceitaapropriada.idportecliente2)
  fatoreceitaapropriadas: Fatoreceitaapropriada[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idportecliente2)
  fatoreceitacompetencias: Fatoreceitacompetencia[];
}
