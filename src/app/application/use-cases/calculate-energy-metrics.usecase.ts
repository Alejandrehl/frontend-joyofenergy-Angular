import { Injectable, Inject } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { EnergyReading } from '../../domain/entities/energy-reading.entity';
import {
  EnergyReadingRepository,
  ENERGY_READING_REPOSITORY,
} from '../../domain/repositories/energy-reading.repository';
import { EnergyCalculationService } from '../../domain/domain-services/energy-calculation.service';

export interface EnergyConsumptionData {
  readings: EnergyReading[];
  totalConsumption: number;
  averageConsumption: number;
}

@Injectable({
  providedIn: 'root',
})
export class CalculateEnergyMetricsUseCase {
  public constructor(
    @Inject(ENERGY_READING_REPOSITORY)
    private readonly repository: EnergyReadingRepository,
    private readonly calculationService: EnergyCalculationService
  ) {}

  public execute(length = 1200): Observable<EnergyConsumptionData> {
    return from(this.repository.getReadings(length)).pipe(
      map(readings => {
        const groupedReadings = this.calculationService.sortReadingsByTime(
          this.calculationService.groupReadingsByDay(readings)
        );
        const totalConsumption = this.calculationService
          .calculateTotalConsumption(groupedReadings)
          .getValue();
        const averageConsumption = this.calculationService
          .calculateAverageConsumption(groupedReadings)
          .getValue();

        return {
          readings: groupedReadings,
          totalConsumption,
          averageConsumption,
        };
      })
    );
  }
}
