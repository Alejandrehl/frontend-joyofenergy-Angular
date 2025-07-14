import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  EnergyApplicationService,
  EnergyReadingDto,
} from '../../application/services/energy-application.service';
import { SidebarService } from '../../shared/services/sidebar.service';
import { MainComponent } from './main.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ChartComponent } from '../chart/chart.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  const mockEnergyData: EnergyReadingDto[] = [
    { time: Date.now(), value: 1.5 },
    { time: Date.now() - 3600000, value: 1.2 },
  ];

  beforeEach(async () => {
    const energyAppServiceSpy = jasmine.createSpyObj(
      'EnergyApplicationService',
      ['getEnergyConsumptionData'],
    );
    const sidebarServiceSpy = jasmine.createSpyObj('SidebarService', [], {
      closeSidebar$: of(),
    });

    energyAppServiceSpy.getEnergyConsumptionData.and.returnValue(
      of({
        readings: mockEnergyData,
        totalConsumption: 2.7,
        averageConsumption: 1.35,
      }),
    );

    await TestBed.configureTestingModule({
      declarations: [MainComponent, SideBarComponent, ChartComponent],
      providers: [
        { provide: EnergyApplicationService, useValue: energyAppServiceSpy },
        { provide: SidebarService, useValue: sidebarServiceSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with chart data from service', () => {
    expect(component.chartData).toEqual(mockEnergyData);
  });

  it('should initialize with sidebar closed', () => {
    expect(component.sidebarOpen).toBeFalse();
  });

  it('should toggle sidebar when toggleSidebar is called', () => {
    expect(component.sidebarOpen).toBeFalse();

    component.toggleSidebar();
    expect(component.sidebarOpen).toBeTrue();

    component.toggleSidebar();
    expect(component.sidebarOpen).toBeFalse();
  });

  it('should close sidebar when closeSidebar is called', () => {
    component.sidebarOpen = true;
    component.closeSidebar();
    expect(component.sidebarOpen).toBeFalse();
  });
});
