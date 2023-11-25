import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoartefatosinstalacaopraticabdigital } from './Anexoartefatosinstalacaopraticabdigital';
import { Artefatokitdigital } from './Artefatokitdigital';
import { Atendimentopraticabdigital } from './Atendimentopraticabdigital';
import { Instalacaodigital } from './Instalacaodigital';

@Index('artefatosinstalacaopraticabdigital_pkey', ['id'], { unique: true })
@Index('rtftsnstlcprtcbdgtalfkrtftsnstlcprtcbdgitalidatendimentopratica', ['idatendimentopratica'], {})
@Entity('artefatosinstalacaopraticabdigital', { schema: 'public' })
export class Artefatosinstalacaopraticabdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @OneToMany(() => Anexoartefatosinstalacaopraticabdigital, (anexoartefatosinstalacaopraticabdigital) => anexoartefatosinstalacaopraticabdigital.idartefatosinstalacao2)
  anexoartefatosinstalacaopraticabdigitals: Anexoartefatosinstalacaopraticabdigital[];

  @OneToMany(() => Artefatokitdigital, (artefatokitdigital) => artefatokitdigital.idartefatosinstalacao2)
  artefatokitdigitals: Artefatokitdigital[];

  @ManyToOne(() => Atendimentopraticabdigital, (atendimentopraticabdigital) => atendimentopraticabdigital.artefatosinstalacaopraticabdigitals)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticabdigital;

  @OneToMany(() => Instalacaodigital, (instalacaodigital) => instalacaodigital.idartefatosinstalacao2)
  instalacaodigitals: Instalacaodigital[];
}
