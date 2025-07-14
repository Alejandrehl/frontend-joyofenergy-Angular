import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { EnergyReading } from 'src/app/shared/models/energy-consumption.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent {
  @Input() public chartData: EnergyReading[] = [];
  public chart: unknown;
}
