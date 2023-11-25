import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Grupobrasilmais } from './Grupobrasilmais';

@Index('grupounidade_pkey', ['id'], { unique: true })
@Index('ix_grupounidade_fk_grupounidade_idgrupobrasilmais', ['idgrupobrasilmais'], {})
@Index('ix_grupounidade_fk_grupounidade_idunidade', ['idunidade'], {})
@Entity('grupounidade', { schema: 'public' })
export class Grupounidade {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idgrupobrasilmais', nullable: true })
  idgrupobrasilmais: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @ManyToOne(() => Grupobrasilmais, (grupobrasilmais) => grupobrasilmais.grupounidades)
  @JoinColumn([{ name: 'idgrupobrasilmais', referencedColumnName: 'id' }])
  idgrupobrasilmais2: Grupobrasilmais;

  @ManyToOne(() => Unidade, (unidade) => unidade.grupounidades)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
