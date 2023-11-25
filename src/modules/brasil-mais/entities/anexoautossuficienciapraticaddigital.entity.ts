import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Autossuficienciapraticaddigital } from './Autossuficienciapraticaddigital';

@Index('anexoautossuficienciapraticaddigital_pkey', ['id'], { unique: true })
@Index('nxtssfcncprtcddigitalfknxtssfcncprtcaddigitalidautossuficiencia', ['idautossuficiencia'], {})
@Entity('anexoautossuficienciapraticaddigital', { schema: 'public' })
export class Anexoautossuficienciapraticaddigital {
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

  @Column('integer', { name: 'idautossuficiencia', nullable: true })
  idautossuficiencia: number | null;

  @ManyToOne(() => Autossuficienciapraticaddigital, (autossuficienciapraticaddigital) => autossuficienciapraticaddigital.anexoautossuficienciapraticaddigitals)
  @JoinColumn([{ name: 'idautossuficiencia', referencedColumnName: 'id' }])
  idautossuficiencia2: Autossuficienciapraticaddigital;
}
