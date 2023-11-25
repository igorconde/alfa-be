import { Atendimento } from '@modules/atendimento/entities/atendimento.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Indicadorreferencial } from './Indicadorreferencial';
import { Solicitacaostatus } from './Solicitacaostatus';

@Index('indicadoratendimentoreferencial_pkey', ['id'], { unique: true })
@Index('ndcdrtndmntoreferencialfkndcdrtndimentoreferencialidatendimento', ['idatendimento'], {})
@Index('ndcdrtndmntrfrncialfkndcdrtndmntrfrencialidindicadorreferencial', ['idindicadorreferencial'], {})
@Index('ndcdrtndmntrfrencialfkndcdrtndmntreferencialidsolicitacaostatus', ['idsolicitacaostatus'], {})
@Entity('indicadoratendimentoreferencial', { schema: 'public' })
export class Indicadoratendimentoreferencial {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('double precision', { name: 'valor', nullable: true, precision: 53 })
  valor: number | null;

  @Column('integer', { name: 'idatendimento', nullable: true })
  idatendimento: number | null;

  @Column('integer', { name: 'idindicadorreferencial', nullable: true })
  idindicadorreferencial: number | null;

  @Column('integer', { name: 'idsolicitacaostatus', nullable: true })
  idsolicitacaostatus: number | null;

  @Column('double precision', {
    name: 'medicaofinal',
    nullable: true,
    precision: 53,
  })
  medicaofinal: number | null;

  @Column('double precision', {
    name: 'medicaoinicial',
    nullable: true,
    precision: 53,
  })
  medicaoinicial: number | null;

  @Column('double precision', {
    name: 'resultado',
    nullable: true,
    precision: 53,
  })
  resultado: number | null;

  @ManyToOne(() => Atendimento, (atendimento) => atendimento.indicadoratendimentoreferencials)
  @JoinColumn([{ name: 'idatendimento', referencedColumnName: 'id' }])
  idatendimento2: Atendimento;

  @ManyToOne(() => Indicadorreferencial, (indicadorreferencial) => indicadorreferencial.indicadoratendimentoreferencials)
  @JoinColumn([{ name: 'idindicadorreferencial', referencedColumnName: 'id' }])
  idindicadorreferencial2: Indicadorreferencial;

  @ManyToOne(() => Solicitacaostatus, (solicitacaostatus) => solicitacaostatus.indicadoratendimentoreferencials)
  @JoinColumn([{ name: 'idsolicitacaostatus', referencedColumnName: 'id' }])
  idsolicitacaostatus2: Solicitacaostatus;
}
