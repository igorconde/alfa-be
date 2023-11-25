import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Mfvpraticab } from './Mfvpraticab';

@Index('maisinformacoesmfv_pkey', ['id'], { unique: true })
@Index('ix_maisinformacoesmfv_fk_maisinformacoesmfv_idmfv', ['idmfv'], {})
@Entity('maisinformacoesmfv', { schema: 'public' })
export class Maisinformacoesmfv {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'info', nullable: true, length: 255 })
  info: string | null;

  @Column('integer', { name: 'idmfv', nullable: true })
  idmfv: number | null;

  @ManyToOne(() => Mfvpraticab, (mfvpraticab) => mfvpraticab.maisinformacoesmfvs)
  @JoinColumn([{ name: 'idmfv', referencedColumnName: 'id' }])
  idmfv2: Mfvpraticab;
}
