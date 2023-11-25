import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Acompanhamentoa3praticacdigital } from './Acompanhamentoa3praticacdigital';
import { Conclusaoa3praticacdigital } from './Conclusaoa3praticacdigital';
import { Itema3analisepraticacdigital } from './Itema3analisepraticacdigital';
import { Itema3condicoesatuaispraticacdigital } from './Itema3condicoesatuaispraticacdigital';
import { Itema3historicopraticacdigital } from './Itema3historicopraticacdigital';
import { Itema3metaspraticacdigital } from './Itema3metaspraticacdigital';
import { Itema3praticacdigital } from './Itema3praticacdigital';
import { Itema3verificacaopraticacdigital } from './Itema3verificacaopraticacdigital';
import { Contramedidasa3praticacdigital } from './contramedidasa3praticacdigital.entity';
import { Relatorioa3praticacdigital } from './relatorioa3praticacdigital.entity';

@Index('temaa3praticacdigital_pkey', ['id'], { unique: true })
@Index('ix_temaa3praticacdigital_fk_temaa3praticacdigital_idrelatorioa3', ['idrelatorioa3'], {})
@Entity('temaa3praticacdigital', { schema: 'public' })
export class Temaa3praticacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('integer', { name: 'idrelatorioa3', nullable: true })
  idrelatorioa3: number | null;

  @OneToMany(() => Acompanhamentoa3praticacdigital, (acompanhamentoa3praticacdigital) => acompanhamentoa3praticacdigital.idtemaa)
  acompanhamentoa3praticacdigitals: Acompanhamentoa3praticacdigital[];

  @OneToMany(() => Conclusaoa3praticacdigital, (conclusaoa3praticacdigital) => conclusaoa3praticacdigital.idtemaa)
  conclusaoa3praticacdigitals: Conclusaoa3praticacdigital[];

  @OneToMany(() => Contramedidasa3praticacdigital, (contramedidasa3praticacdigital) => contramedidasa3praticacdigital.idtemaa)
  contramedidasa3praticacdigitals: Contramedidasa3praticacdigital[];

  @OneToMany(() => Itema3analisepraticacdigital, (itema3analisepraticacdigital) => itema3analisepraticacdigital.idtemaa)
  itema3analisepraticacdigitals: Itema3analisepraticacdigital[];

  @OneToMany(() => Itema3condicoesatuaispraticacdigital, (itema3condicoesatuaispraticacdigital) => itema3condicoesatuaispraticacdigital.idtemaa)
  itema3condicoesatuaispraticacdigitals: Itema3condicoesatuaispraticacdigital[];

  @OneToMany(() => Itema3historicopraticacdigital, (itema3historicopraticacdigital) => itema3historicopraticacdigital.idtemaa)
  itema3historicopraticacdigitals: Itema3historicopraticacdigital[];

  @OneToMany(() => Itema3metaspraticacdigital, (itema3metaspraticacdigital) => itema3metaspraticacdigital.idtemaa)
  itema3metaspraticacdigitals: Itema3metaspraticacdigital[];

  @OneToMany(() => Itema3praticacdigital, (itema3praticacdigital) => itema3praticacdigital.idtemaa)
  itema3praticacdigitals: Itema3praticacdigital[];

  @OneToMany(() => Itema3verificacaopraticacdigital, (itema3verificacaopraticacdigital) => itema3verificacaopraticacdigital.idtemaa)
  itema3verificacaopraticacdigitals: Itema3verificacaopraticacdigital[];

  @ManyToOne(() => Relatorioa3praticacdigital, (relatorioa3praticacdigital) => relatorioa3praticacdigital.temaa3praticacdigitals)
  @JoinColumn([{ name: 'idrelatorioa3', referencedColumnName: 'id' }])
  idrelatorioa: Relatorioa3praticacdigital;
}
