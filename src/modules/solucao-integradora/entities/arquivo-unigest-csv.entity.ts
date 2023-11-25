import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('arquivounigestcsv_pkey', ['id'], { unique: true })
@Index('ix_arquivounigestcsv_fk_arquivounigestcsv_idunidade', ['idunidade'], {})
@Entity('arquivounigestcsv', { schema: 'public' })
export class Arquivounigestcsv {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'anomes', nullable: true, length: 255 })
  anomes: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('date', { name: 'data', nullable: true })
  data: string | null;

  @Column('character varying', {
    name: 'nomearquivo',
    nullable: true,
    length: 255,
  })
  nomearquivo: string | null;

  @Column('character varying', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @ManyToOne(() => Unidade, (unidade) => unidade.arquivounigestcsvs)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
