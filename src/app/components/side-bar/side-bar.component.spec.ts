import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideBarComponent, EnergyMetricsDto } from './side-bar.component';
import { MockEnergyReadingRepository } from '../../infrastructure/repositories/mock-energy-reading.repository';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  const mockMetrics: EnergyMetricsDto = {
    powerDraw: '⚡️ 1.4kW',
    solarProduction: '☀️️ 5.8kW',
    gridFeed: '🔌️ 4.4kW',
  };

  beforeEach(async () => {
    const repoSpy = jasmine.createSpyObj('MockEnergyReadingRepository', [
      'getEnergyMetrics',
      'getDeviceConsumptions',
    ]);
    repoSpy.getEnergyMetrics.and.returnValue(Promise.resolve(mockMetrics));
    repoSpy.getDeviceConsumptions.and.returnValue(Promise.resolve([]));

    await TestBed.configureTestingModule({
      declarations: [SideBarComponent],
      providers: [{ provide: MockEnergyReadingRepository, useValue: repoSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
