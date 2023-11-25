import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Acompanhamentoa3consultoriacdigital } from './acompanhamentoa3consultoriacdigital.entity';
import { Conclusaoa3consultoriacdigital } from './conclusaoa3consultoriacdigital.entity';
import { Contramedidasa3consultoriacdigital } from './contramedidasa3consultoriacdigital.entity';
import { Itema3analiseconsultoriacdigital } from './itema3analiseconsultoriacdigital.entity';
import { Itema3condicoesatuaisconsultoriacdigital } from './itema3condicoesatuaisconsultoriacdigital.entity';
import { Itema3consultoriacdigital } from './itema3consultoriacdigital.entity';
import { Itema3historicoconsultoriacdigital } from './itema3historicoconsultoriacdigital.entity';
import { Itema3metasconsultoriacdigital } from './itema3metasconsultoriacdigital.entity';
import { Itema3verificacaoconsultoriacdigital } from './itema3verificacaoconsultoriacdigital.entity';
import { Relatorioa3consultoriacdigital } from './relatorioa3consultoriacdigital.entity';

@Index('temaa3consultoriacdigital_pkey', ['id'], { unique: true })
@Index('tma3consultoriacdigitalfktemaa3consultoriacdigitalidrelatorioa3', ['idrelatorioa3'], {})
@Entity('temaa3consultoriacdigital', { schema: 'public' })
export class Temaa3consultoriacdigital {
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

  @OneToMany(() => Acompanhamentoa3consultoriacdigital, (acompanhamentoa3consultoriacdigital) => acompanhamentoa3consultoriacdigital.idtemaa)
  acompanhamentoa3consultoriacdigitals: Acompanhamentoa3consultoriacdigital[];

  @OneToMany(() => Conclusaoa3consultoriacdigital, (conclusaoa3consultoriacdigital) => conclusaoa3consultoriacdigital.idtemaa)
  conclusaoa3consultoriacdigitals: Conclusaoa3consultoriacdigital[];

  @OneToMany(() => Contramedidasa3consultoriacdigital, (contramedidasa3consultoriacdigital) => contramedidasa3consultoriacdigital.idtemaa)
  contramedidasa3consultoriacdigitals: Contramedidasa3consultoriacdigital[];

  @OneToMany(() => Itema3analiseconsultoriacdigital, (itema3analiseconsultoriacdigital) => itema3analiseconsultoriacdigital.idtemaa)
  itema3analiseconsultoriacdigitals: Itema3analiseconsultoriacdigital[];

  @OneToMany(() => Itema3condicoesatuaisconsultoriacdigital, (itema3condicoesatuaisconsultoriacdigital) => itema3condicoesatuaisconsultoriacdigital.idtemaa)
  itema3condicoesatuaisconsultoriacdigitals: Itema3condicoesatuaisconsultoriacdigital[];

  @OneToMany(() => Itema3consultoriacdigital, (itema3consultoriacdigital) => itema3consultoriacdigital.idtemaa)
  itema3consultoriacdigitals: Itema3consultoriacdigital[];

  @OneToMany(() => Itema3historicoconsultoriacdigital, (itema3historicoconsultoriacdigital) => itema3historicoconsultoriacdigital.idtemaa)
  itema3historicoconsultoriacdigitals: Itema3historicoconsultoriacdigital[];

  @OneToMany(() => Itema3metasconsultoriacdigital, (itema3metasconsultoriacdigital) => itema3metasconsultoriacdigital.idtemaa)
  itema3metasconsultoriacdigitals: Itema3metasconsultoriacdigital[];

  @OneToMany(() => Itema3verificacaoconsultoriacdigital, (itema3verificacaoconsultoriacdigital) => itema3verificacaoconsultoriacdigital.idtemaa)
  itema3verificacaoconsultoriacdigitals: Itema3verificacaoconsultoriacdigital[];

  @ManyToOne(() => Relatorioa3consultoriacdigital, (relatorioa3consultoriacdigital) => relatorioa3consultoriacdigital.temaa3consultoriacdigitals)
  @JoinColumn([{ name: 'idrelatorioa3', referencedColumnName: 'id' }])
  idrelatorioa: Relatorioa3consultoriacdigital;
}
