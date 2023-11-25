import { Column, Entity } from 'typeorm';

@Entity('total', { schema: 'public' })
export class Total {
  @Column('bigint', { name: 'qtde', nullable: true })
  qtde: string | null;
}
