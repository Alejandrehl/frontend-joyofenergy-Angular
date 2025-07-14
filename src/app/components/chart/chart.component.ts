import { Component, Input } from '@angular/core';
import { EnergyReading } from 'src/app/shared/models/energy-consumption.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  chart: unknown;
  @Input() chartData: EnergyReading[] = [];
  constructor() {}
}
