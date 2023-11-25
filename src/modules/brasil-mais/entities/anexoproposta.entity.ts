import { Proposta } from '@modules/atendimento/entities/proposta.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('anexoproposta_pkey', ['id'], { unique: true })
@Index('ianexopropostafkproposta', ['idproposta'], {})
@Entity('anexoproposta', { schema: 'public' })
export class Anexoproposta {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'nomearquivo',
    nullable: true,
    length: 255,
  })
  nomearquivo: string | null;

  @Column('bigint', { name: 'tamanho', nullable: true })
  tamanho: string | null;

  @Column('character varying', { name: 'tipo', nullable: true, length: 255 })
  tipo: string | null;

  @Column('character varying', { name: 'url', nullable: true, length: 255 })
  url: string | null;

  @Column('integer', { name: 'idproposta', nullable: true })
  idproposta: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Proposta, (proposta) => proposta.anexopropostas)
  @JoinColumn([{ name: 'idproposta', referencedColumnName: 'id' }])
  idproposta2: Proposta;
}
