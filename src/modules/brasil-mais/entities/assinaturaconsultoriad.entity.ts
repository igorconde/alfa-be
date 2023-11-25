import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atendimentoconsultoriad } from './atendimentoconsultoriad.entity';
import { Resultadoconsultoriad } from './resultadoconsultoriad.entity';

@Index('assinaturaconsultoriad_pkey', ['id'], { unique: true })
@Index('ssntraconsultoriadfkssnturaconsultoriadidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Entity('assinaturaconsultoriad', { schema: 'public' })
export class Assinaturaconsultoriad {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

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

  @Column('integer', { name: 'idatendimentoconsultoria', nullable: true })
  idatendimentoconsultoria: number | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

  @Column('integer', { name: 'idmentor', nullable: true })
  idmentor: number | null;

  @ManyToOne(() => Atendimentoconsultoriad, (atendimentoconsultoriad) => atendimentoconsultoriad.assinaturaconsultoriads)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriad;

  @ManyToOne(() => Resultadoconsultoriad, (resultadoconsultoriad) => resultadoconsultoriad.assinaturaconsultoriads)
  @JoinColumn([{ name: 'idresultadoconsultoria', referencedColumnName: 'id' }])
  idresultadoconsultoria: Resultadoconsultoriad;
}
