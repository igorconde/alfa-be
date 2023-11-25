import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('cnae_pkey', ['id'], { unique: true })
@Entity('cnae', { schema: 'public' })
export class Cnae {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'denominacao',
    nullable: true,
    length: 255,
  })
  denominacao: string | null;

  @Column('character varying', {
    name: 'divisaofinal',
    nullable: true,
    length: 255,
  })
  divisaofinal: string | null;

  @Column('character varying', {
    name: 'divisaoinicial',
    nullable: true,
    length: 255,
  })
  divisaoinicial: string | null;

  @Column('character varying', { name: 'secao', nullable: true, length: 255 })
  secao: string | null;
}
