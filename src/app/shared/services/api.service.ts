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
  public constructor(private readonly energyService: EnergyService) {}

  public getEnergyReadings(length = 1200): Observable<EnergyReading[]> {
    return this.energyService.getEnergyReadings(length);
  }

  public getEnergyConsumptionData(
    length = 1200
  ): Observable<EnergyConsumptionData> {
    return this.energyService.getEnergyConsumptionData(length);
  }

  public getEnergyMetrics(): Observable<EnergyMetrics> {
    return this.energyService.getEnergyMetrics();
  }

  public getDeviceConsumptions(): Observable<DeviceConsumption[]> {
    return this.energyService.getDeviceConsumptions();
  }
}
