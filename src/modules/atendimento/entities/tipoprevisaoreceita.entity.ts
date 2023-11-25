import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Fatoreceitaapropriada } from './Fatoreceitaapropriada';
import { Fatoreceitacompetencia } from './Fatoreceitacompetencia';
import { Previsaoreceita } from './Previsaoreceita';

@Index('tipoprevisaoreceita_pkey', ['id'], { unique: true })
@Entity('tipoprevisaoreceita', { schema: 'public' })
export class Tipoprevisaoreceita {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'descricao',
    nullable: true,
    length: 255,
  })
  descricao: string | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @OneToMany(() => Fatoreceitaapropriada, (fatoreceitaapropriada) => fatoreceitaapropriada.idtipoprevisaoreceita2)
  fatoreceitaapropriadas: Fatoreceitaapropriada[];

  @OneToMany(() => Fatoreceitacompetencia, (fatoreceitacompetencia) => fatoreceitacompetencia.idtipoprevisaoreceita2)
  fatoreceitacompetencias: Fatoreceitacompetencia[];

  @OneToMany(() => Previsaoreceita, (previsaoreceita) => previsaoreceita.idtipoprevisaoreceita2)
  previsaoreceitas: Previsaoreceita[];
}
