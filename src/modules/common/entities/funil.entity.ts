import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('funil_pkey', ['id'], { unique: true })
@Entity('funil', { schema: 'public' })
export class Funil {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'ano', nullable: true })
  ano: number | null;

  @Column('integer', { name: 'contactsatual', nullable: true })
  contactsatual: number | null;

  @Column('integer', { name: 'contactstarget', nullable: true })
  contactstarget: number | null;

  @Column('integer', { name: 'idunidade', nullable: true })
  idunidade: number | null;

  @Column('integer', { name: 'projectscontractedtarget', nullable: true })
  projectscontractedtarget: number | null;

  @Column('integer', { name: 'requestproposalatual', nullable: true })
  requestproposalatual: number | null;

  @Column('integer', { name: 'requestproposaltarget', nullable: true })
  requestproposaltarget: number | null;

  @Column('double precision', {
    name: 'revenuegeneratedatual',
    nullable: true,
    precision: 53,
  })
  revenuegeneratedatual: number | null;

  @Column('double precision', {
    name: 'revenuegeneratedtarget',
    nullable: true,
    precision: 53,
  })
  revenuegeneratedtarget: number | null;

  @Column('integer', { name: 'submittedproposaltarget', nullable: true })
  submittedproposaltarget: number | null;

  @Column('double precision', {
    name: 'totalresourcesacquiredatual',
    nullable: true,
    precision: 53,
  })
  totalresourcesacquiredatual: number | null;

  @Column('double precision', {
    name: 'totalresourcesacquiredtarget',
    nullable: true,
    precision: 53,
  })
  totalresourcesacquiredtarget: number | null;

  @Column('integer', { name: 'visitstarget', nullable: true })
  visitstarget: number | null;
}
