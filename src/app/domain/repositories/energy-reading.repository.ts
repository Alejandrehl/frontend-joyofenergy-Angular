import { InjectionToken } from '@angular/core';
import { EnergyReading } from '../entities/energy-reading.entity';

export const ENERGY_READING_REPOSITORY =
  new InjectionToken<EnergyReadingRepository>('EnergyReadingRepository');

export interface EnergyReadingRepository {
  getReadings(length?: number): Promise<EnergyReading[]>;
  getDeviceConsumptions(): Promise<EnergyReading[]>;
  getEnergyMetrics(): Promise<{
    powerDraw: string;
    solarProduction: string;
    gridFeed: string;
  }>;
}
