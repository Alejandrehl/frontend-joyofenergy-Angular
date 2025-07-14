import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  EnergyReading,
  EnergyConsumptionData,
  DeviceConsumption,
  EnergyMetrics,
} from '../models/energy-consumption.model';
import { EnergyService } from './energy.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private energyService: EnergyService) {}

  getEnergyReadings(length: number = 1200): Observable<EnergyReading[]> {
    return this.energyService.getEnergyReadings(length);
  }

  getEnergyConsumptionData(
    length: number = 1200
  ): Observable<EnergyConsumptionData> {
    return this.energyService.getEnergyConsumptionData(length);
  }

  getEnergyMetrics(): Observable<EnergyMetrics> {
    return this.energyService.getEnergyMetrics();
  }

  getDeviceConsumptions(): Observable<DeviceConsumption[]> {
    return this.energyService.getDeviceConsumptions();
  }
}
