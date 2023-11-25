import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Indicadoratendimentoreferencial } from './indicadoratendimentoreferencial.entity';

@Index('indicadorreferencial_pkey', ['id'], { unique: true })
@Entity('indicadorreferencial', { schema: 'public' })
export class Indicadorreferencial {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('character varying', { name: 'formula', nullable: true, length: 255 })
  formula: string | null;

  @Column('character varying', {
    name: 'placeholder',
    nullable: true,
    length: 255,
  })
  placeholder: string | null;

  @Column('character varying', { name: 'sufixo', nullable: true, length: 255 })
  sufixo: string | null;

  @OneToMany(() => Indicadoratendimentoreferencial, (indicadoratendimentoreferencial) => indicadoratendimentoreferencial.idindicadorreferencial2)
  indicadoratendimentoreferencials: Indicadoratendimentoreferencial[];
}
