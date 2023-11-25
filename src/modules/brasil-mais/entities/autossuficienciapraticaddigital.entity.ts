import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoautossuficienciapraticaddigital } from './anexoautossuficienciapraticaddigital.entity';
import { Atendimentopraticaddigital } from './atendimentopraticaddigital.entity';

@Index('autossuficienciapraticaddigital_pkey', ['id'], { unique: true })
@Index('tssfcncprtcaddigitalfktssfcncprticaddigitalidatendimentopratica', ['idatendimentopratica'], {})
@Entity('autossuficienciapraticaddigital', { schema: 'public' })
export class Autossuficienciapraticaddigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'maisinfo',
    nullable: true,
    length: 255,
  })
  maisinfo: string | null;

  @Column('integer', { name: 'ordemvisita', nullable: true })
  ordemvisita: number | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idatendimentopratica', nullable: true })
  idatendimentopratica: number | null;

  @OneToMany(() => Anexoautossuficienciapraticaddigital, (anexoautossuficienciapraticaddigital) => anexoautossuficienciapraticaddigital.idautossuficiencia2)
  anexoautossuficienciapraticaddigitals: Anexoautossuficienciapraticaddigital[];

  @ManyToOne(() => Atendimentopraticaddigital, (atendimentopraticaddigital) => atendimentopraticaddigital.autossuficienciapraticaddigitals)
  @JoinColumn([{ name: 'idatendimentopratica', referencedColumnName: 'id' }])
  idatendimentopratica2: Atendimentopraticaddigital;
}
