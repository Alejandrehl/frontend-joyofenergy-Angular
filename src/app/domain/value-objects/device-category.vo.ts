export class DeviceCategory {
  private static readonly VALID_CATEGORIES = [
    'HVAC',
    'Electronics',
    'Entertainment',
    'Home',
    'Appliances',
  ] as const;

  public constructor(private readonly value: string) {
    if (
      !DeviceCategory.VALID_CATEGORIES.includes(
        value as (typeof DeviceCategory.VALID_CATEGORIES)[number],
      )
    ) {
      throw new Error(`Invalid device category: ${value}`);
    }
  }

  public static getValidCategories(): readonly string[] {
    return DeviceCategory.VALID_CATEGORIES;
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: DeviceCategory): boolean {
    return this.value === other.value;
  }
}
