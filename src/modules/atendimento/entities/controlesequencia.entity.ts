import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Unidade } from './Unidade';

@Index('controlesequencia_pkey', ['id'], { unique: true })
@Index('icontrolesequenciafkunidade', ['idunidade'], {})
@Entity('controlesequencia', { schema: 'public' })
export class Controlesequencia {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'campo', nullable: true, length: 255 })
  campo: string | null;

  @Column('character varying', { name: 'classe', nullable: true, length: 255 })
  classe: string | null;

  @Column('integer', { name: 'sequenciaatual', nullable: true })
  sequenciaatual: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Unidade, (unidade) => unidade.controlesequencias)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
