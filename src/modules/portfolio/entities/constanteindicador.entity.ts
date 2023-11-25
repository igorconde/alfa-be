import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Constanteprodutonacional } from './Constanteprodutonacional';
import { Produtonacional } from './Produtonacional';

@Index('constanteindicador_pkey', ['id'], { unique: true })
@Index('cnstanteindicadorfkconstanteindicadoridconstanteprodutonacional', ['idconstanteprodutonacional'], {})
@Index('ix_constanteindicador_fk_constanteindicador_idprodutonacional', ['idprodutonacional'], {})
@Entity('constanteindicador', { schema: 'public' })
export class Constanteindicador {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('double precision', { name: 'valor', nullable: true, precision: 53 })
  valor: number | null;

  @Column('integer', { name: 'idprodutonacional', nullable: true })
  idprodutonacional: number | null;

  @Column('integer', { name: 'idconstanteprodutonacional', nullable: true })
  idconstanteprodutonacional: number | null;

  @ManyToOne(() => Constanteprodutonacional, (constanteprodutonacional) => constanteprodutonacional.constanteindicadors)
  @JoinColumn([{ name: 'idconstanteprodutonacional', referencedColumnName: 'id' }])
  idconstanteprodutonacional2: Constanteprodutonacional;

  @ManyToOne(() => Produtonacional, (produtonacional) => produtonacional.constanteindicadors)
  @JoinColumn([{ name: 'idprodutonacional', referencedColumnName: 'id' }])
  idprodutonacional2: Produtonacional;
}
