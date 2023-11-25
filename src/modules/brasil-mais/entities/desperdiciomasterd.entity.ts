import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexodesperdiciopraticad } from './Anexodesperdiciopraticad';
import { Atendimentopraticad } from './atendimentopraticad.entity';

@Index('desperdiciomasterd_pkey', ['id'], { unique: true })
@Index('desperdiciomasterd_fk_desperdiciomasterd_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('desperdiciomasterd', { schema: 'public' })
export class Desperdiciomasterd {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @OneToMany(() => Anexodesperdiciopraticad, (anexodesperdiciopraticad) => anexodesperdiciopraticad.iddesperdicio2)
  anexodesperdiciopraticads: Anexodesperdiciopraticad[];

  @ManyToOne(() => Atendimentopraticad, (atendimentopraticad) => atendimentopraticad.desperdiciomasterds)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticad;
}
