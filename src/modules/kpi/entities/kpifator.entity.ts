import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Kpidicionario } from './kpidicionario.entity';

@Entity('kpifator', { schema: 'public' })
export class Kpifator {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nome', length: 255 })
  nome: string;

  @OneToMany(() => Kpidicionario, (kpidicionario) => kpidicionario.idfator)
  kpidicionarios: Kpidicionario[];
}
