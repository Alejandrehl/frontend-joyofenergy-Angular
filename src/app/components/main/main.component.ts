import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnergyReading } from 'src/app/shared/models/energy-consumption.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { renderChart } from '../../shared/utils/chart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  chartData: EnergyReading[] = [];
  sidebarOpen: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private sidebarService: SidebarService,
    private apiService: ApiService
  ) {
    this.createChart();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.sidebarService.closeSidebar$.subscribe(() => {
        this.closeSidebar();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createChart(): void {
    this.subscription.add(
      this.apiService.getEnergyConsumptionData().subscribe(data => {
        const containerId = 'chart';
        this.chartData = data.readings;
        renderChart(containerId, data.readings.slice(-30));
      })
    );
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }
}
