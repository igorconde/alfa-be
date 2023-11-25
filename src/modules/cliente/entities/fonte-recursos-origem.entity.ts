import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FonteRecursosModalidade } from './fonte-recursos-modalidade.entity';

@Index('fonte_recursos_origem_pkey', ['id'], { unique: true })
@Entity('fonte_recursos_origem', { schema: 'public' })
export class FonteRecursosOrigem {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @OneToMany(() => FonteRecursosModalidade, (fonteRecursosModalidade) => fonteRecursosModalidade.idFonterecursosorigem2)
  fonteRecursosModalidades: FonteRecursosModalidade[];
}
