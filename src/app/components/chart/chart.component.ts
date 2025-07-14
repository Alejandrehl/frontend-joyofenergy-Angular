import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { EnergyReadingDto } from '../../application/services/energy-application.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent {
  @Input() public chartData: EnergyReadingDto[] = [];
  public chart: unknown;
}
