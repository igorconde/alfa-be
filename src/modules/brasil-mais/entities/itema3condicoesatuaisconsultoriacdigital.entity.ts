import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Anexoitema3condicoesatuaisconsultoriacdigital } from './anexoitema3condicoesatuaisconsultoriacdigital.entity';
import { Temaa3consultoriacdigital } from './temaa3consultoriacdigital.entity';

@Index('itema3condicoesatuaisconsultoriacdigital_pkey', ['id'], {
  unique: true,
})
@Index('tm3cndcstscnsltriacdigitalfktm3cndcstscnsltoriacdigitalidtemaa3', ['idtemaa3'], {})
@Entity('itema3condicoesatuaisconsultoriacdigital', { schema: 'public' })
export class Itema3condicoesatuaisconsultoriacdigital {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'coditem', nullable: true })
  coditem: number | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('integer', { name: 'status', nullable: true })
  status: number | null;

  @Column('integer', { name: 'idtemaa3', nullable: true })
  idtemaa3: number | null;

  @OneToMany(() => Anexoitema3condicoesatuaisconsultoriacdigital, (anexoitema3condicoesatuaisconsultoriacdigital) => anexoitema3condicoesatuaisconsultoriacdigital.iditema)
  anexoitema3condicoesatuaisconsultoriacdigitals: Anexoitema3condicoesatuaisconsultoriacdigital[];

  @ManyToOne(() => Temaa3consultoriacdigital, (temaa3consultoriacdigital) => temaa3consultoriacdigital.itema3condicoesatuaisconsultoriacdigitals)
  @JoinColumn([{ name: 'idtemaa3', referencedColumnName: 'id' }])
  idtemaa: Temaa3consultoriacdigital;
}
