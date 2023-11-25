import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Instalacaodigital } from './instalacaodigital.entity';
@Index('coletordigital_pkey', ['id'], { unique: true })
@Index('ix_coletordigital_fk_coletordigital_idinstalacao', ['idinstalacao'], {})
@Entity('coletordigital', { schema: 'public' })
export class Coletordigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'modelo', nullable: true, length: 255 })
  modelo: string | null;

  @Column('integer', { name: 'idinstalacao', nullable: true })
  idinstalacao: number | null;

  @ManyToOne(() => Instalacaodigital, (instalacaodigital) => instalacaodigital.coletordigitals)
  @JoinColumn([{ name: 'idinstalacao', referencedColumnName: 'id' }])
  idinstalacao2: Instalacaodigital;
}
