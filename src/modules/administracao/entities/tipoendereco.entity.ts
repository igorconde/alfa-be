import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Endereco } from './endereco.entity';

@Index('tipoendereco_pkey', ['id'], { unique: true })
@Entity('tipoendereco', { schema: 'public' })
export class Tipoendereco {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Endereco, (endereco) => endereco.idtipoendereco2)
  enderecos: Endereco[];
}
