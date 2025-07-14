import { Injectable, Inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { EnergyReading } from '../../domain/entities/energy-reading.entity';
import {
  EnergyReadingRepository,
  ENERGY_READING_REPOSITORY,
} from '../../domain/repositories/energy-reading.repository';
import { EnergyCalculationService } from '../../domain/domain-services/energy-calculation.service';

@Injectable({
  providedIn: 'root',
})
export class GetEnergyReadingsUseCase {
  public constructor(
    @Inject(ENERGY_READING_REPOSITORY)
    private readonly repository: EnergyReadingRepository,
    private readonly calculationService: EnergyCalculationService
  ) {}

  public execute(length = 1200): Observable<EnergyReading[]> {
    return from(this.repository.getReadings(length));
  }

  public executeGroupedByDay(length = 1200): Observable<EnergyReading[]> {
    return from(
      this.repository
        .getReadings(length)
        .then(readings => this.calculationService.groupReadingsByDay(readings))
    );
  }

  public executeSorted(length = 1200): Observable<EnergyReading[]> {
    return from(
      this.repository
        .getReadings(length)
        .then(readings => this.calculationService.sortReadingsByTime(readings))
    );
  }
}
