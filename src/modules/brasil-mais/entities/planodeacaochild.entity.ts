import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('planodeacaochild_pkey', ['id'], { unique: true })
@Index('ix_planodeacaochild_fk_planodeacaochild_idplanodeacao', ['idplanodeacao'], {})
@Entity('planodeacaochild', { schema: 'public' })
export class Planodeacaochild {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'como', nullable: true, length: 300 })
  como: string | null;

  @Column('character varying', {
    name: 'nomeplano',
    nullable: true,
    length: 255,
  })
  nomeplano: string | null;

  @Column('character varying', { name: 'oque', nullable: true, length: 255 })
  oque: string | null;

  @Column('character varying', { name: 'onde', nullable: true, length: 255 })
  onde: string | null;

  @Column('character varying', { name: 'porque', nullable: true, length: 300 })
  porque: string | null;

  @Column('character varying', { name: 'quando', nullable: true, length: 255 })
  quando: string | null;

  @Column('character varying', { name: 'quanto', nullable: true, length: 255 })
  quanto: string | null;

  @Column('character varying', { name: 'quem', nullable: true, length: 255 })
  quem: string | null;

  @Column('integer', { name: 'idplanodeacao', nullable: true })
  idplanodeacao: number | null;

  @ManyToOne(() => Planodeacao, (planodeacao) => planodeacao.planodeacaochildren)
  @JoinColumn([{ name: 'idplanodeacao', referencedColumnName: 'id' }])
  idplanodeacao2: Planodeacao;
}
