import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Processoprodutivoalinhamentobdigital } from './Processoprodutivoalinhamentobdigital';

@Index('anexoprocessoprodutivoalinhamentobdigital_pkey', ['id'], {
  unique: true,
})
@Index('nxprcssprdtvlnhmntbdgtlnxprcssprdtvlnhmntbdgtldprcssprdtvdgital', ['idprocessoprodutivodigital'], {})
@Entity('anexoprocessoprodutivoalinhamentobdigital', { schema: 'public' })
export class Anexoprocessoprodutivoalinhamentobdigital {
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

  @Column('integer', { name: 'idprocessoprodutivodigital', nullable: true })
  idprocessoprodutivodigital: number | null;

  @ManyToOne(() => Processoprodutivoalinhamentobdigital, (processoprodutivoalinhamentobdigital) => processoprodutivoalinhamentobdigital.anexoprocessoprodutivoalinhamentobdigitals)
  @JoinColumn([{ name: 'idprocessoprodutivodigital', referencedColumnName: 'id' }])
  idprocessoprodutivodigital2: Processoprodutivoalinhamentobdigital;
}
