import { Unidade } from '@modules/administracao/entities/unidade.entity';
import { Telapermitida } from '@modules/common/entities/telapermitida.entity';
import { Telapermitidatemp } from '@modules/common/entities/telapermitidatemp.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Index('perfilusuario_pkey', ['id'], { unique: true })
@Index('iperfilusuarios1', ['idunidade', 'nome'], {})
@Index('iperfilusuariofkunidade', ['idunidade'], {})
@Entity('perfilusuario', { schema: 'public' })
export class Perfilusuario {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nome', nullable: true, length: 255 })
  nome: string | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @ManyToOne(() => Unidade, (unidade) => unidade.perfilusuarios)
  @JoinColumn([{ name: 'idunidade', referencedColumnName: 'id' }])
  idunidade2: Unidade;

  @OneToMany(() => Telapermitida, (telapermitida) => telapermitida.idperfilusuario2)
  telapermitidas: Telapermitida[];

  @OneToMany(() => Telapermitidatemp, (telapermitidatemp) => telapermitidatemp.idperfilusuario2)
  telapermitidatemps: Telapermitidatemp[];

  @OneToMany(() => Usuario, (usuario) => usuario.idperfilusuario2)
  usuarios: Usuario[];
}
