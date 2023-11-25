import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexomfvpratica } from './anexomfvpratica.entity';
import { Atendimentopraticab } from './atendimentopraticab.entity';
import { Maisinformacoesmfv } from './maisinformacoesmfv.entity';

@Index('mfvpraticab_pkey', ['id'], { unique: true })
@Index('ix_mfvpraticab_fk_mfvpraticab_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('mfvpraticab', { schema: 'public' })
export class Mfvpraticab {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('boolean', { name: 'islinhagargalofabrica', nullable: true })
  islinhagargalofabrica: boolean | null;

  @Column('integer', { name: 'leadtime', nullable: true })
  leadtime: number | null;

  @Column('character varying', {
    name: 'linhaproducaointervencao',
    nullable: true,
    length: 255,
  })
  linhaproducaointervencao: string | null;

  @Column('character varying', {
    name: 'mainprodutolinha',
    nullable: true,
    length: 255,
  })
  mainprodutolinha: string | null;

  @Column('character varying', {
    name: 'motivolinhaproducao',
    nullable: true,
    length: 255,
  })
  motivolinhaproducao: string | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'takttime', nullable: true })
  takttime: number | null;

  @Column('integer', { name: 'tipoproduto', nullable: true })
  tipoproduto: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @OneToMany(() => Anexomfvpratica, (anexomfvpratica) => anexomfvpratica.idmfv2)
  anexomfvpraticas: Anexomfvpratica[];

  @OneToMany(() => Maisinformacoesmfv, (maisinformacoesmfv) => maisinformacoesmfv.idmfv2)
  maisinformacoesmfvs: Maisinformacoesmfv[];

  @ManyToOne(() => Atendimentopraticab, (atendimentopraticab) => atendimentopraticab.mfvpraticabs)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticab;
}
