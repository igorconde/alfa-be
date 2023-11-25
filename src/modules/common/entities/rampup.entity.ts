import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dashboardisi } from './Dashboardisi';

@Index('rampup_pkey', ['id'], { unique: true })
@Entity('rampup', { schema: 'public' })
export class Rampup {
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
    name: 'rampup00_actual_value',
    nullable: true,
    length: 255,
  })
  rampup00ActualValue: string | null;

  @Column('character varying', {
    name: 'rampup00_assessment',
    nullable: true,
    length: 255,
  })
  rampup00Assessment: string | null;

  @Column('character varying', {
    name: 'rampup00_forecast_value',
    nullable: true,
    length: 255,
  })
  rampup00ForecastValue: string | null;

  @Column('character varying', {
    name: 'rampup00_trend',
    nullable: true,
    length: 255,
  })
  rampup00Trend: string | null;

  @Column('character varying', {
    name: 'rampup01_actual_value',
    nullable: true,
    length: 255,
  })
  rampup01ActualValue: string | null;

  @Column('character varying', {
    name: 'rampup01_assessment',
    nullable: true,
    length: 255,
  })
  rampup01Assessment: string | null;

  @Column('character varying', {
    name: 'rampup01_forecast_value',
    nullable: true,
    length: 255,
  })
  rampup01ForecastValue: string | null;

  @Column('character varying', {
    name: 'rampup01_trend',
    nullable: true,
    length: 255,
  })
  rampup01Trend: string | null;

  @Column('character varying', {
    name: 'rampup0_actual_value',
    nullable: true,
    length: 255,
  })
  rampup0ActualValue: string | null;

  @Column('character varying', {
    name: 'rampup0_assessment',
    nullable: true,
    length: 255,
  })
  rampup0Assessment: string | null;

  @Column('character varying', {
    name: 'rampup0_forecast_value',
    nullable: true,
    length: 255,
  })
  rampup0ForecastValue: string | null;

  @Column('character varying', {
    name: 'rampup0_trend',
    nullable: true,
    length: 255,
  })
  rampup0Trend: string | null;

  @Column('character varying', {
    name: 'rampup10_actual_value',
    nullable: true,
    length: 255,
  })
  rampup10ActualValue: string | null;

  @Column('character varying', {
    name: 'rampup10_assessment',
    nullable: true,
    length: 255,
  })
  rampup10Assessment: string | null;

  @Column('character varying', {
    name: 'rampup10_forecast_value',
    nullable: true,
    length: 255,
  })
  rampup10ForecastValue: string | null;

  @Column('character varying', {
    name: 'rampup10_trend',
    nullable: true,
    length: 255,
  })
  rampup10Trend: string | null;

  @Column('character varying', {
    name: 'rampup11_actual_value',
    nullable: true,
    length: 255,
  })
  rampup11ActualValue: string | null;

  @Column('character varying', {
    name: 'rampup11_assessment',
    nullable: true,
    length: 255,
  })
  rampup11Assessment: string | null;

  @Column('character varying', {
    name: 'rampup11_forecast_value',
    nullable: true,
    length: 255,
  })
  rampup11ForecastValue: string | null;

  @Column('character varying', {
    name: 'rampup11_trend',
    nullable: true,
    length: 255,
  })
  rampup11Trend: string | null;

  @Column('character varying', {
    name: 'rampup1_actual_value',
    nullable: true,
    length: 255,
  })
  rampup1ActualValue: string | null;

  @Column('character varying', {
    name: 'rampup1_assessment',
    nullable: true,
    length: 255,
  })
  rampup1Assessment: string | null;

  @Column('character varying', {
    name: 'rampup1_forecast_value',
    nullable: true,
    length: 255,
  })
  rampup1ForecastValue: string | null;

  @Column('character varying', {
    name: 'rampup1_trend',
    nullable: true,
    length: 255,
  })
  rampup1Trend: string | null;

  @Column('character varying', {
    name: 'rampup20_actual_value',
    nullable: true,
    length: 255,
  })
  rampup20ActualValue: string | null;

  @Column('character varying', {
    name: 'rampup20_assessment',
    nullable: true,
    length: 255,
  })
  rampup20Assessment: string | null;

  @Column('character varying', {
    name: 'rampup20_forecast_value',
    nullable: true,
    length: 255,
  })
  rampup20ForecastValue: string | null;

  @Column('character varying', {
    name: 'rampup20_trend',
    nullable: true,
    length: 255,
  })
  rampup20Trend: string | null;

  @Column('character varying', {
    name: 'rampup21_actual_value',
    nullable: true,
    length: 255,
  })
  rampup21ActualValue: string | null;

  @Column('character varying', {
    name: 'rampup21_assessment',
    nullable: true,
    length: 255,
  })
  rampup21Assessment: string | null;

  @Column('character varying', {
    name: 'rampup21_forecast_value',
    nullable: true,
    length: 255,
  })
  rampup21ForecastValue: string | null;

  @Column('character varying', {
    name: 'rampup21_trend',
    nullable: true,
    length: 255,
  })
  rampup21Trend: string | null;

  @Column('character varying', {
    name: 'rampup2_actual_value',
    nullable: true,
    length: 255,
  })
  rampup2ActualValue: string | null;

  @Column('character varying', {
    name: 'rampup2_assessment',
    nullable: true,
    length: 255,
  })
  rampup2Assessment: string | null;

  @Column('character varying', {
    name: 'rampup2_forecast_value',
    nullable: true,
    length: 255,
  })
  rampup2ForecastValue: string | null;

  @Column('character varying', {
    name: 'rampup2_trend',
    nullable: true,
    length: 255,
  })
  rampup2Trend: string | null;

  @Column('character varying', {
    name: 'rampup30_actual_value',
    nullable: true,
    length: 255,
  })
  rampup30ActualValue: string | null;

  @Column('character varying', {
    name: 'rampup30_assessment',
    nullable: true,
    length: 255,
  })
  rampup30Assessment: string | null;

  @Column('character varying', {
    name: 'rampup30_forecast_value',
    nullable: true,
    length: 255,
  })
  rampup30ForecastValue: string | null;

  @Column('character varying', {
    name: 'rampup30_trend',
    nullable: true,
    length: 255,
  })
  rampup30Trend: string | null;

  @Column('character varying', {
    name: 'rampup31_actual_value',
    nullable: true,
    length: 255,
  })
  rampup31ActualValue: string | null;

  @Column('character varying', {
    name: 'rampup31_assessment',
    nullable: true,
    length: 255,
  })
  rampup31Assessment: string | null;

  @Column('character varying', {
    name: 'rampup31_forecast_value',
    nullable: true,
    length: 255,
  })
  rampup31ForecastValue: string | null;

  @Column('character varying', {
    name: 'rampup31_trend',
    nullable: true,
    length: 255,
  })
  rampup31Trend: string | null;

  @Column('character varying', {
    name: 'rampup32_actual_value',
    nullable: true,
    length: 255,
  })
  rampup32ActualValue: string | null;

  @Column('character varying', {
    name: 'rampup32_assessment',
    nullable: true,
    length: 255,
  })
  rampup32Assessment: string | null;

  @Column('character varying', {
    name: 'rampup32_forecast_value',
    nullable: true,
    length: 255,
  })
  rampup32ForecastValue: string | null;

  @Column('character varying', {
    name: 'rampup32_trend',
    nullable: true,
    length: 255,
  })
  rampup32Trend: string | null;

  @Column('character varying', {
    name: 'rampup3_actual_value',
    nullable: true,
    length: 255,
  })
  rampup3ActualValue: string | null;

  @Column('character varying', {
    name: 'rampup3_assessment',
    nullable: true,
    length: 255,
  })
  rampup3Assessment: string | null;

  @Column('character varying', {
    name: 'rampup3_forecast_value',
    nullable: true,
    length: 255,
  })
  rampup3ForecastValue: string | null;

  @Column('character varying', {
    name: 'rampup3_trend',
    nullable: true,
    length: 255,
  })
  rampup3Trend: string | null;

  @OneToMany(() => Dashboardisi, (dashboardisi) => dashboardisi.idrampup2)
  dashboardisis: Dashboardisi[];
}
