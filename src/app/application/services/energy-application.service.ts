import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetEnergyReadingsUseCase } from '../use-cases/get-energy-readings.usecase';
import { CalculateEnergyMetricsUseCase } from '../use-cases/calculate-energy-metrics.usecase';

export interface EnergyReadingDto {
  time: number;
  value: number;
}

export interface EnergyConsumptionDataDto {
  readings: EnergyReadingDto[];
  totalConsumption: number;
  averageConsumption: number;
}

@Injectable({
  providedIn: 'root',
})
export class EnergyApplicationService {
  public constructor(
    private readonly getReadingsUseCase: GetEnergyReadingsUseCase,
    private readonly calculateMetricsUseCase: CalculateEnergyMetricsUseCase,
  ) {}

  public getEnergyReadings(length = 1200): Observable<EnergyReadingDto[]> {
    return this.getReadingsUseCase.execute(length).pipe(
      map(readings =>
        readings.map(reading => ({
          time: reading.getRawTimestamp(),
          value: reading.getRawValue(),
        })),
      ),
    );
  }

  public getEnergyConsumptionData(
    length = 1200,
  ): Observable<EnergyConsumptionDataDto> {
    return this.calculateMetricsUseCase.execute(length).pipe(
      map(data => ({
        readings: data.readings.map(reading => ({
          time: reading.getRawTimestamp(),
          value: reading.getRawValue(),
        })),
        totalConsumption: data.totalConsumption,
        averageConsumption: data.averageConsumption,
      })),
    );
  }
}
