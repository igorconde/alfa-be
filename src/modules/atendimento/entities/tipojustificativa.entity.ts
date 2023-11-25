import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentojustificativa } from './atendimentojustificativa.entity';

@Index('tipojustificativa_pkey', ['id'], { unique: true })
@Entity('tipojustificativa', { schema: 'public' })
export class Tipojustificativa {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 45,
  })
  descricao: string | null;

  @OneToMany(() => Atendimentojustificativa, (atendimentojustificativa) => atendimentojustificativa.idtipojustificativa2)
  atendimentojustificativas: Atendimentojustificativa[];
}
