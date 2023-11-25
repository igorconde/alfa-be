import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Mfvpraticad } from './mfvpraticad.entity';

@Index('maisinformacoesmfvd_pkey', ['id'], { unique: true })
@Index('ix_maisinformacoesmfvd_fk_maisinformacoesmfvd_idmfv', ['idmfv'], {})
@Entity('maisinformacoesmfvd', { schema: 'public' })
export class Maisinformacoesmfvd {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'info', nullable: true, length: 255 })
  info: string | null;

  @Column('integer', { name: 'idmfv', nullable: true })
  idmfv: number | null;

  @ManyToOne(() => Mfvpraticad, (mfvpraticad) => mfvpraticad.maisinformacoesmfvds)
  @JoinColumn([{ name: 'idmfv', referencedColumnName: 'id' }])
  idmfv2: Mfvpraticad;
}
