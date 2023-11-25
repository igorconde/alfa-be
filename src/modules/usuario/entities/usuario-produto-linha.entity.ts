import { Produtolinha } from '@modules/portfolio/entities/produtolinha.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Index('usuarioprodutolinha_pkey', ['id'], { unique: true })
@Index('iusuarioprodutolinhafkprodutolinha', ['idprodutolinha'], {})
@Index('iusuarioprodutolinhafkusuario', ['idusuario'], {})
@Entity('usuarioprodutolinha', { schema: 'public' })
export class Usuarioprodutolinha {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idusuario', nullable: true })
  idusuario: number | null;

  @Column('integer', { name: 'idprodutolinha', nullable: true })
  idprodutolinha: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Produtolinha, (produtolinha) => produtolinha.usuarioprodutolinhas)
  @JoinColumn([{ name: 'idprodutolinha', referencedColumnName: 'id' }])
  idprodutolinha2: Produtolinha;

  @ManyToOne(() => Usuario, (usuario) => usuario.usuarioprodutolinhas)
  @JoinColumn([{ name: 'idusuario', referencedColumnName: 'id' }])
  idusuario2: Usuario;
}
