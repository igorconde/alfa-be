import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Agenciareguladora } from './agencia-reguladora.entity';

@Index('agencianacional_pkey', ['id'], { unique: true })
@Entity('agencianacional', { schema: 'public' })
export class Agencianacional {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @OneToMany(() => Agenciareguladora, (agenciareguladora) => agenciareguladora.idagencianacional2)
  agenciareguladoras: Agenciareguladora[];
}
