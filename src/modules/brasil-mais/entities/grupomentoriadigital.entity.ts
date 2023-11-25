import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Configuracaomentoriadigital } from './Configuracaomentoriadigital';
import { Grupounidadementoriadigital } from './Grupounidadementoriadigital';

@Index('grupomentoriadigital_pkey', ['id'], { unique: true })
@Index('grpmntradigitalfkgrpmntoriadigitalidconfiguracaomentoriadigital', ['idconfiguracaomentoriadigital'], {})
@Entity('grupomentoriadigital', { schema: 'public' })
export class Grupomentoriadigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 100 })
  nome: string | null;

  @Column('integer', { name: 'regional', nullable: true })
  regional: number | null;

  @Column('integer', { name: 'idconfiguracaomentoriadigital', nullable: true })
  idconfiguracaomentoriadigital: number | null;

  @ManyToOne(() => Configuracaomentoriadigital, (configuracaomentoriadigital) => configuracaomentoriadigital.grupomentoriadigitals)
  @JoinColumn([{ name: 'idconfiguracaomentoriadigital', referencedColumnName: 'id' }])
  idconfiguracaomentoriadigital2: Configuracaomentoriadigital;

  @OneToMany(() => Grupounidadementoriadigital, (grupounidadementoriadigital) => grupounidadementoriadigital.idgrupomentoriadigital2)
  grupounidadementoriadigitals: Grupounidadementoriadigital[];
}
