import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Constanteindicador } from './constanteindicador.entity';

@Index('constanteprodutonacional_pkey', ['id'], { unique: true })
@Entity('constanteprodutonacional', { schema: 'public' })
export class Constanteprodutonacional {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 80,
  })
  descricao: string | null;

  @OneToMany(() => Constanteindicador, (constanteindicador) => constanteindicador.idconstanteprodutonacional2)
  constanteindicadors: Constanteindicador[];
}
