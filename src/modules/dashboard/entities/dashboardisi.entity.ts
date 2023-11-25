import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Rampup } from '@modules/common/entities/rampup.entity';
import { Stable } from '@modules/common/entities/stable.entity';
import { Strategic } from '@modules/common/entities/strategic.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('dashboardisi_pkey', ['id'], { unique: true })
@Index('ix_dashboardisi_fk_dashboardisi_idrampup', ['idrampup'], {})
@Index('ix_dashboardisi_fk_dashboardisi_idstable', ['idstable'], {})
@Index('ix_dashboardisi_fk_dashboardisi_idstrategic', ['idstrategic'], {})
@Index('ix_dashboardisi_fk_dashboardisi_idunidade', ['idunidade'], {})
@Entity('dashboardisi', { schema: 'public' })
export class Dashboardisi {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ano', nullable: true })
  ano: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('timestamp without time zone', {
    name: 'datacadastro',
    nullable: true,
  })
  datacadastro: Date | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('integer', { name: 'idrampup', nullable: true })
  idrampup: number | null;

  @Column('integer', { name: 'idstable', nullable: true })
  idstable: number | null;

  @Column('integer', { name: 'idstrategic', nullable: true })
  idstrategic: number | null;

  @ManyToOne(() => Rampup, (rampup) => rampup.dashboardisis)
  @JoinColumn([{ name: 'idrampup', referencedColumnName: 'id' }])
  idrampup2: Rampup;

  @ManyToOne(() => Stable, (stable) => stable.dashboardisis)
  @JoinColumn([{ name: 'idstable', referencedColumnName: 'id' }])
  idstable2: Stable;

  @ManyToOne(() => Strategic, (strategic) => strategic.dashboardisis)
  @JoinColumn([{ name: 'idstrategic', referencedColumnName: 'id' }])
  idstrategic2: Strategic;

  @ManyToOne(() => Unidade, (unidade) => unidade.dashboardisis)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
