import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexooeepraticacdigital } from './Anexooeepraticacdigital';
import { Indicadorespraticacdigital } from './indicadorespraticacdigital.entity';

@Index('oeepraticacdigital_pkey', ['id'], { unique: true })
@Index('ix_oeepraticacdigital_fk_oeepraticacdigital_idindicadores', ['idindicadores'], {})
@Entity('oeepraticacdigital', { schema: 'public' })
export class Oeepraticacdigital {
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

  @OneToMany(() => Anexooeepraticacdigital, (anexooeepraticacdigital) => anexooeepraticacdigital.idoeepratica2)
  anexooeepraticacdigitals: Anexooeepraticacdigital[];

  @ManyToOne(() => Indicadorespraticacdigital, (indicadorespraticacdigital) => indicadorespraticacdigital.oeepraticacdigitals)
  @JoinColumn([{ name: 'idindicadores', referencedColumnName: 'id' }])
  idindicadores2: Indicadorespraticacdigital;
}
