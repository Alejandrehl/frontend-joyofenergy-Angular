export class EnergyValue {
  public constructor(private readonly value: number) {
    if (value < 0) {
      throw new Error('Energy value cannot be negative');
    }
  }

  public getValue(): number {
    return this.value;
  }

  public add(other: EnergyValue): EnergyValue {
    return new EnergyValue(this.value + other.value);
  }

  public multiply(factor: number): EnergyValue {
    return new EnergyValue(this.value * factor);
  }

  public equals(other: EnergyValue): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return `${this.value.toFixed(4)}`;
  }
}
