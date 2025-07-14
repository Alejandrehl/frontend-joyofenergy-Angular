export class Timestamp {
  public constructor(private readonly value: number) {
    if (value < 0) {
      throw new Error('Timestamp cannot be negative');
    }
  }

  public static now(): Timestamp {
    return new Timestamp(Date.now());
  }

  public getValue(): number {
    return this.value;
  }

  public getDate(): Date {
    return new Date(this.value);
  }

  public isBefore(other: Timestamp): boolean {
    return this.value < other.value;
  }

  public isAfter(other: Timestamp): boolean {
    return this.value > other.value;
  }

  public equals(other: Timestamp): boolean {
    return this.value === other.value;
  }

  public getDayStart(): Timestamp {
    const date = this.getDate();
    const dayStart = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );
    return new Timestamp(dayStart.getTime());
  }
}
