import { Injectable } from '@angular/core';
import { EnergyReading } from '../../domain/entities/energy-reading.entity';
import { EnergyReadingRepository } from '../../domain/repositories/energy-reading.repository';
import { EnergyValue } from '../../domain/value-objects/energy-value.vo';
import { Timestamp } from '../../domain/value-objects/timestamp.vo';

@Injectable({
  providedIn: 'root',
})
export class MockEnergyReadingRepository implements EnergyReadingRepository {
  public getReadings(length = 1200): Promise<EnergyReading[]> {
    const current = Date.now();
    const hour = 1000 * 60 * 60;

    return Promise.resolve(
      Array.from({ length }, (_, index) => {
        const timestamp = new Timestamp(current - index * hour);
        const energyValue = new EnergyValue(Math.random() * 0.7 + 0.4);
        return new EnergyReading(timestamp, energyValue);
      }),
    );
  }

  public getDeviceConsumptions(): Promise<EnergyReading[]> {
    const devices = [
      { name: 'Air conditioner', power: 0.3093, category: 'HVAC' },
      { name: 'Wi-Fi router', power: 0.0033, category: 'Electronics' },
      { name: 'Humidifer', power: 0.0518, category: 'HVAC' },
      { name: 'Smart TV', power: 0.1276, category: 'Entertainment' },
      { name: 'Diffuser', power: 0.0078, category: 'Home' },
      { name: 'Refrigerator', power: 0.0923, category: 'Appliances' },
    ];

    return Promise.resolve(
      devices.map(device => {
        const timestamp = Timestamp.now();
        const energyValue = new EnergyValue(device.power);
        return new EnergyReading(timestamp, energyValue);
      }),
    );
  }

  public getEnergyMetrics(): Promise<{
    powerDraw: string;
    solarProduction: string;
    gridFeed: string;
  }> {
    return Promise.resolve({
      powerDraw: '⚡️ 1.4kW',
      solarProduction: '☀️️ 5.8kW',
      gridFeed: '🔌️ 4.4kW',
    });
  }
}
