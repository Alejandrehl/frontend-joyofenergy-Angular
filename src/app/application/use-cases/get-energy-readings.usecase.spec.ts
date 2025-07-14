import { TestBed } from '@angular/core/testing';
import { GetEnergyReadingsUseCase } from './get-energy-readings.usecase';
import {
  ENERGY_READING_REPOSITORY,
  EnergyReadingRepository,
} from '../../domain/repositories/energy-reading.repository';
import { EnergyCalculationService } from '../../domain/domain-services/energy-calculation.service';
import { EnergyReading } from '../../domain/entities/energy-reading.entity';

describe('GetEnergyReadingsUseCase', () => {
  let useCase: GetEnergyReadingsUseCase;
  let mockRepo: jasmine.SpyObj<EnergyReadingRepository>;
  let mockCalcService: jasmine.SpyObj<EnergyCalculationService>;

  const mockReadings: EnergyReading[] = [];

  beforeEach(() => {
    mockRepo = jasmine.createSpyObj('EnergyReadingRepository', ['getReadings']);
    mockCalcService = jasmine.createSpyObj('EnergyCalculationService', [
      'groupReadingsByDay',
      'sortReadingsByTime',
    ]);

    mockRepo.getReadings.and.returnValue(Promise.resolve(mockReadings));
    mockCalcService.groupReadingsByDay.and.returnValue(mockReadings);
    mockCalcService.sortReadingsByTime.and.returnValue(mockReadings);

    TestBed.configureTestingModule({
      providers: [
        GetEnergyReadingsUseCase,
        { provide: ENERGY_READING_REPOSITORY, useValue: mockRepo },
        { provide: EnergyCalculationService, useValue: mockCalcService },
      ],
    });
    useCase = TestBed.inject(GetEnergyReadingsUseCase);
  });

  it('should be created', () => {
    expect(useCase).toBeTruthy();
  });

  it('should execute and return readings', done => {
    useCase.execute(10).subscribe(result => {
      expect(result).toEqual(mockReadings);
      done();
    });
  });

  it('should executeGroupedByDay and return readings', done => {
    useCase.executeGroupedByDay(5).subscribe(result => {
      expect(result).toEqual(mockReadings);
      done();
    });
  });

  it('should executeSorted and return readings', done => {
    useCase.executeSorted(3).subscribe(result => {
      expect(result).toEqual(mockReadings);
      done();
    });
  });
});
