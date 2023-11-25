import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dashboardisi } from './Dashboardisi';

@Index('strategic_pkey', ['id'], { unique: true })
@Entity('strategic', { schema: 'public' })
export class Strategic {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    name: 'audittimestamp',
    nullable: true,
  })
  audittimestamp: Date | null;

  @Column('integer', { name: 'audituser', nullable: true })
  audituser: number | null;

  @Column('character varying', {
    name: 'strategic0_actual_value',
    nullable: true,
    length: 255,
  })
  strategic0ActualValue: string | null;

  @Column('character varying', {
    name: 'strategic0_assessment',
    nullable: true,
    length: 255,
  })
  strategic0Assessment: string | null;

  @Column('character varying', {
    name: 'strategic0_forecast_value',
    nullable: true,
    length: 255,
  })
  strategic0ForecastValue: string | null;

  @Column('character varying', {
    name: 'strategic0_trend',
    nullable: true,
    length: 255,
  })
  strategic0Trend: string | null;

  @Column('character varying', {
    name: 'strategic1_actual_value',
    nullable: true,
    length: 255,
  })
  strategic1ActualValue: string | null;

  @Column('character varying', {
    name: 'strategic1_assessment',
    nullable: true,
    length: 255,
  })
  strategic1Assessment: string | null;

  @Column('character varying', {
    name: 'strategic1_forecast_value',
    nullable: true,
    length: 255,
  })
  strategic1ForecastValue: string | null;

  @Column('character varying', {
    name: 'strategic1_trend',
    nullable: true,
    length: 255,
  })
  strategic1Trend: string | null;

  @Column('character varying', {
    name: 'strategic2_actual_value',
    nullable: true,
    length: 255,
  })
  strategic2ActualValue: string | null;

  @Column('character varying', {
    name: 'strategic2_assessment',
    nullable: true,
    length: 255,
  })
  strategic2Assessment: string | null;

  @Column('character varying', {
    name: 'strategic2_forecast_value',
    nullable: true,
    length: 255,
  })
  strategic2ForecastValue: string | null;

  @Column('character varying', {
    name: 'strategic2_trend',
    nullable: true,
    length: 255,
  })
  strategic2Trend: string | null;

  @Column('character varying', {
    name: 'strategic30_actual_value',
    nullable: true,
    length: 255,
  })
  strategic30ActualValue: string | null;

  @Column('character varying', {
    name: 'strategic30_assessment',
    nullable: true,
    length: 255,
  })
  strategic30Assessment: string | null;

  @Column('character varying', {
    name: 'strategic30_forecast2_value',
    nullable: true,
    length: 255,
  })
  strategic30Forecast2Value: string | null;

  @Column('character varying', {
    name: 'strategic30_forecast_value',
    nullable: true,
    length: 255,
  })
  strategic30ForecastValue: string | null;

  @Column('character varying', {
    name: 'strategic30_trend',
    nullable: true,
    length: 255,
  })
  strategic30Trend: string | null;

  @Column('character varying', {
    name: 'strategic31_actual_value',
    nullable: true,
    length: 255,
  })
  strategic31ActualValue: string | null;

  @Column('character varying', {
    name: 'strategic31_assessment',
    nullable: true,
    length: 255,
  })
  strategic31Assessment: string | null;

  @Column('character varying', {
    name: 'strategic31_forecast2_value',
    nullable: true,
    length: 255,
  })
  strategic31Forecast2Value: string | null;

  @Column('character varying', {
    name: 'strategic31_forecast_value',
    nullable: true,
    length: 255,
  })
  strategic31ForecastValue: string | null;

  @Column('character varying', {
    name: 'strategic31_trend',
    nullable: true,
    length: 255,
  })
  strategic31Trend: string | null;

  @Column('character varying', {
    name: 'strategic32_actual_value',
    nullable: true,
    length: 255,
  })
  strategic32ActualValue: string | null;

  @Column('character varying', {
    name: 'strategic32_assessment',
    nullable: true,
    length: 255,
  })
  strategic32Assessment: string | null;

  @Column('character varying', {
    name: 'strategic32_forecast2_value',
    nullable: true,
    length: 255,
  })
  strategic32Forecast2Value: string | null;

  @Column('character varying', {
    name: 'strategic32_forecast_value',
    nullable: true,
    length: 255,
  })
  strategic32ForecastValue: string | null;

  @Column('character varying', {
    name: 'strategic32_trend',
    nullable: true,
    length: 255,
  })
  strategic32Trend: string | null;

  @Column('character varying', {
    name: 'strategic3_actual_value',
    nullable: true,
    length: 255,
  })
  strategic3ActualValue: string | null;

  @Column('character varying', {
    name: 'strategic3_assessment',
    nullable: true,
    length: 255,
  })
  strategic3Assessment: string | null;

  @Column('character varying', {
    name: 'strategic3_forecast2_value',
    nullable: true,
    length: 255,
  })
  strategic3Forecast2Value: string | null;

  @Column('character varying', {
    name: 'strategic3_forecast_value',
    nullable: true,
    length: 255,
  })
  strategic3ForecastValue: string | null;

  @Column('character varying', {
    name: 'strategic3_trend',
    nullable: true,
    length: 255,
  })
  strategic3Trend: string | null;

  @OneToMany(() => Dashboardisi, (dashboardisi) => dashboardisi.idstrategic2)
  dashboardisis: Dashboardisi[];
}
