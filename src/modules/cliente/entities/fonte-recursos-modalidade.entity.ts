import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FonteRecursosOrigem } from './fonte-recursos-origem.entity';

@Index('fonte_recursos_modalidade_pkey', ['id'], { unique: true })
@Index('fntrcrsosmodalidadefkfntrecursosmodalidadeidfonterecursosorigem', ['idFonterecursosorigem'], {})
@Entity('fonte_recursos_modalidade', { schema: 'public' })
export class FonteRecursosModalidade {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('integer', { name: 'id_fonterecursosorigem', nullable: true })
  idFonterecursosorigem: number | null;

  @ManyToOne(() => FonteRecursosOrigem, (fonteRecursosOrigem) => fonteRecursosOrigem.fonteRecursosModalidades)
  @JoinColumn([{ name: 'id_fonterecursosorigem', referencedColumnName: 'id' }])
  idFonterecursosorigem2: FonteRecursosOrigem;
}
