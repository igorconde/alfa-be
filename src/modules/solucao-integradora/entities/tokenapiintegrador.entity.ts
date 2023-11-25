import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('tokenapiintegrador_pkey', ['id'], { unique: true })
@Entity('tokenapiintegrador', { schema: 'public' })
export class Tokenapiintegrador {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'datageracao',
    nullable: true,
  })
  datageracao: Date | null;

  @Column('character varying', { name: 'token', nullable: true, length: 250 })
  token: string | null;
}
