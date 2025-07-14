import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { MockEnergyReadingRepository } from '../../infrastructure/repositories/mock-energy-reading.repository';

export interface EnergyMetricsDto {
  powerDraw: string;
  solarProduction: string;
  gridFeed: string;
}

export interface DeviceConsumptionDto {
  name: string;
  power: string;
  category: string;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent implements OnInit {
  public energyMetrics$: Observable<EnergyMetricsDto>;
  public deviceConsumptions$: Observable<DeviceConsumptionDto[]>;

  public constructor(
    private readonly mockRepository: MockEnergyReadingRepository,
  ) {}

  public ngOnInit(): void {
    this.energyMetrics$ = new Observable(observer => {
      void this.mockRepository.getEnergyMetrics().then(metrics => {
        observer.next(metrics);
        observer.complete();
      });
    });

    this.deviceConsumptions$ = new Observable(observer => {
      void this.mockRepository.getDeviceConsumptions().then(() => {
        const devices: DeviceConsumptionDto[] = [
          { name: 'Air conditioner', power: '0.3093kW', category: 'HVAC' },
          { name: 'Wi-Fi router', power: '0.0033kW', category: 'Electronics' },
          { name: 'Humidifer', power: '0.0518kW', category: 'HVAC' },
          { name: 'Smart TV', power: '0.1276kW', category: 'Entertainment' },
          { name: 'Diffuser', power: '0.0078kW', category: 'Home' },
          { name: 'Refrigerator', power: '0.0923kW', category: 'Appliances' },
        ];
        observer.next(devices);
        observer.complete();
      });
    });
  }

  public asIsOrder(): number {
    return 1;
  }

  public trackByDevice(index: number, device: DeviceConsumptionDto): string {
    return device.name;
  }
}
