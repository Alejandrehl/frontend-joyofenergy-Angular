import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import {
  EnergyMetrics,
  DeviceConsumption,
} from 'src/app/shared/models/energy-consumption.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent implements OnInit {
  public energyMetrics$: Observable<EnergyMetrics>;
  public deviceConsumptions$: Observable<DeviceConsumption[]>;

  public constructor(private readonly apiService: ApiService) {}

  public ngOnInit(): void {
    this.energyMetrics$ = this.apiService.getEnergyMetrics();
    this.deviceConsumptions$ = this.apiService.getDeviceConsumptions();
  }

  public asIsOrder(): number {
    return 1;
  }

  public trackByDevice(index: number, device: DeviceConsumption): string {
    return device.name;
  }
}
