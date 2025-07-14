import { EnergyCalculationService } from './energy-calculation.service';
import { EnergyReading } from '../entities/energy-reading.entity';
import { EnergyValue } from '../value-objects/energy-value.vo';
import { Timestamp } from '../value-objects/timestamp.vo';

describe('EnergyCalculationService', () => {
  let service: EnergyCalculationService;

  beforeEach(() => {
    service = new EnergyCalculationService();
  });

  describe('calculateTotalConsumption', () => {
    it('should return zero EnergyValue for empty readings array', () => {
      const result = service.calculateTotalConsumption([]);

      expect(result.getValue()).toBe(0);
      expect(result).toBeInstanceOf(EnergyValue);
    });

    it('should calculate total consumption for single reading', () => {
      const reading = new EnergyReading(
        new Timestamp(Date.now()),
        new EnergyValue(2.5),
      );

      const result = service.calculateTotalConsumption([reading]);

      expect(result.getValue()).toBe(2.5);
    });

    it('should calculate total consumption for multiple readings', () => {
      const readings = [
        new EnergyReading(new Timestamp(Date.now()), new EnergyValue(2.5)),
        new EnergyReading(
          new Timestamp(Date.now() + 1000),
          new EnergyValue(3.5),
        ),
        new EnergyReading(
          new Timestamp(Date.now() + 2000),
          new EnergyValue(1.0),
        ),
      ];

      const result = service.calculateTotalConsumption(readings);

      expect(result.getValue()).toBe(7);
    });
  });

  describe('calculateAverageConsumption', () => {
    it('should return zero EnergyValue for empty readings array', () => {
      const result = service.calculateAverageConsumption([]);

      expect(result.getValue()).toBe(0);
      expect(result).toBeInstanceOf(EnergyValue);
    });

    it('should calculate average consumption for single reading', () => {
      const reading = new EnergyReading(
        new Timestamp(Date.now()),
        new EnergyValue(2.5),
      );

      const result = service.calculateAverageConsumption([reading]);

      expect(result.getValue()).toBe(2.5);
    });

    it('should calculate average consumption for multiple readings', () => {
      const readings = [
        new EnergyReading(new Timestamp(Date.now()), new EnergyValue(2.0)),
        new EnergyReading(
          new Timestamp(Date.now() + 1000),
          new EnergyValue(4.0),
        ),
        new EnergyReading(
          new Timestamp(Date.now() + 2000),
          new EnergyValue(6.0),
        ),
      ];

      const result = service.calculateAverageConsumption(readings);

      expect(result.getValue()).toBe(4);
    });
  });

  describe('groupReadingsByDay', () => {
    it('should return empty array for empty readings', () => {
      const result = service.groupReadingsByDay([]);

      expect(result).toEqual([]);
    });

    it('should group readings by day correctly', () => {
      const baseTime = new Date(2023, 0, 15, 10, 0, 0).getTime(); // 15 Jan 2023 10:00
      const readings = [
        new EnergyReading(new Timestamp(baseTime), new EnergyValue(2.0)),
        new EnergyReading(
          new Timestamp(baseTime + 3600000),
          new EnergyValue(3.0),
        ), // Same day
        new EnergyReading(
          new Timestamp(baseTime + 86400000),
          new EnergyValue(4.0),
        ), // Next day
      ];

      const result = service.groupReadingsByDay(readings);

      expect(result.length).toBe(2);
      expect(result[0].getEnergyValue().getValue()).toBe(5); // 2.0 + 3.0
      expect(result[1].getEnergyValue().getValue()).toBe(4); // 4.0
    });
  });

  describe('sortReadingsByTime', () => {
    it('should return empty array for empty readings', () => {
      const result = service.sortReadingsByTime([]);

      expect(result).toEqual([]);
    });

    it('should sort readings by time in ascending order', () => {
      const baseTime = Date.now();
      const readings = [
        new EnergyReading(new Timestamp(baseTime + 2000), new EnergyValue(3.0)),
        new EnergyReading(new Timestamp(baseTime), new EnergyValue(1.0)),
        new EnergyReading(new Timestamp(baseTime + 1000), new EnergyValue(2.0)),
      ];

      const result = service.sortReadingsByTime(readings);

      expect(result.length).toBe(3);
      expect(result[0].getEnergyValue().getValue()).toBe(1.0);
      expect(result[1].getEnergyValue().getValue()).toBe(2.0);
      expect(result[2].getEnergyValue().getValue()).toBe(3.0);
    });

    it('should maintain order for already sorted readings', () => {
      const baseTime = Date.now();
      const readings = [
        new EnergyReading(new Timestamp(baseTime), new EnergyValue(1.0)),
        new EnergyReading(new Timestamp(baseTime + 1000), new EnergyValue(2.0)),
        new EnergyReading(new Timestamp(baseTime + 2000), new EnergyValue(3.0)),
      ];

      const result = service.sortReadingsByTime(readings);

      expect(result).toEqual(readings);
    });
  });
});
