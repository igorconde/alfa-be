import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('responsavel_venda_pkey', ['id'], { unique: true })
@Entity('responsavel_venda', { schema: 'public' })
export class ResponsavelVenda {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'vinculo', nullable: true, length: 255 })
  vinculo: string | null;

  @Column('character varying', {
    name: 'representante',
    nullable: true,
    length: 255,
  })
  representante: string | null;

  @Column('character varying', { name: 'exemplo', nullable: true, length: 255 })
  exemplo: string | null;

  @Column('character varying', {
    name: 'exemplos',
    nullable: true,
    length: 255,
  })
  exemplos: string | null;
}
