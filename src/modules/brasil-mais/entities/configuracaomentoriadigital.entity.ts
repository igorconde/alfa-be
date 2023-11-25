import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Clustermentoriadigital } from './clustermentoriadigital.entity';
import { Grupomentoriadigital } from './grupomentoriadigital.entity';

@Index('configuracaomentoriadigital_pkey', ['id'], { unique: true })
@Entity('configuracaomentoriadigital', { schema: 'public' })
export class Configuracaomentoriadigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('integer', { name: 'regional', nullable: true })
  regional: number | null;

  @OneToMany(() => Clustermentoriadigital, (clustermentoriadigital) => clustermentoriadigital.idconfiguracaomentoriadigital2)
  clustermentoriadigitals: Clustermentoriadigital[];

  @OneToMany(() => Grupomentoriadigital, (grupomentoriadigital) => grupomentoriadigital.idconfiguracaomentoriadigital2)
  grupomentoriadigitals: Grupomentoriadigital[];
}
