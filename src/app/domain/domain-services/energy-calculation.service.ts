import { EnergyReading } from '../entities/energy-reading.entity';
import { EnergyValue } from '../value-objects/energy-value.vo';
import { Timestamp } from '../value-objects/timestamp.vo';

export class EnergyCalculationService {
  public calculateTotalConsumption(readings: EnergyReading[]): EnergyValue {
    if (readings.length === 0) {
      return new EnergyValue(0);
    }

    const total = readings.reduce(
      (sum, reading) => sum.add(reading.getEnergyValue()),
      new EnergyValue(0),
    );

    return total;
  }

  public calculateAverageConsumption(readings: EnergyReading[]): EnergyValue {
    if (readings.length === 0) {
      return new EnergyValue(0);
    }

    const total = this.calculateTotalConsumption(readings);
    return total.multiply(1 / readings.length);
  }

  public groupReadingsByDay(readings: EnergyReading[]): EnergyReading[] {
    const groupedByDay = new Map<number, EnergyValue>();

    readings.forEach(reading => {
      const dayStart = reading.getTimestamp().getDayStart().getValue();
      const currentValue = groupedByDay.get(dayStart) ?? new EnergyValue(0);
      groupedByDay.set(dayStart, currentValue.add(reading.getEnergyValue()));
    });

    return Array.from(groupedByDay.entries()).map(([timestamp, value]) => {
      const timestampVO = new Timestamp(timestamp);
      return new EnergyReading(timestampVO, value);
    });
  }

  public sortReadingsByTime(readings: EnergyReading[]): EnergyReading[] {
    return [...readings].sort((a, b) => {
      if (a.isBefore(b)) return -1;
      if (a.isAfter(b)) return 1;
      return 0;
    });
  }
}
