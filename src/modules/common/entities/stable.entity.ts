import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dashboardisi } from './Dashboardisi';

@Index('stable_pkey', ['id'], { unique: true })
@Entity('stable', { schema: 'public' })
export class Stable {
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
    name: 'stable00_actual_value',
    nullable: true,
    length: 255,
  })
  stable00ActualValue: string | null;

  @Column('character varying', {
    name: 'stable00_assessment',
    nullable: true,
    length: 255,
  })
  stable00Assessment: string | null;

  @Column('character varying', {
    name: 'stable00_forecast_value',
    nullable: true,
    length: 255,
  })
  stable00ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable00_trend',
    nullable: true,
    length: 255,
  })
  stable00Trend: string | null;

  @Column('character varying', {
    name: 'stable01_actual_value',
    nullable: true,
    length: 255,
  })
  stable01ActualValue: string | null;

  @Column('character varying', {
    name: 'stable01_assessment',
    nullable: true,
    length: 255,
  })
  stable01Assessment: string | null;

  @Column('character varying', {
    name: 'stable01_forecast_value',
    nullable: true,
    length: 255,
  })
  stable01ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable01_trend',
    nullable: true,
    length: 255,
  })
  stable01Trend: string | null;

  @Column('character varying', {
    name: 'stable02_actual_value',
    nullable: true,
    length: 255,
  })
  stable02ActualValue: string | null;

  @Column('character varying', {
    name: 'stable02_assessment',
    nullable: true,
    length: 255,
  })
  stable02Assessment: string | null;

  @Column('character varying', {
    name: 'stable02_forecast_value',
    nullable: true,
    length: 255,
  })
  stable02ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable02_trend',
    nullable: true,
    length: 255,
  })
  stable02Trend: string | null;

  @Column('character varying', {
    name: 'stable03_actual_value',
    nullable: true,
    length: 255,
  })
  stable03ActualValue: string | null;

  @Column('character varying', {
    name: 'stable03_assessment',
    nullable: true,
    length: 255,
  })
  stable03Assessment: string | null;

  @Column('character varying', {
    name: 'stable03_forecast_value',
    nullable: true,
    length: 255,
  })
  stable03ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable03_trend',
    nullable: true,
    length: 255,
  })
  stable03Trend: string | null;

  @Column('character varying', {
    name: 'stable04_actual_value',
    nullable: true,
    length: 255,
  })
  stable04ActualValue: string | null;

  @Column('character varying', {
    name: 'stable04_assessment',
    nullable: true,
    length: 255,
  })
  stable04Assessment: string | null;

  @Column('character varying', {
    name: 'stable04_forecast_value',
    nullable: true,
    length: 255,
  })
  stable04ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable04_trend',
    nullable: true,
    length: 255,
  })
  stable04Trend: string | null;

  @Column('character varying', {
    name: 'stable0_actual_value',
    nullable: true,
    length: 255,
  })
  stable0ActualValue: string | null;

  @Column('character varying', {
    name: 'stable0_assessment',
    nullable: true,
    length: 255,
  })
  stable0Assessment: string | null;

  @Column('character varying', {
    name: 'stable0_forecast_value',
    nullable: true,
    length: 255,
  })
  stable0ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable0_trend',
    nullable: true,
    length: 255,
  })
  stable0Trend: string | null;

  @Column('character varying', {
    name: 'stable10_actual_value',
    nullable: true,
    length: 255,
  })
  stable10ActualValue: string | null;

  @Column('character varying', {
    name: 'stable10_assessment',
    nullable: true,
    length: 255,
  })
  stable10Assessment: string | null;

  @Column('character varying', {
    name: 'stable10_forecast_value',
    nullable: true,
    length: 255,
  })
  stable10ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable10_trend',
    nullable: true,
    length: 255,
  })
  stable10Trend: string | null;

  @Column('character varying', {
    name: 'stable11_actual_value',
    nullable: true,
    length: 255,
  })
  stable11ActualValue: string | null;

  @Column('character varying', {
    name: 'stable11_assessment',
    nullable: true,
    length: 255,
  })
  stable11Assessment: string | null;

  @Column('character varying', {
    name: 'stable11_forecast_value',
    nullable: true,
    length: 255,
  })
  stable11ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable11_trend',
    nullable: true,
    length: 255,
  })
  stable11Trend: string | null;

  @Column('character varying', {
    name: 'stable12_actual_value',
    nullable: true,
    length: 255,
  })
  stable12ActualValue: string | null;

  @Column('character varying', {
    name: 'stable12_assessment',
    nullable: true,
    length: 255,
  })
  stable12Assessment: string | null;

  @Column('character varying', {
    name: 'stable12_forecast_value',
    nullable: true,
    length: 255,
  })
  stable12ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable12_trend',
    nullable: true,
    length: 255,
  })
  stable12Trend: string | null;

  @Column('character varying', {
    name: 'stable13_actual_value',
    nullable: true,
    length: 255,
  })
  stable13ActualValue: string | null;

  @Column('character varying', {
    name: 'stable13_assessment',
    nullable: true,
    length: 255,
  })
  stable13Assessment: string | null;

  @Column('character varying', {
    name: 'stable13_forecast_value',
    nullable: true,
    length: 255,
  })
  stable13ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable13_trend',
    nullable: true,
    length: 255,
  })
  stable13Trend: string | null;

  @Column('character varying', {
    name: 'stable14_actual_value',
    nullable: true,
    length: 255,
  })
  stable14ActualValue: string | null;

  @Column('character varying', {
    name: 'stable14_assessment',
    nullable: true,
    length: 255,
  })
  stable14Assessment: string | null;

  @Column('character varying', {
    name: 'stable14_forecast_value',
    nullable: true,
    length: 255,
  })
  stable14ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable14_trend',
    nullable: true,
    length: 255,
  })
  stable14Trend: string | null;

  @Column('character varying', {
    name: 'stable1_actual_value',
    nullable: true,
    length: 255,
  })
  stable1ActualValue: string | null;

  @Column('character varying', {
    name: 'stable1_assessment',
    nullable: true,
    length: 255,
  })
  stable1Assessment: string | null;

  @Column('character varying', {
    name: 'stable1_forecast_value',
    nullable: true,
    length: 255,
  })
  stable1ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable1_trend',
    nullable: true,
    length: 255,
  })
  stable1Trend: string | null;

  @Column('character varying', {
    name: 'stable20_actual_value',
    nullable: true,
    length: 255,
  })
  stable20ActualValue: string | null;

  @Column('character varying', {
    name: 'stable20_assessment',
    nullable: true,
    length: 255,
  })
  stable20Assessment: string | null;

  @Column('character varying', {
    name: 'stable20_forecast_value',
    nullable: true,
    length: 255,
  })
  stable20ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable20_trend',
    nullable: true,
    length: 255,
  })
  stable20Trend: string | null;

  @Column('character varying', {
    name: 'stable21_actual_value',
    nullable: true,
    length: 255,
  })
  stable21ActualValue: string | null;

  @Column('character varying', {
    name: 'stable21_assessment',
    nullable: true,
    length: 255,
  })
  stable21Assessment: string | null;

  @Column('character varying', {
    name: 'stable21_forecast_value',
    nullable: true,
    length: 255,
  })
  stable21ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable21_trend',
    nullable: true,
    length: 255,
  })
  stable21Trend: string | null;

  @Column('character varying', {
    name: 'stable22_actual_value',
    nullable: true,
    length: 255,
  })
  stable22ActualValue: string | null;

  @Column('character varying', {
    name: 'stable22_assessment',
    nullable: true,
    length: 255,
  })
  stable22Assessment: string | null;

  @Column('character varying', {
    name: 'stable22_forecast_value',
    nullable: true,
    length: 255,
  })
  stable22ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable22_trend',
    nullable: true,
    length: 255,
  })
  stable22Trend: string | null;

  @Column('character varying', {
    name: 'stable2_actual_value',
    nullable: true,
    length: 255,
  })
  stable2ActualValue: string | null;

  @Column('character varying', {
    name: 'stable2_assessment',
    nullable: true,
    length: 255,
  })
  stable2Assessment: string | null;

  @Column('character varying', {
    name: 'stable2_forecast_value',
    nullable: true,
    length: 255,
  })
  stable2ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable2_trend',
    nullable: true,
    length: 255,
  })
  stable2Trend: string | null;

  @Column('character varying', {
    name: 'stable30_actual_value',
    nullable: true,
    length: 255,
  })
  stable30ActualValue: string | null;

  @Column('character varying', {
    name: 'stable30_assessment',
    nullable: true,
    length: 255,
  })
  stable30Assessment: string | null;

  @Column('character varying', {
    name: 'stable30_forecast_value',
    nullable: true,
    length: 255,
  })
  stable30ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable30_trend',
    nullable: true,
    length: 255,
  })
  stable30Trend: string | null;

  @Column('character varying', {
    name: 'stable31_actual_value',
    nullable: true,
    length: 255,
  })
  stable31ActualValue: string | null;

  @Column('character varying', {
    name: 'stable31_assessment',
    nullable: true,
    length: 255,
  })
  stable31Assessment: string | null;

  @Column('character varying', {
    name: 'stable31_forecast_value',
    nullable: true,
    length: 255,
  })
  stable31ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable31_trend',
    nullable: true,
    length: 255,
  })
  stable31Trend: string | null;

  @Column('character varying', {
    name: 'stable32_actual_value',
    nullable: true,
    length: 255,
  })
  stable32ActualValue: string | null;

  @Column('character varying', {
    name: 'stable32_assessment',
    nullable: true,
    length: 255,
  })
  stable32Assessment: string | null;

  @Column('character varying', {
    name: 'stable32_forecast_value',
    nullable: true,
    length: 255,
  })
  stable32ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable32_trend',
    nullable: true,
    length: 255,
  })
  stable32Trend: string | null;

  @Column('character varying', {
    name: 'stable33_actual_value',
    nullable: true,
    length: 255,
  })
  stable33ActualValue: string | null;

  @Column('character varying', {
    name: 'stable33_assessment',
    nullable: true,
    length: 255,
  })
  stable33Assessment: string | null;

  @Column('character varying', {
    name: 'stable33_forecast_value',
    nullable: true,
    length: 255,
  })
  stable33ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable33_trend',
    nullable: true,
    length: 255,
  })
  stable33Trend: string | null;

  @Column('character varying', {
    name: 'stable34_actual_value',
    nullable: true,
    length: 255,
  })
  stable34ActualValue: string | null;

  @Column('character varying', {
    name: 'stable34_assessment',
    nullable: true,
    length: 255,
  })
  stable34Assessment: string | null;

  @Column('character varying', {
    name: 'stable34_forecast_value',
    nullable: true,
    length: 255,
  })
  stable34ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable34_trend',
    nullable: true,
    length: 255,
  })
  stable34Trend: string | null;

  @Column('character varying', {
    name: 'stable35_actual_value',
    nullable: true,
    length: 255,
  })
  stable35ActualValue: string | null;

  @Column('character varying', {
    name: 'stable35_assessment',
    nullable: true,
    length: 255,
  })
  stable35Assessment: string | null;

  @Column('character varying', {
    name: 'stable35_forecast_value',
    nullable: true,
    length: 255,
  })
  stable35ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable35_trend',
    nullable: true,
    length: 255,
  })
  stable35Trend: string | null;

  @Column('character varying', {
    name: 'stable36_actual_value',
    nullable: true,
    length: 255,
  })
  stable36ActualValue: string | null;

  @Column('character varying', {
    name: 'stable36_assessment',
    nullable: true,
    length: 255,
  })
  stable36Assessment: string | null;

  @Column('character varying', {
    name: 'stable36_forecast_value',
    nullable: true,
    length: 255,
  })
  stable36ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable36_trend',
    nullable: true,
    length: 255,
  })
  stable36Trend: string | null;

  @Column('character varying', {
    name: 'stable3_actual_value',
    nullable: true,
    length: 255,
  })
  stable3ActualValue: string | null;

  @Column('character varying', {
    name: 'stable3_assessment',
    nullable: true,
    length: 255,
  })
  stable3Assessment: string | null;

  @Column('character varying', {
    name: 'stable3_forecast_value',
    nullable: true,
    length: 255,
  })
  stable3ForecastValue: string | null;

  @Column('character varying', {
    name: 'stable3_trend',
    nullable: true,
    length: 255,
  })
  stable3Trend: string | null;

  @OneToMany(() => Dashboardisi, (dashboardisi) => dashboardisi.idstable2)
  dashboardisis: Dashboardisi[];
}
