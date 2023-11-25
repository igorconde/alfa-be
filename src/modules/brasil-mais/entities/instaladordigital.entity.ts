import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Instalacaodigital } from './Instalacaodigital';

@Index('instaladordigital_pkey', ['id'], { unique: true })
@Index('ix_instaladordigital_fk_instaladordigital_idinstalacao', ['idinstalacao'], {})
@Entity('instaladordigital', { schema: 'public' })
export class Instaladordigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('integer', { name: 'idinstalacao', nullable: true })
  idinstalacao: number | null;

  @ManyToOne(() => Instalacaodigital, (instalacaodigital) => instalacaodigital.instaladordigitals)
  @JoinColumn([{ name: 'idinstalacao', referencedColumnName: 'id' }])
  idinstalacao2: Instalacaodigital;
}
