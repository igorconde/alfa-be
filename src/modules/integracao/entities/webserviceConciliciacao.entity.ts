import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('webservice_conciliciacao_pkey', ['id'], { unique: true })
@Entity('webservice_conciliciacao', { schema: 'public' })
export class WebserviceConciliciacao {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'data_cadastro_api',
    nullable: true,
  })
  dataCadastroApi: Date | null;

  @Column('integer', { name: 'idsgt', nullable: true })
  idsgt: number | null;

  @Column('integer', { name: 'idwebservice', nullable: true })
  idwebservice: number | null;

  @Column('integer', { name: 'tipoconciliacao', nullable: true })
  tipoconciliacao: number | null;
}
