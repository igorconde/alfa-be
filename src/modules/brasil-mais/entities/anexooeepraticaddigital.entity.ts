import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Oeepraticaddigital } from './oeepraticaddigital.entity';

@Index('anexooeepraticaddigital_pkey', ['id'], { unique: true })
@Index('anexooeepraticaddigital_fk_anexooeepraticaddigital_idoeepratica', ['idoeepratica'], {})
@Entity('anexooeepraticaddigital', { schema: 'public' })
export class Anexooeepraticaddigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('boolean', { name: 'isdocumento', nullable: true })
  isdocumento: boolean | null;

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

  @Column('integer', { name: 'idoeepratica', nullable: true })
  idoeepratica: number | null;

  @ManyToOne(() => Oeepraticaddigital, (oeepraticaddigital) => oeepraticaddigital.anexooeepraticaddigitals)
  @JoinColumn([{ name: 'idoeepratica', referencedColumnName: 'id' }])
  idoeepratica2: Oeepraticaddigital;
}
