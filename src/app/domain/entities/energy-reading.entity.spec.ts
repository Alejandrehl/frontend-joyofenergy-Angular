import { EnergyReading } from './energy-reading.entity';
import { EnergyValue } from '../value-objects/energy-value.vo';
import { Timestamp } from '../value-objects/timestamp.vo';

describe('EnergyReading', () => {
  let timestamp1: Timestamp;
  let timestamp2: Timestamp;
  let energyValue1: EnergyValue;
  let energyValue2: EnergyValue;
  let reading1: EnergyReading;
  let reading2: EnergyReading;

  beforeEach(() => {
    timestamp1 = new Timestamp(1000000);
    timestamp2 = new Timestamp(2000000);
    energyValue1 = new EnergyValue(1.5);
    energyValue2 = new EnergyValue(2.5);
    reading1 = new EnergyReading(timestamp1, energyValue1);
    reading2 = new EnergyReading(timestamp2, energyValue2);
  });

  describe('constructor', () => {
    it('should create EnergyReading with timestamp and energy value', () => {
      expect(reading1.getTimestamp()).toBe(timestamp1);
      expect(reading1.getEnergyValue()).toBe(energyValue1);
    });
  });

  describe('getTimestamp', () => {
    it('should return the timestamp', () => {
      expect(reading1.getTimestamp()).toBe(timestamp1);
    });
  });

  describe('getEnergyValue', () => {
    it('should return the energy value', () => {
      expect(reading1.getEnergyValue()).toBe(energyValue1);
    });
  });

  describe('getRawValue', () => {
    it('should return the raw energy value', () => {
      expect(reading1.getRawValue()).toBe(1.5);
    });
  });

  describe('getRawTimestamp', () => {
    it('should return the raw timestamp value', () => {
      expect(reading1.getRawTimestamp()).toBe(1000000);
    });
  });

  describe('isFromSameDay', () => {
    it('should return true for readings from same day', () => {
      const sameDayTimestamp1 = new Timestamp(
        new Date(2023, 5, 15, 10, 30).getTime(),
      );
      const sameDayTimestamp2 = new Timestamp(
        new Date(2023, 5, 15, 14, 45).getTime(),
      );
      const sameDayReading1 = new EnergyReading(
        sameDayTimestamp1,
        energyValue1,
      );
      const sameDayReading2 = new EnergyReading(
        sameDayTimestamp2,
        energyValue2,
      );

      expect(sameDayReading1.isFromSameDay(sameDayReading2)).toBeTrue();
    });

    it('should return false for readings from different days', () => {
      const day1Timestamp = new Timestamp(
        new Date(2023, 5, 15, 10, 30).getTime(),
      );
      const day2Timestamp = new Timestamp(
        new Date(2023, 5, 16, 10, 30).getTime(),
      );
      const day1Reading = new EnergyReading(day1Timestamp, energyValue1);
      const day2Reading = new EnergyReading(day2Timestamp, energyValue2);

      expect(day1Reading.isFromSameDay(day2Reading)).toBeFalse();
    });
  });

  describe('isBefore', () => {
    it('should return true when reading is before other', () => {
      expect(reading1.isBefore(reading2)).toBeTrue();
    });

    it('should return false when reading is after other', () => {
      expect(reading2.isBefore(reading1)).toBeFalse();
    });

    it('should return false when readings have same timestamp', () => {
      const sameTimeReading = new EnergyReading(timestamp1, energyValue2);
      expect(reading1.isBefore(sameTimeReading)).toBeFalse();
    });
  });

  describe('isAfter', () => {
    it('should return true when reading is after other', () => {
      expect(reading2.isAfter(reading1)).toBeTrue();
    });

    it('should return false when reading is before other', () => {
      expect(reading1.isAfter(reading2)).toBeFalse();
    });

    it('should return false when readings have same timestamp', () => {
      const sameTimeReading = new EnergyReading(timestamp1, energyValue2);
      expect(reading1.isAfter(sameTimeReading)).toBeFalse();
    });
  });

  describe('equals', () => {
    it('should return true for equal readings', () => {
      const equalReading = new EnergyReading(timestamp1, energyValue1);
      expect(reading1.equals(equalReading)).toBeTrue();
    });

    it('should return false for readings with different timestamps', () => {
      const differentTimeReading = new EnergyReading(timestamp2, energyValue1);
      expect(reading1.equals(differentTimeReading)).toBeFalse();
    });

    it('should return false for readings with different energy values', () => {
      const differentEnergyReading = new EnergyReading(
        timestamp1,
        energyValue2,
      );
      expect(reading1.equals(differentEnergyReading)).toBeFalse();
    });

    it('should return false for readings with different timestamps and energy values', () => {
      expect(reading1.equals(reading2)).toBeFalse();
    });

    it('should return true when comparing with itself', () => {
      expect(reading1.equals(reading1)).toBeTrue();
    });
  });
});
