import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartComponent } from './chart.component';
import { EnergyReadingDto } from '../../application/services/energy-application.service';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  const mockChartData: EnergyReadingDto[] = [
    { time: 1620000000000, value: 1.5 },
    { time: 1620003600000, value: 2.0 },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept chartData input', () => {
    component.chartData = mockChartData;
    fixture.detectChanges();
    expect(component.chartData).toEqual(mockChartData);
  });
});
