import { Atendimentofase } from '@modules/atendimento/entities/atendimentofase.entity';
import { Produtonacional } from '@modules/portfolio/entities/produtonacional.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('fase_pkey', ['id'], { unique: true })
@Index('ix_fase_fk_fase_idprodutonacional', ['idprodutonacional'], {})
@Entity('fase', { schema: 'public' })
export class Fase {
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
    length: 50,
  })
  descricao: string | null;

  @Column('integer', { name: 'idprodutonacional', nullable: true })
  idprodutonacional: number | null;

  @OneToMany(() => Atendimentofase, (atendimentofase) => atendimentofase.idfase2)
  atendimentofases: Atendimentofase[];

  @ManyToOne(() => Produtonacional, (produtonacional) => produtonacional.fases)
  @JoinColumn([{ name: 'idprodutonacional', referencedColumnName: 'id' }])
  idprodutonacional2: Produtonacional;
}
