import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexooeepraticaddigital } from './anexooeepraticaddigital.entity';
import { Indicadorespraticaddigital } from './indicadorespraticaddigital.entity';

@Index('oeepraticaddigital_pkey', ['id'], { unique: true })
@Index('ix_oeepraticaddigital_fk_oeepraticaddigital_idindicadores', ['idindicadores'], {})
@Entity('oeepraticaddigital', { schema: 'public' })
export class Oeepraticaddigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', { name: 'datafinal', nullable: true })
  datafinal: Date | null;

  @Column('timestamp without time zone', {
    name: 'datainicial',
    nullable: true,
  })
  datainicial: Date | null;

  @Column('double precision', {
    name: 'disponibilidade',
    nullable: true,
    precision: 53,
  })
  disponibilidade: number | null;

  @Column('boolean', { name: 'ismanual', nullable: true })
  ismanual: boolean | null;

  @Column('double precision', {
    name: 'medicao',
    nullable: true,
    precision: 53,
  })
  medicao: number | null;

  @Column('double precision', {
    name: 'performance',
    nullable: true,
    precision: 53,
  })
  performance: number | null;

  @Column('double precision', {
    name: 'qualidade',
    nullable: true,
    precision: 53,
  })
  qualidade: number | null;

  @Column('integer', { name: 'idindicadores', nullable: true })
  idindicadores: number | null;

  @OneToMany(() => Anexooeepraticaddigital, (anexooeepraticaddigital) => anexooeepraticaddigital.idoeepratica2)
  anexooeepraticaddigitals: Anexooeepraticaddigital[];

  @ManyToOne(() => Indicadorespraticaddigital, (indicadorespraticaddigital) => indicadorespraticaddigital.oeepraticaddigitals)
  @JoinColumn([{ name: 'idindicadores', referencedColumnName: 'id' }])
  idindicadores2: Indicadorespraticaddigital;
}
