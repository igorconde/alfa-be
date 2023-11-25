import { Perfilusuario } from '@modules/usuario/entities/perfil-usuario.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tela } from './tela.entity';

@Index('telapermitida_pkey', ['id'], { unique: true })
@Index('itelapermitidafkperfilusuario', ['idperfilusuario'], {})
@Index('itelapermitidafktela', ['idtela'], {})
@Entity('telapermitida', { schema: 'public' })
export class Telapermitida {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'idperfilusuario', nullable: true })
  idperfilusuario: number | null;

  @Column('integer', { name: 'idtela', nullable: true })
  idtela: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Perfilusuario, (perfilusuario) => perfilusuario.telapermitidas)
  @JoinColumn([{ name: 'idperfilusuario', referencedColumnName: 'id' }])
  idperfilusuario2: Perfilusuario;

  @ManyToOne(() => Tela, (tela) => tela.telapermitidas)
  @JoinColumn([{ name: 'idtela', referencedColumnName: 'id' }])
  idtela2: Tela;
}
