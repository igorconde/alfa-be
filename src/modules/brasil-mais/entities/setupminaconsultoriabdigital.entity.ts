import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexosetupminaconsultoriabdigital } from './anexosetupminaconsultoriabdigital.entity';
import { Atendimentoconsultoriabdigital } from './atendimentoconsultoriabdigital.entity';

@Index('setupminaconsultoriabdigital_pkey', ['id'], { unique: true })
@Index('stpmncnsltrbdgitalfkstpmncnsltrbdigitalidatendimentoconsultoria', ['idatendimentoconsultoria'], {})
@Entity('setupminaconsultoriabdigital', { schema: 'public' })
export class Setupminaconsultoriabdigital {
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

  @Column('integer', { name: 'idatendimentoconsultoria', nullable: true })
  idatendimentoconsultoria: number | null;

  @OneToMany(() => Anexosetupminaconsultoriabdigital, (anexosetupminaconsultoriabdigital) => anexosetupminaconsultoriabdigital.idsetupmina2)
  anexosetupminaconsultoriabdigitals: Anexosetupminaconsultoriabdigital[];

  @ManyToOne(() => Atendimentoconsultoriabdigital, (atendimentoconsultoriabdigital) => atendimentoconsultoriabdigital.setupminaconsultoriabdigitals)
  @JoinColumn([{ name: 'idatendimentoconsultoria', referencedColumnName: 'id' }])
  idatendimentoconsultoria2: Atendimentoconsultoriabdigital;
}
