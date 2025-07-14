import { EnergyValue } from '../value-objects/energy-value.vo';
import { Timestamp } from '../value-objects/timestamp.vo';

export class EnergyReading {
  public constructor(
    private readonly timestamp: Timestamp,
    private readonly energyValue: EnergyValue
  ) {}

  public getTimestamp(): Timestamp {
    return this.timestamp;
  }

  public getEnergyValue(): EnergyValue {
    return this.energyValue;
  }

  public getRawValue(): number {
    return this.energyValue.getValue();
  }

  public getRawTimestamp(): number {
    return this.timestamp.getValue();
  }

  public isFromSameDay(other: EnergyReading): boolean {
    return this.timestamp.getDayStart().equals(other.timestamp.getDayStart());
  }

  public isBefore(other: EnergyReading): boolean {
    return this.timestamp.isBefore(other.timestamp);
  }

  public isAfter(other: EnergyReading): boolean {
    return this.timestamp.isAfter(other.timestamp);
  }

  public equals(other: EnergyReading): boolean {
    return (
      this.timestamp.equals(other.timestamp) &&
      this.energyValue.equals(other.energyValue)
    );
  }
}
