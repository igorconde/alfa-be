import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexomfvpraticad } from './Anexomfvpraticad';
import { Maisinformacoesmfvd } from './Maisinformacoesmfvd';
import { Atendimentopraticad } from './atendimentopraticad.entity';

@Index('mfvpraticad_pkey', ['id'], { unique: true })
@Index('ix_mfvpraticad_fk_mfvpraticad_idatendimentopratica', ['idatendimentopratica'], {})
@Entity('mfvpraticad', { schema: 'public' })
export class Mfvpraticad {
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

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'takttime', nullable: true })
  takttime: number | null;

  @Column('integer', { name: 'tipoproduto', nullable: true })
  tipoproduto: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @OneToMany(() => Anexomfvpraticad, (anexomfvpraticad) => anexomfvpraticad.idmfv2)
  anexomfvpraticads: Anexomfvpraticad[];

  @OneToMany(() => Maisinformacoesmfvd, (maisinformacoesmfvd) => maisinformacoesmfvd.idmfv2)
  maisinformacoesmfvds: Maisinformacoesmfvd[];

  @ManyToOne(() => Atendimentopraticad, (atendimentopraticad) => atendimentopraticad.mfvpraticads)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticad;
}
