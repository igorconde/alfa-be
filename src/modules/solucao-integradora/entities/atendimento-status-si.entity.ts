import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Fatostatusatendimentosi } from './Fatostatusatendimentosi';
import { Relatoriodn } from './Relatoriodn';

@Index('atendimentostatussi_pkey', ['id'], { unique: true })
@Entity('atendimentostatussi', { schema: 'public' })
export class Atendimentostatussi {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'chave', nullable: true, length: 45 })
  chave: string | null;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 45,
  })
  descricao: string | null;

  @OneToMany(() => Fatostatusatendimentosi, (fatostatusatendimentosi) => fatostatusatendimentosi.idatendimentostatussi2)
  fatostatusatendimentosis: Fatostatusatendimentosi[];

  @OneToMany(() => Relatoriodn, (relatoriodn) => relatoriodn.idatendimentostatussi2)
  relatoriodns: Relatoriodn[];
}
