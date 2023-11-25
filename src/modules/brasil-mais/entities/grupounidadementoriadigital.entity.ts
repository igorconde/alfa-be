import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Grupomentoriadigital } from './Grupomentoriadigital';

@Index('grupounidadementoriadigital_pkey', ['id'], { unique: true })
@Index('grpnddmntriadigitalfkgrpnddmntoriadigitalidgrupomentoriadigital', ['idgrupomentoriadigital'], {})
@Index('grpunidadementoriadigitalfkgrupounidadementoriadigitalidunidade', ['idunidade'], {})
@Entity('grupounidadementoriadigital', { schema: 'public' })
export class Grupounidadementoriadigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'idgrupomentoriadigital', nullable: true })
  idgrupomentoriadigital: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @ManyToOne(() => Grupomentoriadigital, (grupomentoriadigital) => grupomentoriadigital.grupounidadementoriadigitals)
  @JoinColumn([{ name: 'idgrupomentoriadigital', referencedColumnName: 'id' }])
  idgrupomentoriadigital2: Grupomentoriadigital;

  @ManyToOne(() => Unidade, (unidade) => unidade.grupounidadementoriadigitals)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;
}
