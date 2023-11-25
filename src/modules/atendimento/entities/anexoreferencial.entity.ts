import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoatendimentoreferencial } from './Anexoatendimentoreferencial';

@Index('anexoreferencial_pkey', ['id'], { unique: true })
@Entity('anexoreferencial', { schema: 'public' })
export class Anexoreferencial {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @OneToMany(() => Anexoatendimentoreferencial, (anexoatendimentoreferencial) => anexoatendimentoreferencial.idanexoreferencial2)
  anexoatendimentoreferencials: Anexoatendimentoreferencial[];
}
