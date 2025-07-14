import { NgModule } from '@angular/core';
import { ENERGY_READING_REPOSITORY } from './repositories/energy-reading.repository';
import { MockEnergyReadingRepository } from '../infrastructure/repositories/mock-energy-reading.repository';
import { EnergyCalculationService } from './domain-services/energy-calculation.service';

@NgModule({
  providers: [
    {
      provide: ENERGY_READING_REPOSITORY,
      useClass: MockEnergyReadingRepository,
    },
    EnergyCalculationService,
  ],
})
export class DomainModule {}
