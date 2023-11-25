import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexodesperdiciopraticab } from './anexodesperdiciopraticab.entity';
import { Atendimentopraticab } from './atendimentopraticab.entity';

@Index('desperdiciomasterb_pkey', ['id'], { unique: true })
@Index('desperdiciomasterb_fk_desperdiciomasterb_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('desperdiciomasterb', { schema: 'public' })
export class Desperdiciomasterb {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @OneToMany(() => Anexodesperdiciopraticab, (anexodesperdiciopraticab) => anexodesperdiciopraticab.iddesperdicio)
  anexodesperdiciopraticabs: Anexodesperdiciopraticab[];

  @ManyToOne(() => Atendimentopraticab, (atendimentopraticab) => atendimentopraticab.desperdiciomasterbs)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticab;
}
