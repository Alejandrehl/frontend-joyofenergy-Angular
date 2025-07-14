import { DeviceCategory } from '../value-objects/device-category.vo';
import { EnergyValue } from '../value-objects/energy-value.vo';

export class DeviceConsumption {
  public constructor(
    private readonly name: string,
    private readonly power: EnergyValue,
    private readonly category: DeviceCategory,
  ) {
    if (!name || name.trim().length === 0) {
      throw new Error('Device name cannot be empty');
    }
  }

  public getName(): string {
    return this.name;
  }

  public getPower(): EnergyValue {
    return this.power;
  }

  public getCategory(): DeviceCategory {
    return this.category;
  }

  public getPowerAsString(): string {
    return `${this.power.toString()}kW`;
  }

  public getCategoryValue(): string {
    return this.category.getValue();
  }

  public equals(other: DeviceConsumption): boolean {
    return (
      this.name === other.name &&
      this.power.equals(other.power) &&
      this.category.equals(other.category)
    );
  }
}
