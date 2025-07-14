import { Timestamp } from './timestamp.vo';

describe('Timestamp', () => {
  describe('constructor', () => {
    it('should create Timestamp with valid positive value', () => {
      const timestamp = new Timestamp(1000000);
      expect(timestamp.getValue()).toBe(1000000);
    });

    it('should create Timestamp with zero value', () => {
      const timestamp = new Timestamp(0);
      expect(timestamp.getValue()).toBe(0);
    });

    it('should throw error when creating Timestamp with negative value', () => {
      expect(() => new Timestamp(-1)).toThrowError(
        'Timestamp cannot be negative',
      );
    });
  });

  describe('now', () => {
    it('should create Timestamp with current time', () => {
      const before = Date.now();
      const timestamp = Timestamp.now();
      const after = Date.now();

      expect(timestamp.getValue()).toBeGreaterThanOrEqual(before);
      expect(timestamp.getValue()).toBeLessThanOrEqual(after);
    });
  });

  describe('getValue', () => {
    it('should return the timestamp value', () => {
      const value = 1234567890;
      const timestamp = new Timestamp(value);
      expect(timestamp.getValue()).toBe(value);
    });
  });

  describe('getDate', () => {
    it('should return Date object from timestamp', () => {
      const value = 1234567890;
      const timestamp = new Timestamp(value);
      const date = timestamp.getDate();

      expect(date).toBeInstanceOf(Date);
      expect(date.getTime()).toBe(value);
    });
  });

  describe('isBefore', () => {
    it('should return true when timestamp is before other', () => {
      const timestamp1 = new Timestamp(1000);
      const timestamp2 = new Timestamp(2000);

      expect(timestamp1.isBefore(timestamp2)).toBeTrue();
    });

    it('should return false when timestamp is after other', () => {
      const timestamp1 = new Timestamp(2000);
      const timestamp2 = new Timestamp(1000);

      expect(timestamp1.isBefore(timestamp2)).toBeFalse();
    });

    it('should return false when timestamps are equal', () => {
      const timestamp1 = new Timestamp(1000);
      const timestamp2 = new Timestamp(1000);

      expect(timestamp1.isBefore(timestamp2)).toBeFalse();
    });
  });

  describe('isAfter', () => {
    it('should return true when timestamp is after other', () => {
      const timestamp1 = new Timestamp(2000);
      const timestamp2 = new Timestamp(1000);

      expect(timestamp1.isAfter(timestamp2)).toBeTrue();
    });

    it('should return false when timestamp is before other', () => {
      const timestamp1 = new Timestamp(1000);
      const timestamp2 = new Timestamp(2000);

      expect(timestamp1.isAfter(timestamp2)).toBeFalse();
    });

    it('should return false when timestamps are equal', () => {
      const timestamp1 = new Timestamp(1000);
      const timestamp2 = new Timestamp(1000);

      expect(timestamp1.isAfter(timestamp2)).toBeFalse();
    });
  });

  describe('equals', () => {
    it('should return true for equal timestamps', () => {
      const timestamp1 = new Timestamp(1000);
      const timestamp2 = new Timestamp(1000);

      expect(timestamp1.equals(timestamp2)).toBeTrue();
    });

    it('should return false for different timestamps', () => {
      const timestamp1 = new Timestamp(1000);
      const timestamp2 = new Timestamp(2000);

      expect(timestamp1.equals(timestamp2)).toBeFalse();
    });

    it('should return true when comparing with itself', () => {
      const timestamp = new Timestamp(1000);

      expect(timestamp.equals(timestamp)).toBeTrue();
    });
  });

  describe('getDayStart', () => {
    it('should return timestamp for start of day', () => {
      const date = new Date(2023, 5, 15, 14, 30, 45, 123); // June 15, 2023 14:30:45.123
      const timestamp = new Timestamp(date.getTime());
      const dayStart = timestamp.getDayStart();

      const expectedDayStart = new Date(2023, 5, 15, 0, 0, 0, 0); // June 15, 2023 00:00:00.000
      expect(dayStart.getValue()).toBe(expectedDayStart.getTime());
    });

    it('should return same timestamp for start of day when already at start', () => {
      const date = new Date(2023, 5, 15, 0, 0, 0, 0); // June 15, 2023 00:00:00.000
      const timestamp = new Timestamp(date.getTime());
      const dayStart = timestamp.getDayStart();

      expect(dayStart.getValue()).toBe(timestamp.getValue());
    });
  });
});
