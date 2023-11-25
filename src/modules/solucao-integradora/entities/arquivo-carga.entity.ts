import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentosi } from './atendimento-si.entity';
import { Atendimentoscriticas } from './atendimentos-criticas.entity';

@Index('arquivocarga_pkey', ['id'], { unique: true })
@Index('ix_arquivocarga_fk_arquivocarga_idunidade', ['idunidade'], {})
@Entity('arquivocarga', { schema: 'public' })
export class Arquivocarga {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'anomes', nullable: true, length: 10 })
  anomes: string | null;

  @Column('bigint', { name: 'codigoarquivocarga', nullable: true })
  codigoarquivocarga: string | null;

  @Column('date', { name: 'datacarga', nullable: true })
  datacarga: string | null;

  @Column('date', { name: 'dataconsultacritica', nullable: true })
  dataconsultacritica: string | null;

  @Column('date', { name: 'datavalidacao', nullable: true })
  datavalidacao: string | null;

  @Column('integer', { name: 'processamento', nullable: true })
  processamento: number | null;

  @Column('integer', { name: 'qtdeatendimentos', nullable: true })
  qtdeatendimentos: number | null;

  @Column('integer', { name: 'qtdecriticas', nullable: true })
  qtdecriticas: number | null;

  @Column('integer', { name: 'qtdecriticasimpeditivas', nullable: true })
  qtdecriticasimpeditivas: number | null;

  @Column('integer', { name: 'satusprocessamento', nullable: true })
  satusprocessamento: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('boolean', {
    name: 'emexecucao',
    nullable: true,
    default: () => 'false',
  })
  emexecucao: boolean | null;

  @Column('boolean', {
    name: 'cargaexterna',
    nullable: true,
    default: () => 'false',
  })
  cargaexterna: boolean | null;

  @ManyToOne(() => Unidade, (unidade) => unidade.arquivocargas)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;

  @OneToMany(() => Atendimentoscriticas, (atendimentoscriticas) => atendimentoscriticas.idarquivocarga2)
  atendimentoscriticas: Atendimentoscriticas[];

  @OneToMany(() => Atendimentosi, (atendimentosi) => atendimentosi.idarquivocarga)
  atendimentosis: Atendimentosi[];
}
