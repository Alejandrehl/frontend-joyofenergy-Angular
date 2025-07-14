import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
  EnergyApplicationService,
  EnergyReadingDto,
} from '../../application/services/energy-application.service';
import { SidebarService } from '../../shared/services/sidebar.service';
import { renderChart } from '../../shared/utils/chart';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit, OnDestroy {
  public chartData: EnergyReadingDto[] = [];
  public sidebarOpen = false;
  private readonly subscription: Subscription = new Subscription();

  public constructor(
    private readonly sidebarService: SidebarService,
    private readonly energyApplicationService: EnergyApplicationService,
  ) {
    this.createChart();
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.sidebarService.closeSidebar$.subscribe(() => {
        this.closeSidebar();
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public createChart(): void {
    this.subscription.add(
      this.energyApplicationService
        .getEnergyConsumptionData()
        .subscribe(data => {
          const containerId = 'chart';
          this.chartData = data.readings;
          renderChart(containerId, data.readings.slice(-30));
        }),
    );
  }

  public toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  public closeSidebar(): void {
    this.sidebarOpen = false;
  }
}
