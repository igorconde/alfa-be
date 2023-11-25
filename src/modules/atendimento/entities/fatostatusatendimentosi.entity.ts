import { Calendario } from '@modules/administracao/entities/calendario.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentostatussi } from './Atendimentostatussi';

@Index('fatostatusatendimentosi_pkey', ['id'], { unique: true })
@Index('ftsttsatendimentosifkftstatusatendimentosiidatendimentostatussi', ['idatendimentostatussi'], {})
@Index('fatostatusatendimentosi_fk_fatostatusatendimentosi_idcalendario', ['idcalendario'], {})
@Entity('fatostatusatendimentosi', { schema: 'public' })
export class Fatostatusatendimentosi {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', {
    name: 'idatendimentostatussi',
    nullable: true,
    default: () => '1',
  })
  idatendimentostatussi: number | null;

  @Column('integer', { name: 'idcalendario', nullable: true })
  idcalendario: number | null;

  @Column('character varying', { name: 'anomes', nullable: true, length: 255 })
  anomes: string | null;

  @ManyToOne(() => Atendimentostatussi, (atendimentostatussi) => atendimentostatussi.fatostatusatendimentosis)
  @JoinColumn([{ name: 'idatendimentostatussi', referencedColumnName: 'id' }])
  idatendimentostatussi2: Atendimentostatussi;

  @ManyToOne(() => Calendario, (calendario) => calendario.fatostatusatendimentosis)
  @JoinColumn([{ name: 'idcalendario', referencedColumnName: 'id' }])
  idcalendario2: Calendario;
}
