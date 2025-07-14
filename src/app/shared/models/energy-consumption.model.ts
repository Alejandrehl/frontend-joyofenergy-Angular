export interface EnergyReading {
  time: number;
  value: number;
}

export interface EnergyConsumptionData {
  readings: EnergyReading[];
  totalConsumption: number;
  averageConsumption: number;
}

export interface DeviceConsumption {
  name: string;
  power: string;
  category: string;
}

export interface EnergyMetrics {
  powerDraw: string;
  solarProduction: string;
  gridFeed: string;
}
