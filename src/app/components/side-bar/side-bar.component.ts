import { Component, OnInit } from '@angular/core';
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
})
export class SideBarComponent implements OnInit {
  energyMetrics$: Observable<EnergyMetrics>;
  deviceConsumptions$: Observable<DeviceConsumption[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.energyMetrics$ = this.apiService.getEnergyMetrics();
    this.deviceConsumptions$ = this.apiService.getDeviceConsumptions();
  }

  asIsOrder(): number {
    return 1;
  }
}
