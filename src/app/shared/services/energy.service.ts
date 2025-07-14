import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  EnergyReading,
  EnergyConsumptionData,
  DeviceConsumption,
  EnergyMetrics,
} from '../models/energy-consumption.model';
import { getReadings, groupByDay, sortByTime } from '../utils/reading';

@Injectable({
  providedIn: 'root',
})
export class EnergyService {
  public constructor() {}

  public getEnergyReadings(length = 1200): Observable<EnergyReading[]> {
    return new Observable(observer => {
      void getReadings(length).then(readings => {
        observer.next(readings);
        observer.complete();
      });
    });
  }

  public getEnergyConsumptionData(
    length = 1200,
  ): Observable<EnergyConsumptionData> {
    return new Observable(observer => {
      void getReadings(length).then(readings => {
        const groupedReadings = sortByTime(groupByDay(readings));
        const totalConsumption = groupedReadings.reduce(
          (sum, reading) => sum + reading.value,
          0,
        );
        const averageConsumption = totalConsumption / groupedReadings.length;

        observer.next({
          readings: groupedReadings,
          totalConsumption,
          averageConsumption,
        });
        observer.complete();
      });
    });
  }

  public getEnergyMetrics(): Observable<EnergyMetrics> {
    return of({
      powerDraw: '⚡️ 1.4kW',
      solarProduction: '☀️️ 5.8kW',
      gridFeed: '🔌️ 4.4kW',
    });
  }

  public getDeviceConsumptions(): Observable<DeviceConsumption[]> {
    return of([
      { name: 'Air conditioner', power: '0.3093kW', category: 'HVAC' },
      { name: 'Wi-Fi router', power: '0.0033kW', category: 'Electronics' },
      { name: 'Humidifer', power: '0.0518kW', category: 'HVAC' },
      { name: 'Smart TV', power: '0.1276kW', category: 'Entertainment' },
      { name: 'Diffuser', power: '0.0078kW', category: 'Home' },
      { name: 'Refrigerator', power: '0.0923kW', category: 'Appliances' },
    ]);
  }
}
