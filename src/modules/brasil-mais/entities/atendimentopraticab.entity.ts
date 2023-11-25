import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Etapapraticab } from './Etapapraticab';
import { Desperdiciomasterb } from './Desperdiciomasterb';
import { Estadopresenteb } from './Estadopresenteb';
import { Mfvpraticab } from './Mfvpraticab';
import { Visitapraticab } from './Visitapraticab';

@Index('atendimentopraticab_pkey', ['id'], { unique: true })
@Index('ix_atendimentopraticab_fk_atendimentopraticab_idetapapratica', ['idetapapratica'], {})
@Entity('atendimentopraticab', { schema: 'public' })
export class Atendimentopraticab {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'etapa', nullable: true })
  etapa: number | null;

  @Column('boolean', { name: 'finalizado', nullable: true })
  finalizado: boolean | null;

  @Column('integer', { name: 'horasapropriadas', nullable: true })
  horasapropriadas: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idetapapratica', nullable: true })
  idetapapratica: number | null;

  @Column('boolean', { name: 'cancelado', nullable: true })
  cancelado: boolean | null;

  @ManyToOne(() => Etapapraticab, (etapapraticab) => etapapraticab.atendimentopraticabs)
  @JoinColumn([{ name: 'idetapapratica', referencedColumnName: 'id' }])
  idetapapratica2: Etapapraticab;

  @OneToMany(() => Desperdiciomasterb, (desperdiciomasterb) => desperdiciomasterb.idatendimentopratica2)
  desperdiciomasterbs: Desperdiciomasterb[];

  @OneToMany(() => Estadopresenteb, (estadopresenteb) => estadopresenteb.idatendimentopratica2)
  estadopresentebs: Estadopresenteb[];

  @OneToMany(() => Mfvpraticab, (mfvpraticab) => mfvpraticab.idatendimentopratica2)
  mfvpraticabs: Mfvpraticab[];

  @OneToMany(() => Visitapraticab, (visitapraticab) => visitapraticab.idatendimentopratica2)
  visitapraticabs: Visitapraticab[];
}
