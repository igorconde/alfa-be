import { Setor } from '@modules/atendimento/entities/setor.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('secao_pkey', ['id'], { unique: true })
@Entity('secao', { schema: 'public' })
export class Secao {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'denominacao',
    nullable: true,
    length: 255,
  })
  denominacao: string | null;

  @Column('character varying', {
    name: 'divisaofinal',
    nullable: true,
    length: 255,
  })
  divisaofinal: string | null;

  @Column('character varying', {
    name: 'divisaoinicial',
    nullable: true,
    length: 255,
  })
  divisaoinicial: string | null;

  @Column('character varying', { name: 'secao', nullable: true, length: 255 })
  secao: string | null;

  @OneToMany(() => Setor, (setor) => setor.idsecao)
  setors: Setor[];
}
