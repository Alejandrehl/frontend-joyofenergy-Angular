import { Component, OnInit, OnDestroy } from '@angular/core';
import { Data } from 'src/app/shared/models/dataModel';
import { ApiService } from 'src/app/shared/services/api.service';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { renderChart } from "../../shared/utils/chart";
import { groupByDay, sortByTime, getReadings } from "../../shared/utils/reading";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  chartData: Data[] = [];
  sidebarOpen: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private sidebarService: SidebarService) { 
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

  async createChart() {
    const readings = await getReadings();
    const containerId = "chart";
    this.chartData = readings;
    renderChart(containerId, sortByTime(groupByDay(readings)).slice(-30));
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

}
