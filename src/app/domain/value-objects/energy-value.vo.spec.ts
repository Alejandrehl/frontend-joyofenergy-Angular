import { EnergyValue } from './energy-value.vo';

describe('EnergyValue', () => {
  describe('constructor', () => {
    it('should create EnergyValue with valid positive value', () => {
      const energyValue = new EnergyValue(5.5);
      expect(energyValue.getValue()).toBe(5.5);
    });

    it('should create EnergyValue with zero value', () => {
      const energyValue = new EnergyValue(0);
      expect(energyValue.getValue()).toBe(0);
    });

    it('should throw error when creating EnergyValue with negative value', () => {
      expect(() => new EnergyValue(-1)).toThrowError(
        'Energy value cannot be negative',
      );
    });

    it('should throw error when creating EnergyValue with negative decimal value', () => {
      expect(() => new EnergyValue(-0.5)).toThrowError(
        'Energy value cannot be negative',
      );
    });
  });

  describe('add', () => {
    it('should add two EnergyValue objects correctly', () => {
      const energyValue1 = new EnergyValue(2.5);
      const energyValue2 = new EnergyValue(3.5);
      const result = energyValue1.add(energyValue2);

      expect(result.getValue()).toBe(6);
      expect(result).toBeInstanceOf(EnergyValue);
    });

    it('should add EnergyValue with zero correctly', () => {
      const energyValue1 = new EnergyValue(2.5);
      const energyValue2 = new EnergyValue(0);
      const result = energyValue1.add(energyValue2);

      expect(result.getValue()).toBe(2.5);
    });
  });

  describe('multiply', () => {
    it('should multiply EnergyValue by positive factor correctly', () => {
      const energyValue = new EnergyValue(2.5);
      const result = energyValue.multiply(3);

      expect(result.getValue()).toBe(7.5);
      expect(result).toBeInstanceOf(EnergyValue);
    });

    it('should multiply EnergyValue by zero correctly', () => {
      const energyValue = new EnergyValue(2.5);
      const result = energyValue.multiply(0);

      expect(result.getValue()).toBe(0);
    });

    it('should multiply EnergyValue by decimal factor correctly', () => {
      const energyValue = new EnergyValue(10);
      const result = energyValue.multiply(0.5);

      expect(result.getValue()).toBe(5);
    });
  });

  describe('equals', () => {
    it('should return true for equal EnergyValue objects', () => {
      const energyValue1 = new EnergyValue(2.5);
      const energyValue2 = new EnergyValue(2.5);

      expect(energyValue1.equals(energyValue2)).toBeTrue();
    });

    it('should return false for different EnergyValue objects', () => {
      const energyValue1 = new EnergyValue(2.5);
      const energyValue2 = new EnergyValue(3.5);

      expect(energyValue1.equals(energyValue2)).toBeFalse();
    });

    it('should return true when comparing with itself', () => {
      const energyValue = new EnergyValue(2.5);

      expect(energyValue.equals(energyValue)).toBeTrue();
    });
  });

  describe('toString', () => {
    it('should return formatted string with 4 decimal places', () => {
      const energyValue = new EnergyValue(2.56789);

      expect(energyValue.toString()).toBe('2.5679');
    });

    it('should return formatted string for integer value', () => {
      const energyValue = new EnergyValue(5);

      expect(energyValue.toString()).toBe('5.0000');
    });

    it('should return formatted string for zero value', () => {
      const energyValue = new EnergyValue(0);

      expect(energyValue.toString()).toBe('0.0000');
    });
  });
});
